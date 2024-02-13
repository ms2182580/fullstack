import { Signup_D_Professional, Signup_N_ParentSvg } from "@/assets/icons"
import { WhoYouAreWrapper } from "./styles/WhoYouAreWrapper"

export const WhoYouAre = () => {
  let data = [
    {
      svg: <Signup_N_ParentSvg />,
      name: "I'm a parent or caregiver",
    },
    {
      svg: <Signup_D_Professional />,
      name: "I'm a professional",
    },
  ]
  return (
    <WhoYouAreWrapper>
      {data.map((item) => (
        <div>
          {item.svg}
          <span>{item.name}</span>
        </div>
      ))}
    </WhoYouAreWrapper>
  )
}
