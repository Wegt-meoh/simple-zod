# Simple zod

A simple implementation for [zod](https://github.com/colinhacks/zod) library

## Usage

```js
const z = require("./index.js")
let stringArraySchema = z.array(z.string())
let testCase = ["hello", "world"]
let result = stringArraySchema.parse(testCase)
console.log(result) // ["hello", "world"]
let wrongTestCase = ["hello", 1]
let wrongResult = stringArraySchema.parse(wrongTestCase) // throws an error
```

## Feature

```ts
z.number()
z.string()
z.boolean()
z.nullObj()
z.array()
z.object()
z.union()
z.enumSchema()
z.infer<typeof z.number()>
```
