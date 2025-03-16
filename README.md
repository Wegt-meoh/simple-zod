# Simple zod

A simple implementation for [zod](https://github.com/colinhacks/zod) library

## Usage

```js
import { z } from "./dist/index.js"

// test string schema
let stringSchema = z.string()
console.log(stringSchema.parse("sdfsdf"))
try {
    stringSchema.parse(11) // expect throws an error
} catch (error) {
    console.error("carch error:", error.message)
}

// more detail see index.test.js
```

## Feature

```ts
z.number()
z.string()
z.boolean()
z.null()
z.array()
z.object()
z.union()
z.enum()
z.infer<typeof z.number()>
```

## build

`pnpm build`

## test

`pnpm test`
