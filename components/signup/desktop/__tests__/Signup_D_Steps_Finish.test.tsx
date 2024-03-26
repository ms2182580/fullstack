import "@testing-library/jest-dom/vitest"
import { cleanup, render } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Steps_Finish } from "../Signup_D_Steps_Finish"

describe(`Testing ${Signup_D_Steps_Finish.name}`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_Finish />)
  })

  it(`${Signup_D_Steps_Finish.name} is render`, (ctx_it) => {
    render(<Signup_D_Steps_Finish />)
  })

  it(`${Signup_D_Steps_Finish.name} is stablished: nothing should change`, async (ctx) => {
    await expect(render(<Signup_D_Steps_Finish />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_Finish.name}.html`
    )
  })
})
