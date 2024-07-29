# contribution-tracker

Generates weekly contribution overviews for tscircuit contributors. Check out all
the [contribution overviews here](./contribution-overviews/)

* All PRs in the tscircuit org are scanned/summarized via Claude Haiku
* Claude classifies each Diff/PR as a Major, Minor or Tiny contribution
* All the PRs, summaries, and classifications are organized into charts and tables

The current week is shown below. There are 3 major sections:

* [Contributor Overview](#contributor-overview)
* [PRs by Repository](#prs-by-repository)
* [PRs by Contributor](#changes-by-contributor)

## Current Week

<!-- START_CURRENT_WEEK -->

# Contribution Overview 2024-07-27

## PRs by Repository

```mermaid
pie
    "tscircuit/pcb-viewer" : 1
    "tscircuit/autorouting-dataset" : 1
    "tscircuit/checks" : 2
    "tscircuit/jscad-fiber" : 2
    "tscircuit/circuit-to-png" : 2
```

## Contributor Overview

| Contributor | 🐳 Major | 🐙 Minor | 🐌 Tiny |
|-------------|-------|-------|-------|
| seveibar | 4 | 0 | 0 |
| r-bt | 1 | 0 | 0 |
| Slaviiiii | 1 | 0 | 0 |
| imrishabh18 | 0 | 2 | 0 |

## Changes by Repository

### [tscircuit/pcb-viewer](https://github.com/tscircuit/pcb-viewer)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#31](https://github.com/tscircuit/pcb-viewer/pull/31) | 🐳 Major | seveibar | Introduce a rats nest toggle feature and allow setting the initial state of the PCBViewer component. |

### [tscircuit/autorouting-dataset](https://github.com/tscircuit/autorouting-dataset)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#6](https://github.com/tscircuit/autorouting-dataset/pull/6) | 🐳 Major | seveibar | Add distance parameter to the SingleTraceCircuit component and update the isValidSolution function to accept SimplifiedPcbTrace type. |

### [tscircuit/checks](https://github.com/tscircuit/checks)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#12](https://github.com/tscircuit/checks/pull/12) | 🐳 Major | seveibar | Fix port association failure when trace width makes them overlap. |
| [#11](https://github.com/tscircuit/checks/pull/11) | 🐳 Major | seveibar | This pull request improves the error messages in the `check-each-pcb-port-connected.ts` function by using selectors instead of IDs to make the errors more readable. |

### [tscircuit/jscad-fiber](https://github.com/tscircuit/jscad-fiber)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#40](https://github.com/tscircuit/jscad-fiber/pull/40) | 🐳 Major | r-bt | Allow component props to be updated |
| [#39](https://github.com/tscircuit/jscad-fiber/pull/39) | 🐳 Major | Slaviiiii | Change the props for the `Rotate` component to accept either `rotation` or `angles` as a single object or an array. |

### [tscircuit/circuit-to-png](https://github.com/tscircuit/circuit-to-png)

| PR # | Impact | Contributor | Description |
|------|--------|-------------|-------------|
| [#10](https://github.com/tscircuit/circuit-to-png/pull/10) | 🐙 Minor | imrishabh18 | Add missing version in package.json |
| [#9](https://github.com/tscircuit/circuit-to-png/pull/9) | 🐙 Minor | imrishabh18 | Updates the latest lock file to ensure dependencies are up-to-date. |

## Changes by Contributor

### [seveibar](https://github.com/seveibar)

| PR # | Impact | Description |
|------|--------|-------------|
| [#31](https://github.com/tscircuit/pcb-viewer/pull/31) | 🐳 Major | Introduce a rats nest toggle feature and allow setting the initial state of the PCBViewer component. |
| [#6](https://github.com/tscircuit/autorouting-dataset/pull/6) | 🐳 Major | Add distance parameter to the SingleTraceCircuit component and update the isValidSolution function to accept SimplifiedPcbTrace type. |
| [#12](https://github.com/tscircuit/checks/pull/12) | 🐳 Major | Fix port association failure when trace width makes them overlap. |
| [#11](https://github.com/tscircuit/checks/pull/11) | 🐳 Major | This pull request improves the error messages in the `check-each-pcb-port-connected.ts` function by using selectors instead of IDs to make the errors more readable. |

### [r-bt](https://github.com/r-bt)

| PR # | Impact | Description |
|------|--------|-------------|
| [#40](https://github.com/tscircuit/jscad-fiber/pull/40) | 🐳 Major | Allow component props to be updated |

### [Slaviiiii](https://github.com/Slaviiiii)

| PR # | Impact | Description |
|------|--------|-------------|
| [#39](https://github.com/tscircuit/jscad-fiber/pull/39) | 🐳 Major | Change the props for the `Rotate` component to accept either `rotation` or `angles` as a single object or an array. |

### [imrishabh18](https://github.com/imrishabh18)

| PR # | Impact | Description |
|------|--------|-------------|
| [#10](https://github.com/tscircuit/circuit-to-png/pull/10) | 🐙 Minor | Add missing version in package.json |
| [#9](https://github.com/tscircuit/circuit-to-png/pull/9) | 🐙 Minor | Updates the latest lock file to ensure dependencies are up-to-date. |



<!-- END_CURRENT_WEEK -->
