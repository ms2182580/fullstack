import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { TellUsAboutYouWrapper } from "./styles/index-wrapper"

/* 
!FH0

Create the whole flow, in this case: "Tell Us About You"
*/

export const TellUsAboutYou = () => {
  const { asPath } = useRouter()
  // console.log("pathname:", pathname, all)

  const getRoot = asPath.split("/")[1]

  const toSignin = `/${getRoot}/${ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNIN}`
  const toSignup = `/${getRoot}/${ALL_ROUTES_INTERNAL.AUTHENTICATION.SIGNUP}`

  return (
    <TellUsAboutYouWrapper>
      <Link href={`${toSignin}`}>To sign in</Link>

      <Link href={`${toSignup}`}>To sign up</Link>

      <Link href={`/${getRoot}`}>To dashboard Team</Link>
    </TellUsAboutYouWrapper>
  )
}
