import Signin from "@/assets/images/teams/signin.png"
import Signup from "@/assets/images/teams/signup.png"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import { useRouter } from "next/router"
import { TellUsAboutYouWrapper } from "./styles/index-wrapper"

/* 
!FH0

- Create the whole flow, in this case: "Tell Us About You"

*/

export const TellUsAboutYou = () => {
  const { asPath, push } = useRouter()

  const getRoot = `${asPath.split("/")[1]}/${
    ALL_ROUTES_INTERNAL.AUTHENTICATION
  }`

  const handleMoveToSignin = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      push(`/${getRoot}/${ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS.SIGNIN}`)
    }
  }

  const handleMoveToSignup = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      push(`/${getRoot}/${ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS.SIGNUP}`)
    }
  }

  return (
    <TellUsAboutYouWrapper>
      <header>
        <h1>Tell us about you: </h1>
      </header>

      <article
        tabIndex={0}
        onClick={handleMoveToSignin}
        onKeyDown={handleMoveToSignin}
      >
        <Image src={Signin} alt="computer image with some pop up" />
        <p>
          I’m an <span>Oddy Advocate</span>
        </p>
      </article>
      <article
        tabIndex={0}
        onClick={handleMoveToSignup}
        onKeyDown={handleMoveToSignup}
      >
        <Image src={Signup} alt="two hand shaking together" />
        <p>
          I’m an <span>Oddy Contractor</span>
        </p>
      </article>
    </TellUsAboutYouWrapper>
  )
}
