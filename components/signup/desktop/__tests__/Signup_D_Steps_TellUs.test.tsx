import "@testing-library/jest-dom/vitest"
import { cleanup, render } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import {
  Signup_D_Steps_TellUs,
  Signup_D_Steps_TellUs_Input_Data,
} from "../Signup_D_Steps_TellUs"

describe(`Testing ${Signup_D_Steps_TellUs.name}`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_TellUs />)
  })

  it(`${Signup_D_Steps_TellUs.name} is render`, (ctx_it) => {
    render(<Signup_D_Steps_TellUs />)
  })

  it(`${Signup_D_Steps_TellUs.name} is stablished: nothing should change`, async (ctx) => {
    await expect(render(<Signup_D_Steps_TellUs />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_TellUs.name}.html`
    )
  })

  describe("Testing input text", (ctx_describe) => {
    it("Amount of input text is correct", (ctx_it) => {
      expect(Signup_D_Steps_TellUs_Input_Data).toHaveLength(7)
    })

    it("All input text have: some kind of title", (ctx) => {})
    it("All input text have: placeholder", (ctx) => {})
    it("All input text have: three icons and a tooltip for every icon", (ctx) => {})

    it("All inputs can be focus and every icon with tab key", (ctx) => {})

    it("The user can type on every input text", (ctx) => {})
  })
})
