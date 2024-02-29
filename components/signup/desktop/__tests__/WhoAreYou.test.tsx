import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { WhoAreYou } from "../WhoAreYou"

describe(`Testing ${WhoAreYou.name} component`, (ctx_describe) => {
  afterEach(cleanup)

  it("Component is render", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <WhoAreYou />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )
  })

  it("Component is stablished: nothing should change", async (ctx) => {
    let theActualJSXFile = render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <WhoAreYou />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )

    await expect(theActualJSXFile).toMatchFileSnapshot(
      "./__snapshots__/WhoAreYou.html"
    )
  })

  it("Amount of cards are correct", (ctx) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <WhoAreYou />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )
    const getAllArticles = screen.getAllByRole("article")

    expect(getAllArticles).toHaveLength(2)
  })

  describe("Data of card are correct", (ctx_describe) => {
    it("First card", (ctx_it) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <WhoAreYou />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getText = screen.getByText("I'm a parent or caregiver")
      expect(getText).toBeInTheDocument()

      const getSVG = screen.getByTestId("SVG_1")
      expect(getSVG).toBeInTheDocument()
    })
    it("Second card", (ctx_it) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <WhoAreYou />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getText = screen.getByText("I'm a professional")
      expect(getText).toBeInTheDocument()

      const getSVG = screen.getByTestId("SVG_2")
      expect(getSVG).toBeInTheDocument()
    })
  })

  it("Cards are focusable with keyboard", async (ctx) => {
    const user = userEvent.setup()
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <WhoAreYou />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )

    const getAllData = screen.getAllByRole("article")

    await user.tab()
    expect(getAllData[0]).toHaveFocus()

    await user.tab()
    expect(getAllData[1]).toHaveFocus()

    await user.tab({ shift: true })
    expect(getAllData[0]).toHaveFocus()
  })
})
