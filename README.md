# Dott Task

Distance matrix (nearest 1) in bitmap matrix

### Requirements

```
Node.js
```

### Installation

```
npm install
```

### Test

unit tests

```
npm test
```

coverage

```
npm run coverage
```

## Run

```
node stdin.js
```

## Structure

app: `application entry to bootstrap and setting it up`

src/streams: `multiple stream transform handlers`

src/logic: `actual implementation of task algorithm`

tests/bootstrap: `set environment for running tests`

tests/\*\*/\*\*.utest: `corresponding test for src`

## Algorithm

-   basic idea: consider each 1 in the matrix, move in 4 directions of the current 1 and set the value to distance from position of 1
-   get bitmap matrix
-   substitute each 1 with 0 and each 0 with Infinity
-   add position of each 1 into queue
-   get item from queue and move into 4 directions until the queue became empty
    -   if the new position still inside of the matrix and value is bigger than the queue value update queue
-   return distance matrix
-   order of the algorithm for `n x m` matrix is `O(nxm)`

## Asciinema

[![asciicast](https://asciinema.org/a/UoqWyT6biteOYkJ04Ut561nrv.svg)](https://asciinema.org/a/UoqWyT6biteOYkJ04Ut561nrv)
