# set-difference

## Description

Missing difference operation for Set or any Iterable.

Second implementation can do difference operation between any number of iterables.

## Install

```bash
bun add @fightingdreamer/set-difference
```

## Usage

```js
import {difference} from '@fightingdreamer/set-difference'

const a = new Set([1,2,3])
const b = [3,4,5][Symbol.iterator]()
const result = difference(a, b)
const expect = [1,2]
for (const value of expect) {
  console.assert(result.has(value))
}
```

```js
import {differenceMany} from '@fightingdreamer/set-difference'

const main = [1,2,3,4,5,6,7,8,9][Symbol.iterator]()
const sets = [
  [2,3][Symbol.iterator](),
  [5,6][Symbol.iterator](),
  [8,9][Symbol.iterator]()
][Symbol.iterator]()
const result = differenceMany(main, sets)
const expect = [1,4,7]
for (const value of expect) {
  console.assert(result.has(value))
}
```

## Usage (node / commonjs)

```js
const {difference} = require('@fightingdreamer/set-difference')

const a = new Set([1,2,3])
const b = [3,4,5][Symbol.iterator]()
const result = difference(a, b)
const expect = [1,2]
for (const value of expect) {
  assert(result.has(value))
}
```

```js
const {differenceMany} = require('@fightingdreamer/set-difference')

const main = [1,2,3,4,5,6,7,8,9][Symbol.iterator]()
const sets = [
  [2,3][Symbol.iterator](),
  [5,6][Symbol.iterator](),
  [8,9][Symbol.iterator]()
][Symbol.iterator]()
const result = differenceMany(main, sets)
const expect = [1,4,7]
for (const value of expect) {
  assert(result.has(value))
}
```

## Functions

```js
function difference<T>(a: Iterable<T>, b: Iterable<T>): Set<T>
```

Will apply difference operation between Iterable and Iterable.

```js
function differenceMany<T>(main: Iterable<T>, sets: Iterable<Iterable<T>>): Set<T>
```

Will apply difference operation between main Iterable and any number of Iterables.
