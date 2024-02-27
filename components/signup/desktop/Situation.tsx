import { Signup_N_InfoSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { Input } from "./styles/Signup_D_HomeWrapper"
import { SituationSpan, SituationWrapper } from "./styles/SituationWrapper"

export const Situation = () => {
  const [selected, setSelected] = useState([
    "Vision impaired",
    "Physically impaired",
  ])
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
  return (
    <>
      <SituationWrapper>
        <H3>Profile 1 Situation</H3>
        <span>Tell us about the indiviidual</span>
        <form>
          <label>Diagnosis (select all that apply)</label>
          <Input placeholder="Ex. Down’s Syndrome, Cerebral Palsy, ADHD" />
          <label>
            Care team (select all that apply)
            <Input placeholder="Ex John" />
            <Signup_N_InfoSvg />
          </label>
          <H3>
            Please select what pertains to your loved <br /> one’s situation
          </H3>
          <div>
            {sitautions.map((sitation) => (
              <SituationSpan
                key={sitation}
                onClick={() => {
                  if (selected.includes(sitation)) {
                    setSelected(selected.filter((s) => s !== sitation))
                  } else {
                    setSelected([...selected, sitation])
                  }
                }}
                isSelected={selected.includes(sitation)}
              >
                {sitation}
              </SituationSpan>
            ))}
          </div>
        </form>
      </SituationWrapper>
    </>
  )
}
