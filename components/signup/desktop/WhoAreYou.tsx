import { Signup_D_Professional, Signup_N_ParentSvg } from "@/assets/icons"
import { Steps_Enum, useSignup_Ctx } from "@/context/Ctx_Signup"
import { ReactElement } from "react"
import { WhoYouAreWrapper } from "./styles/WhoYouAreWrapper"

type DataProps = {
  svg: () => ReactElement
  name: string
}[]

const data: DataProps = [
  {
    svg: Signup_N_ParentSvg,
    name: "I'm a parent or caregiver",
  },
  {
    svg: Signup_D_Professional,
    name: "I'm a professional",
  },
]

export const WhoAreYou = () => {
  const { setStep } = useSignup_Ctx()
  const handleSelectCard = ({ event }) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setStep(Steps_Enum["create_profile"])
    }
  }

  return (
    <>
      <WhoYouAreWrapper>
        {data.map(({ svg: SVG, name }, index) => {
          return (
            <article
              tabIndex={0}
              key={name}
              onClick={(e) => handleSelectCard({ event: e })}
              onKeyDown={(e) => handleSelectCard({ event: e })}
            >
              <SVG data-testid={`SVG_${index + 1}`} />
              <h5>{name}</h5>
            </article>
          )
        })}
      </WhoYouAreWrapper>
    </>
  )
}
