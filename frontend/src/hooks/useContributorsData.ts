import { useState, useEffect } from "react"
import {
  type ContributorStats,
  type PR,
  type RepoData,
} from "../types/contributor"
import {
  getContributionOverviewsUrl,
  getContributionOverviewMarkdownUrl,
  getPullRequestUrl,
} from "../constants/api"

interface UseContributorsDataReturn {
  data: Record<string, ContributorStats>
  dateUsed: string
  repositories: Record<string, number>
  repoDetails: RepoData[]
  selectedContributor?: string
  isModalOpen: boolean
  sortedContributors: [string, ContributorStats][]
  setSelectedContributor: (username?: string) => void
  setIsModalOpen: (isOpen: boolean) => void
}

export function useContributorsData(): UseContributorsDataReturn {
  const [data, setData] = useState<Record<string, ContributorStats>>({})
  const [dateUsed, setDateUsed] = useState<string>("")
  const [repositories, setRepositories] = useState<Record<string, number>>({})
  const [repoDetails, setRepoDetails] = useState<RepoData[]>([])
  const [selectedContributor, setSelectedContributor] = useState<string>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        // First fetch the list of files
        const filesResp = await fetch(getContributionOverviewsUrl())
        const files = await filesResp.json()

        // Filter for JSON files and sort by name to get the latest
        const jsonFiles = files
          .filter((file: { name: string }) => file.name.endsWith(".json"))
          .sort((a: { name: string }, b: { name: string }) =>
            b.name.localeCompare(a.name),
          )

        if (jsonFiles.length === 0) throw new Error("No JSON files found")

        const latestFile = jsonFiles[0]
        const date = latestFile.name.replace(".json", "")
        setDateUsed(date)

        // Fetch the JSON data
        const jsonResp = await fetch(latestFile.download_url)
        const jsonData = await jsonResp.json()
        setData(jsonData)

        // Fetch the markdown file
        const mdResp = await fetch(getContributionOverviewMarkdownUrl(date))
        const markdown = await mdResp.text()

        // Parse repository data from markdown
        const repoStats: Record<string, number> = {}
        const repoDetails: RepoData[] = []

        let currentRepo: string | null = null
        let currentPRs: PR[] = []

        markdown.split("\n").forEach((line) => {
          // Match repository headers
          const repoMatch = line.match(/### \[(.*?)\]/)
          if (repoMatch) {
            if (currentRepo && currentPRs.length > 0) {
              repoDetails.push({ name: currentRepo, prs: [...currentPRs] })
            }
            currentRepo = repoMatch[1]
            currentPRs = []
            return
          }

          // Match PR rows in tables
          const prMatch = line.match(
            /\| \[#(\d+)\].*? \| (🐳 Major|🐙 Minor|🐌 Tiny) \| (.*?) \| (.*?) \|/,
          )
          if (prMatch && currentRepo) {
            repoStats[currentRepo] = (repoStats[currentRepo] || 0) + 1
            currentPRs.push({
              number: parseInt(prMatch[1]),
              impact: prMatch[2] as PR["impact"],
              contributor: prMatch[3],
              description: prMatch[4],
              url: getPullRequestUrl(currentRepo, parseInt(prMatch[1])),
            })
          }
        })

        // Add the last repo if exists
        if (currentRepo && currentPRs.length > 0) {
          repoDetails.push({ name: currentRepo, prs: currentPRs })
        }

        setRepositories(repoStats)
        setRepoDetails(repoDetails)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const getStarCount = (stars?: string) => (stars ?? "").length

  const sortedContributors = Object.entries(data).sort((a, b) => {
    // Primary sort by star count
    const starDiff = getStarCount(b[1].stars) - getStarCount(a[1].stars)
    if (starDiff !== 0) return starDiff

    // Secondary sort by PR count
    return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0)
  })

  return {
    data,
    dateUsed,
    repositories,
    repoDetails,
    selectedContributor,
    isModalOpen,
    sortedContributors,
    setSelectedContributor,
    setIsModalOpen,
  }
}
