import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useMemo } from "react"
import { Layout_Signup_FooterWrapper } from "./styles/Layout_Signup_FooterWrapper"

export const enum TextButtonsSecond_Enum {
  "BUILD MANUALLY" = "Build manually",
  NEXT = "next",
  SAVE = "save",
  FINISH = "finish",
}

export type Layout_Signup_Footer_Props = {
  howManyButtons: 1 | 2 | undefined
  textButtons:
    | {
        first?: "back"
        second: TextButtonsSecond_Enum
      }
    | undefined
  toWhere: keyof typeof ALL_ROUTES.SIGNUP_STEPS | string | undefined
  toPrevious?:
    | typeof ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU
    | typeof ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE
    | typeof ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE1
    | typeof ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE2
    | undefined
}

export const Layout_Signup_Footer = ({
  howManyButtons,
  textButtons,
  toWhere = "#",
  toPrevious = "#",
}: Layout_Signup_Footer_Props) => {
  const render = useMemo(() => {
    if (howManyButtons === 1) {
      return (
        <>
          <Link href="#">{textButtons?.second}</Link>
        </>
      )
    }
    return (
      <>
        <Link href={toPrevious}>{textButtons?.first || "back"}</Link>
        <Link href={toWhere}>{textButtons?.second}</Link>
      </>
    )
  }, [howManyButtons, textButtons, toWhere])

  return <Layout_Signup_FooterWrapper>{render}</Layout_Signup_FooterWrapper>
}
