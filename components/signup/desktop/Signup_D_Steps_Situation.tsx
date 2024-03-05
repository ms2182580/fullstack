import { Signup_N_InfoSvg } from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { Input } from "./styles/Signup_D_HomeWrapper"
import {
  Signup_D_Steps_SituationWrapper,
  SituationSpan,
} from "./styles/Signup_D_Steps_SituationWrapper"

let sitautions = [
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
  const [selected, setSelected] = useState([
    "Vision impaired",
    "Physically impaired",
  ])

  const handeSelectSituation = ({ event, situationSelected }) => {
    if (
      event.type === "click" ||
      (event.key === "Enter" && event.type === "keydown")
    ) {
      if (selected.includes(situationSelected)) {
        setSelected(selected.filter((s) => s !== situationSelected))
      } else {
        setSelected([...selected, situationSelected])
      }
    }
  }

  return (
    <Signup_D_Steps_SituationWrapper>
      <H3>Profile 1 Situation</H3>
      <P>Tell us about the individual</P>
      <form>
        <label>
          Diagnosis (select all that apply)
          <Input placeholder="Ex. Down’s Syndrome, Cerebral Palsy, ADHD" />
        </label>

        <label>
          Care team (select all that apply)
          <Input placeholder="Ex John" />
          <Signup_N_InfoSvg />
        </label>
        <H4>
          Please select what pertains to your loved <br /> one’s situation
        </H4>
        <ul>
          {sitautions.map((sitation) => (
            <SituationSpan
              tabIndex={0}
              key={sitation}
              onClick={(e) =>
                handeSelectSituation({ event: e, situationSelected: sitation })
              }
              onKeyDown={(e) =>
                handeSelectSituation({ event: e, situationSelected: sitation })
              }
              isSelected={selected.includes(sitation)}
            >
              {sitation}
            </SituationSpan>
          ))}
        </ul>
      </form>
    </Signup_D_Steps_SituationWrapper>
  )
}
