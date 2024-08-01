import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Signup_D_Professional, Signup_N_ParentSvg } from "@/assets/icons"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { ReactElement } from "react"
import { Signup_D_Steps_WhoAreYouWrapper } from "./styles/Signup_D_Steps_WhoAreYouWrapper"

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

export const Signup_D_Steps_WhoAreYou = () => {
  return (
    <Signup_D_Steps_WhoAreYouWrapper
      data-testid={KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_WHO_ARE_YOU}
    >
      {data.map(({ svg: SVG, name }, index) => {
        return (
          <Link href={ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE} key={name}>
            <SVG data-testid={`SVG_${index + 1}`} />
            <h5>{name}</h5>
          </Link>
        )
      })}
    </Signup_D_Steps_WhoAreYouWrapper>
  )
}
