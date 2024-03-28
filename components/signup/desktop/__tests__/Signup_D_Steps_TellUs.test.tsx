import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
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

  describe(`Component ${Signup_D_Steps_TellUs.name} is using grid and have an expected layout (this is an test of implementation)`, (ctx_describe) => {
    it("Component is using grid and other grid styles", (ctx_it) => {
      const getData = screen.getByTestId("card-section")

      expect(getData).toHaveStyle({
        display: "grid",
        //!This next two test are particular fragile, becuase it needs to have this format
        gridTemplateAreas: `"mainCard mySituation mySituation mySituation" "mainCard careNeeds culturalConsiderations skills" "mainCard likesAndDislikes healthAndMedication aspirations"`,
        gridTemplateColumns: `minmax(250px,auto) repeat(3,1fr)`,
      })
    })
    it("Main card is using all left space", (ctx_it) => {
      render(<Signup_D_Steps_TellUs />)
      const getAllData = screen.getAllByRole("article")

      expect(getAllData[1]).toHaveStyle({
        gridArea: "mainCard",
      })
    })

    describe("Inputs are using the correct space on grid layout", (ctx_it) => {
      let allGridAreas = [
        "mySituation",
        "careNeeds",
        "culturalConsiderations",
        "skills",
        "likesAndDislikes",
        "healthAndMedication",
        "aspirations",
      ]

      for (const x in Signup_D_Steps_TellUs_Input_Data) {
        let xToNumber = Number(x)
        /*
         * The reason to use the number 2 is because in the component, there is 2 articles before it start the inputs. Remember, this is an implementation test to check the UI
         */
        let whereToSearch = 2 + xToNumber

        it(`Testing ${Signup_D_Steps_TellUs_Input_Data[x].titleText}: styles, tooltip, text and placeholder`, (ctx) => {
          const getAllData = screen.getAllByRole("article")

          expect(getAllData[whereToSearch]).toHaveStyle({
            gridArea: allGridAreas[xToNumber],
          })

          expect(getAllData[whereToSearch]).toBeVisible()
          expect(getAllData[whereToSearch]).toBeInTheDocument()

          expect(getAllData[whereToSearch]).toHaveTextContent(
            `${Signup_D_Steps_TellUs_Input_Data[x].titleText}`
          )

          const getAllLiTooltip = screen.getAllByTestId("li-tooltip")
          /* So far:
           * Every input card have 3 tooltip
           * The total amount of card is 7
           * The variable «allGridAreas» contains all the grid-areas used for all the card on the CSS for the UI
           */
          const expedtedTooltipsOnUI = allGridAreas.length * 3

          expect(getAllData[whereToSearch]).toContainHTML(
            'data-testid="li-tooltip"'
          )
          expect(getAllLiTooltip.length).toBe(expedtedTooltipsOnUI)

          const getAllTextarea = screen.getAllByRole("textbox")
          expect(getAllTextarea[x]).toHaveAttribute(
            "placeholder",
            Signup_D_Steps_TellUs_Input_Data[x].placeholder
          )
        })
      }

      it("Amount of input text is correct", (ctx_it) => {
        expect(Signup_D_Steps_TellUs_Input_Data).toHaveLength(7)
      })
    })
  })
})
