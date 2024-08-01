import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Tooltip } from "@/components/tooltip/Tooltip"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { Signup_D_Steps_Situation_TooltipText } from "./Signup_D_Steps_Situation_TooltipText"
import { Input } from "./styles/INDEX_D_Signup_HomeWrapper"
import {
  Signup_D_Steps_SituationWrapper,
  SituationSpanWrapper,
} from "./styles/Signup_D_Steps_SituationWrapper"

export const Signup_D_Steps_Situation_Options = [
  "Vision impaired",
  "Mental health",
  "Self-destructive behavior",
  "Violent tendencies",
  "Disruptive behavior",
  "Physically impaired",
  "Auditory impairment",
  "Speech impairment",
  "None of the above",
  "I don’t know",
]

export const Signup_D_Steps_Situation = () => {
  const [selected, setSelected] = useState([""])

  const handeSelectSituation = ({ event, situationSelected }) => {
    if (event.key === "Enter" || event.type === "click") {
      if (selected.includes(situationSelected)) {
        setSelected(selected.filter((s) => s !== situationSelected))
      } else {
        setSelected([...selected, situationSelected])
      }
    }
  }

  const [careTeamIsFocus, setCareTeamIsFocus] = useState(false)

  const handleCareTeamIsFocus = () => {
    setCareTeamIsFocus(true)
  }

  const handleCareTeamIsBlur = () => {
    setCareTeamIsFocus(false)
  }

  return (
    <Signup_D_Steps_SituationWrapper
      data-testid={KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_SITUATION}
    >
      <H3>Profile 1 Situation</H3>
      <P>Tell us about the individual</P>
      <form>
        <label>
          Diagnosis (select all that apply)
          <Input placeholder="Ex. Down’s Syndrome, Cerebral Palsy, ADHD" />
        </label>

        <label>
          Care team (select all that apply)
          <Input
            placeholder="Ex John"
            onFocus={handleCareTeamIsFocus}
            onBlur={handleCareTeamIsBlur}
          />
          <Tooltip
            otherStateToShowTooltip={[careTeamIsFocus]}
            dataOnTooltip={<Signup_D_Steps_Situation_TooltipText />}
            whichAriaLabel="careteam-explanation"
          />
        </label>
        <H4>
          Please select what pertains to your loved <br /> one’s situation
        </H4>
        <ul data-testid="options">
          {Signup_D_Steps_Situation_Options.map((situation) => (
            <SituationSpanWrapper
              tabIndex={0}
              key={situation}
              onClick={(e) =>
                handeSelectSituation({ event: e, situationSelected: situation })
              }
              onKeyDown={(e) =>
                handeSelectSituation({ event: e, situationSelected: situation })
              }
              isSelected={selected.includes(situation)}
            >
              {situation}
            </SituationSpanWrapper>
          ))}
        </ul>
      </form>
    </Signup_D_Steps_SituationWrapper>
  )
}
