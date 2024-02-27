import { Signup_D_Professional, Signup_N_ParentSvg } from "@/assets/icons"
import { useState } from "react"
import { WhoYouAreWrapper } from "./styles/WhoYouAreWrapper"

export const WhoYouAre = () => {
  const [selected, setSelected] = useState(0)
  /* 
  !FH0
  Caveats here:
    ▬ Semantic HTML
  Testing it
  */

  let data = [
    {
      svg: <Signup_N_ParentSvg />,
      name: "I'm a parent or caregiver",
      id: 1,
    },
    {
      svg: <Signup_D_Professional />,
      name: "I'm a professional",
      id: 2,
    },
  ]
  return (
    <>
      <WhoYouAreWrapper selected={selected}>
        {data.map((item) => (
          <div onClick={() => setSelected(item.id)}>
            {item.svg}
            <span>{item.name}</span>
          </div>
        ))}
      </WhoYouAreWrapper>
    </>
  )
}
