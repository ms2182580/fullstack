import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import "@testing-library/jest-dom/vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Steps_Demography } from "../Signup_D_Steps_Demography"
import {
  Signup_D_Steps_Situation,
  Signup_D_Steps_Situation_Options,
} from "../Signup_D_Steps_Situation"

describe(`Testing ${Signup_D_Steps_Demography.name}`, (ctx_describe) => {
  afterEach(async () => {
    await cleanup()
    render(<Signup_D_Steps_Situation />)
  })

  it(`${Signup_D_Steps_Situation.name} is render`, (ctx_it) => {
    render(<Signup_D_Steps_Situation />)
  })

  it(`${Signup_D_Steps_Situation.name} is stablished: nothing should change`, async (ctx) => {
    await expect(render(<Signup_D_Steps_Situation />)).toMatchFileSnapshot(
      `./__snapshots__/${Signup_D_Steps_Situation.name}.html`
    )
  })

  it("Clicking on label «Diagnosis», input is focus", async (ctx_it) => {
    const getFirstName = screen.getByLabelText(
      "Diagnosis (select all that apply)"
    )
    expect(getFirstName).toBeInTheDocument()

    const inputFirstName = screen.getByPlaceholderText(
      /Ex. Down’s Syndrome, Cerebral Palsy, ADHD/i
    )
    expect(inputFirstName).toBeInTheDocument()

    const user = userEvent.setup()

    await user.click(getFirstName)
    expect(inputFirstName).toHaveFocus()
  })

  describe("Checking «Care Team»", (ctx_describe) => {
    it("clicking on label «Care Team», input is focus", async (ctx) => {
      const getZipCode = screen.getByLabelText(
        "Care team (select all that apply)"
      )
      expect(getZipCode).toBeInTheDocument()

      const inputZipCode = screen.getByPlaceholderText(/Ex John/i)
      expect(inputZipCode).toBeInTheDocument()

      const user = userEvent.setup()

      await user.click(getZipCode)
      expect(inputZipCode).toHaveFocus()

      const getTooltip = await screen.findByRole("tooltip")

      expect(getTooltip).toBeInTheDocument()

      await user.tab()
      const getTooltipSVG = screen.getByLabelText(/careteam-explanation/i)
      expect(getTooltipSVG).toHaveFocus()

      await user.tab()
      expect(getTooltip).not.toBeInTheDocument()
    })

    it("mouse hover on tooltipSVG show tooltip text, mouse unhover tooltipSVG hide tooltip text ", async (ctx) => {
      const getTooltipSVG = screen.getByLabelText(/careteam-explanation/i)

      const user = userEvent.setup()
      await user.hover(getTooltipSVG)

      const getTooltip = await screen.findByRole("tooltip")
      expect(getTooltip).toBeInTheDocument()

      await user.unhover(getTooltipSVG)
      expect(getTooltip).not.toBeInTheDocument()
    })

    it('Focus on tooltipSVG and press "Escape", tooltip is close', async (ctx) => {
      const getZipCode = screen.getByLabelText(
        "Care team (select all that apply)"
      )
      const inputZipCode = screen.getByPlaceholderText(/Ex John/i)

      const user = userEvent.setup()

      await user.click(getZipCode)
      expect(inputZipCode).toHaveFocus()

      const getTooltip = await screen.findByRole("tooltip")

      await user.tab()
      const getTooltipSVG = screen.getByLabelText(/careteam-explanation/i)
      expect(getTooltipSVG).toHaveFocus()

      fireEvent.keyDown(document, { key: "Escape" })
      expect(getTooltip).not.toBeInTheDocument()
    })

    it('Hover on tooltipSVG and press "Escape", tooltip is close', async (ctx) => {
      const getTooltipSVG = screen.getByLabelText(/careteam-explanation/i)

      const user = userEvent.setup()
      await user.hover(getTooltipSVG)

      const getTooltip = await screen.findByRole("tooltip")

      fireEvent.keyDown(document, { key: "Escape" })

      expect(getTooltip).not.toBeInTheDocument()
    })

    describe("Options for your loved ones", (ctx_describe) => {
      it("All options are there", (ctx_it) => {
        const getData = screen.getAllByRole("listitem")

        expect(getData).toHaveLength(Signup_D_Steps_Situation_Options.length)
      })

      it("Click on any option change their style", async (ctx) => {
        const user = userEvent.setup()
        const getData = screen.getAllByRole("listitem")

        for (const x in getData) {
          await user.click(getData[x])

          expect(getData[x]).toHaveStyle({
            background: `${PRIMARY.PRIMARY_CTA}`,
            color: `${NEUTRALS.OFF_WHITE}`,
          })
        }

        for (const x in getData) {
          await user.click(getData[x])

          expect(getData[x]).toHaveStyle({
            background: `${NEUTRALS.OFF_WHITE}`,
            color: `${PRIMARY.PRIMARY_CTA}`,
          })
        }
      })

      it("Focus and press enter on any option change their style", async (ctx) => {
        const getDataLI = screen.getAllByRole("listitem")

        getDataLI.forEach(async (x) => {
          x.focus()
          expect(x).toHaveFocus()

          fireEvent.keyDown(x, { key: "Enter" })
          expect(x).toHaveStyle({
            background: `${PRIMARY.PRIMARY_CTA}`,
            color: `${NEUTRALS.OFF_WHITE}`,
          })
        })

        getDataLI.forEach(async (x) => {
          x.focus()
          expect(x).toHaveFocus()

          fireEvent.keyDown(x, { key: "Enter" })
          expect(x).toHaveStyle({
            background: `${NEUTRALS.OFF_WHITE}`,
            color: `${PRIMARY.PRIMARY_CTA}`,
          })
        })
      })
    })
  })
})
