import { Tooltip } from "@/components/tooltip/Tooltip"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { Signup_D_Steps_Demography_TooltipText } from "./Signup_D_Steps_Demography_TooltipText"
import { Signup_D_Steps_DemographyWrapper } from "./styles/Signup_D_Steps_DemographyWrapper"

export const Signup_D_Steps_Demography = () => {
  const [zipCodeIsFocus, setZipCodeIsFocus] = useState(false)

  const handleZipCodeIsFocus = () => {
    setZipCodeIsFocus(true)
  }

  const handleZipCodeIsBlur = () => {
    setZipCodeIsFocus(false)
  }

  return (
    <Signup_D_Steps_DemographyWrapper>
      <H3>Profile 1 Demographics</H3>
      <P>Tell us about the individual</P>

      <form>
        <label>
          Firt Name <input placeholder="Ex John" />
        </label>

        <label>
          Zip code
          <input
            placeholder="Ex John"
            onFocus={handleZipCodeIsFocus}
            onBlur={handleZipCodeIsBlur}
          />
          <Tooltip
            otherStateToShowTooltip={[zipCodeIsFocus]}
            dataOnTooltip={<Signup_D_Steps_Demography_TooltipText />}
            whichAriaLabel="zipcode-explanation"
          />
        </label>

        <label>
          Relationship to account holder
          <input placeholder="Ex. child, grandchild, nephew," />
        </label>

        <label>
          Who does the individual live with? (select all that apply)
          <input placeholder="Ex. parents, sibling, aunt" />
        </label>

        <div>
          <label>
            Language(s) spoken
            <input placeholder="Ex. English, Spanish" />
          </label>
          <label>
            Language(s) understood{" "}
            <input placeholder="Ex. parents, sibling, aunt" />
          </label>
        </div>
      </form>
    </Signup_D_Steps_DemographyWrapper>
  )
}
