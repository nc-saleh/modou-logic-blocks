const { mobileDisplayKeystrokes } = require("../mobileKeystrokes")
const timeFunction = require("../../performance")
const { performance } = require("perf_hooks")

describe("mobileDisplayKeystrokes", () => {
  test("should return 0 for an empty string", () => {
    timeFunction(mobileDisplayKeystrokes, "")
    expect(mobileDisplayKeystrokes("")).toBe(0)
  })
  test("should return accurate keystroke count for special characters", () => {
    timeFunction(mobileDisplayKeystrokes, "*#")
    expect(mobileDisplayKeystrokes("*#")).toBe(2)
  })
  test("should return accurate keystroke count for numbers", () => {
    timeFunction(mobileDisplayKeystrokes, "123")
    expect(mobileDisplayKeystrokes("123")).toBe(3)
  })
  test("should return accurate keystroke count for letters", () => {
    timeFunction(mobileDisplayKeystrokes, "abc")
    expect(mobileDisplayKeystrokes("abc")).toBe(9)
  })
  test("should return accurate keystroke count for longer words", () => {
    timeFunction(mobileDisplayKeystrokes, "northcoders")
    expect(mobileDisplayKeystrokes("northcoders")).toBe(38)
  })
  test("should return accurate keystroke count for a combination string", () => {
    timeFunction(mobileDisplayKeystrokes, "*#123northcoders")
    expect(mobileDisplayKeystrokes("*#123northcoders")).toBe(43)
  })
})
