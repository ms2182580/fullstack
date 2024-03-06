import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Steps_WhoAreYou } from "../Signup_D_Steps_WhoAreYou"

describe(`Testing ${Signup_D_Steps_WhoAreYou.name} component`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_WhoAreYou />)
  })
  afterEach(cleanup)

  it("Component is render", (ctx_it) => {
    render(<Signup_D_Steps_WhoAreYou />)
  })

  it("Component is stablished: nothing should change", async (ctx) => {
    await expect(render(<Signup_D_Steps_WhoAreYou />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_WhoAreYou.name}.html`
    )
  })

  it("Amount of cards are correct", (ctx) => {
    const getAllArticles = screen.getAllByRole("link")

    expect(getAllArticles).toHaveLength(2)
  })

  describe("Data of card are correct", (ctx_describe) => {
    it("First card", (ctx_it) => {
      const getText = screen.getByText("I'm a parent or caregiver")
      expect(getText).toBeInTheDocument()

      const getSVG = screen.getByTestId("SVG_1")
      expect(getSVG).toBeInTheDocument()
    })
    it("Second card", (ctx_it) => {
      const getText = screen.getByText("I'm a professional")
      expect(getText).toBeInTheDocument()

      const getSVG = screen.getByTestId("SVG_2")
      expect(getSVG).toBeInTheDocument()
    })
  })

  it("Cards are focusable with keyboard", async (ctx) => {
    const user = userEvent.setup()

    const getAllData = screen.getAllByRole("link")

    await user.tab()
    expect(getAllData[0]).toHaveFocus()

    await user.tab()
    expect(getAllData[1]).toHaveFocus()

    await user.tab({ shift: true })
    expect(getAllData[0]).toHaveFocus()
  })
})
