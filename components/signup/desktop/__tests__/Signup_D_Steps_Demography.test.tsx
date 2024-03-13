import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Steps_Demography } from "../Signup_D_Steps_Demography"

describe(`Testing ${Signup_D_Steps_Demography.name}`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_Demography />)
  })

  it(`${Signup_D_Steps_Demography.name} is render`, (ctx_it) => {
    render(<Signup_D_Steps_Demography />)
  })

  it(`${Signup_D_Steps_Demography.name} is stablished: nothing should change`, async (ctx) => {
    await expect(render(<Signup_D_Steps_Demography />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_Demography.name}.html`
    )
  })

  it("Clicking on label First Name, the input is focus", async (ctx) => {
    const user = userEvent.setup()

    const getFirstNameLabel = screen.getByLabelText(/first name/i)
    const inputFirstName = screen.getByPlaceholderText(/ex. jane smith/i)

    await user.click(getFirstNameLabel)
    expect(inputFirstName).toHaveFocus()
  })

  /* 
  !FH0
  Repeat the test of line 96 on «Signup_D_Home.test.tsx» file
   */

  describe.todo("Checking Zip Code", (ctx_describe) => {
    it("clicking on label, input is focus", (ctx_it) => {})

    it("Focus on input tooltip is showed", (ctx) => {})

    it("Focus on input and press tab, tooltip is focus", (ctx) => {})

    it("Focus on tooltip, tooltip text is showed", (ctx) => {})

    it('Focus on tooltitp and press "Escape", tooltip is close', (ctx) => {})

    it("Focus on tooltip and press tab, next input is focus", (ctx) => {})
  })
})
