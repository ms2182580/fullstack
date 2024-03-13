import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Steps_CreateProfile } from "../Signup_D_Steps_CreateProfile"

describe(`Testing ${Signup_D_Steps_CreateProfile.name} component`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_CreateProfile />)
  })

  it(`${Signup_D_Steps_CreateProfile.name} is render`, (ctx_it) => {
    render(<Signup_D_Steps_CreateProfile />)
  })

  it(`${Signup_D_Steps_CreateProfile.name} is stablished: nothing should change`, async (ctx) => {
    await expect(render(<Signup_D_Steps_CreateProfile />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_CreateProfile.name}.html`
    )
  })

  it("Correct attribute on Link", (ctx) => {
    const getLink = screen.getByRole("link", { name: /Build profile manually/ })

    expect(getLink).toHaveAttribute(
      "href",
      `${ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY}`
    )
  })
})
