import "@testing-library/jest-dom/vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
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

  it("Clicking on label «First Name», input is focus", async (ctx_it) => {
    const getFirstName = screen.getByLabelText(/first name/i)
    expect(getFirstName).toBeInTheDocument()

    const inputFirstName = screen.getByPlaceholderText(/Ex. Jane Smith/i)
    expect(inputFirstName).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(getFirstName)
    expect(inputFirstName).toHaveFocus()
  })

  describe("Checking Zip Code", (ctx_describe) => {
    it("clicking on label «Zip Code», input is focus", async (ctx) => {
      const getZipCode = screen.getByLabelText(/Zip code/i)
      expect(getZipCode).toBeInTheDocument()

      const inputZipCode = screen.getByPlaceholderText(/Enter your zip/i)
      expect(inputZipCode).toBeInTheDocument()

      const user = userEvent.setup()

      await user.click(getZipCode)
      expect(inputZipCode).toHaveFocus()

      const getTooltip = await screen.findByRole("tooltip")

      expect(getTooltip).toBeInTheDocument()

      await user.tab()
      const getTooltipSVG = screen.getByLabelText(/zipcode-explanation/i)
      expect(getTooltipSVG).toHaveFocus()

      await user.tab()
      expect(getTooltip).not.toBeInTheDocument()
    })

    it("mouse hover on tooltipSVG show tooltip text, mouse unhover tooltipSVG hide tooltip text ", async (ctx) => {
      const getTooltipSVG = screen.getByLabelText(/zipcode-explanation/i)

      const user = userEvent.setup()
      await user.hover(getTooltipSVG)

      const getTooltip = await screen.findByRole("tooltip")
      expect(getTooltip).toBeInTheDocument()

      await user.unhover(getTooltipSVG)
      expect(getTooltip).not.toBeInTheDocument()
    })

    it('Focus on tooltipSVG and press "Escape", tooltip is close', async (ctx) => {
      const getZipCode = screen.getByLabelText(/Zip code/i)
      const inputZipCode = screen.getByPlaceholderText(/Enter your zip/i)

      const user = userEvent.setup()

      await user.click(getZipCode)
      expect(inputZipCode).toHaveFocus()

      const getTooltip = await screen.findByRole("tooltip")

      await user.tab()
      const getTooltipSVG = screen.getByLabelText(/zipcode-explanation/i)
      expect(getTooltipSVG).toHaveFocus()

      fireEvent.keyDown(document, { key: "Escape" })
      expect(getTooltip).not.toBeInTheDocument()
    })

    it('Hover on tooltipSVG and press "Escape", tooltip is close', async (ctx) => {
      const getTooltipSVG = screen.getByLabelText(/zipcode-explanation/i)

      const user = userEvent.setup()
      await user.hover(getTooltipSVG)

      const getTooltip = await screen.findByRole("tooltip")

      fireEvent.keyDown(document, { key: "Escape" })

      expect(getTooltip).not.toBeInTheDocument()
    })
  })

  it("Clicking on label «Relationship to account holder», input is focus", async (ctx_it) => {
    const getLabel = screen.getByLabelText(/Relationship to account holder/i)
    expect(getLabel).toBeInTheDocument()

    const getInputLabel = screen.getByPlaceholderText(
      /Ex. child, grandchild, nephew/i
    )
    expect(getInputLabel).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(getLabel)
    expect(getInputLabel).toHaveFocus()
  })

  it("Clicking on label «Language(s) understood», input is focus", async (ctx_it) => {
    const getLabel = screen.getByLabelText(/Language\(s\) understood/i)
    expect(getLabel).toBeInTheDocument()

    const getInputLabel = screen.getByPlaceholderText(/Ex. English, Spanish/i)
    expect(getInputLabel).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(getLabel)
    expect(getInputLabel).toHaveFocus()
  })
})
