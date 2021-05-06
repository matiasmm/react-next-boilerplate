import { increment } from "./countSlice"

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: "counter/increment",
    }
    expect(increment()).toEqual(expectedAction)
  })
})
