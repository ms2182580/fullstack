import { Signup_D_Professional, Signup_N_ParentSvg } from "@/assets/icons"
import { ReactElement, useState } from "react"
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
  const [selected, setSelected] = useState(0)
  const handleSelectCard = ({ event, payload }) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setSelected(payload)
    }
  }

  return (
    <>
      <WhoYouAreWrapper selected={selected}>
        {data.map(({ svg: SVG, name }, index) => {
          return (
            <article
              onClick={(e) =>
                handleSelectCard({ event: e, payload: index + 1 })
              }
              onKeyDown={(e) =>
                handleSelectCard({ event: e, payload: index + 1 })
              }
              tabIndex={0}
            >
              <SVG />
              <h5>{name}</h5>
            </article>
          )
        })}
      </WhoYouAreWrapper>
    </>
  )
}
