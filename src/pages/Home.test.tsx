import { mount } from "enzyme"

describe("Home", () => {
  let Home

  beforeEach(() => {
    jest.doMock("recoil", () => ({
      useRecoilValue: () => "TestName",
      useSetRecoilState: jest.fn(),
      atom: jest.fn(),
      selector: jest.fn(),
    }))
    Home = require("./").default
  })
  it("render without errors", () => {
    const cmp = mount(<Home />)
    expect(cmp).toMatchSnapshot()
  })
})
