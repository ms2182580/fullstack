import { Tooltip } from "@/components/tooltip/Tooltip"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Input_MultSelectListbox } from "@/components/ui/input/Input_MultSelectListbox"
import { useState } from "react"
import { Signup_D_Steps_Demography_TooltipText } from "./Signup_D_Steps_Demography_TooltipText"
import { Signup_D_Steps_DemographyWrapper } from "./styles/Signup_D_Steps_DemographyWrapper"

let dropdownLiveWith = [
  { value: "mom", label: "Mom" },
  { value: "dad", label: "Dad" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
]
let dropdownLanguagesSpoken = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
]

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
          First Name <input placeholder="Ex. Jane Smith" />
        </label>

        <label>
          Zip code
          <input
            placeholder="Enter your zip"
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
          <input placeholder="Ex. child, grandchild, nephew" />
        </label>

        <Input_MultSelectListbox
          label="Who does the individual live with? (select all that apply)"
          listToShow={dropdownLiveWith}
          placeholderText="Ex. parents, sibling, aunt"
        />

        <div>
          <Input_MultSelectListbox
            label="Language(s) spoken"
            listToShow={dropdownLanguagesSpoken}
            placeholderText="Ex. English, Spanish"
          />

          <label>
            Language(s) understood
            <input placeholder="Ex. English, Spanish" />
          </label>
        </div>
      </form>
    </Signup_D_Steps_DemographyWrapper>
  )
}
