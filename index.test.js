import { z } from "./dist/index.js"

// test string schema
let stringSchema = z.string()
console.log(stringSchema.parse("sdfsdf"))
try {
    stringSchema.parse(11) // expect throws an error
} catch (error) {
    console.error("carch error:", error.message)
}

// test number schema
let numberSchema = z.number()
console.log(numberSchema.parse(11))
try {
    numberSchema.parse("sdfdsf")
} catch (error) {
    console.error("carch error:", error.message)
}

// test null schema
let nullSchema = z.null()
console.log(nullSchema.parse(null))
try {
    nullSchema.parse(11)
} catch (error) {
    console.error("carch error:", error.message)
}

// test bool schema
let boolSchema = z.boolean()
console.log(boolSchema.parse(true))
try {
    boolSchema.parse(11)
} catch (error) {
    console.error("carch error:", error.message)
}

// test union schema
let unionSchema = z.union([z.string(), z.boolean()])
console.log(unionSchema.parse("ok"))
console.log(unionSchema.parse(true))
try {
    unionSchema.parse(11)
} catch (error) {
    console.error("carch error:", error.message)
}

// test enum schema
let enumSchema = z.enum(["ok", "err", 0, 1])
console.log(enumSchema.parse("ok"))
console.log(enumSchema.parse("err"))
console.log(enumSchema.parse(0))
console.log(enumSchema.parse(1))
try {
    enumSchema.parse(11)
} catch (error) {
    console.error("carch error:", error.message)
}

// test array schema
let arraySchema = z.array(z.string())
console.log(arraySchema.parse(["hello", "world"])) // ["hello", "world"]
try {
    arraySchema.parse(["hello", 1])
} catch (error) {
    console.error("catch error:", error.message)
}

// test object schema
let objSchema = z.object({
    name: z.string(),
    age: z.number()
})
console.log(objSchema.parse({ name: "jack", age: 1 }))
try {
    objSchema.parse({ name: "jack" })
} catch (error) {
    console.error("catch error:", error.message)
}

// test lazy schema
let commentSchema = z.lazy(() => z.object({
    text: z.string(),
    children: z.array(z.union([commentSchema, z.string()]))
}))
let testCase = {
    text: "hello i am jack",
    children: [
        "nice to meet you, i am alice",
        {
            text: "bye alice",
            children: []
        }
    ]
}
console.log(commentSchema.parse(testCase))
try {
    commentSchema.parse({
        text: "sdfsfd",
        children: {
            name: "as",
            age: 1
        }
    })
} catch (error) {
    console.error("catch error:", error.message)
}

