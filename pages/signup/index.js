import Image from "next/image.js"
import { useState } from "react"
import { BackArrow } from "../../assets/Icons"
import LoginImage from "../../assets/images/LoginImage.png"
import LoginImageMobile from "../../assets/images/LoginImageMobile.jpg"
import { LoginButtonsMobile } from "../../components/signup/LoginButtonsMobile"
import { LastComponentsMobileWrapper } from "../../components/signup/styles/LastComponentsMobileWrapper"
import { ButtonSmall } from "../../components/ui/buttons/general"
import { FacebookLoginBtn, GoogleLoginBtn } from "../../components/ui/buttons/login/LoginBtns.js"
import { Caption } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { H1, H2, H4 } from "../../components/ui/heading_body_text/HeaderFonts.js"
import { HyperlinkM, HyperlinkXS } from "../../components/ui/hyperlink/HyperlinkFonts.js"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"
import SignupForm from "./SignupForm.js"
import SignupWrapper, { LeftSignup, RightSignup } from "./styles/Signup.js"

const Signup = () => {
  const { isMobile } = useWidthWindow1024()

  const [showLoginButtons, setShowLoginButtons] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleShowLoginButtons = () => {
    setShowLoginButtons(true)
    setFadeOut(false)
  }
  const handleHideLoginButtons = () => {
    setFadeOut(true)

    setTimeout(() => {
      setShowLoginButtons(false)
    }, 400)
  }

  return (
    <SignupWrapper
      isMobile={isMobile}
      showLoginButtons={showLoginButtons}>
      {isMobile === false ? null : (
        <>
          <span>
            <LinkNoStyle href="/">
              <BackArrow />
              <span>Return to Home</span>
            </LinkNoStyle>
          </span>
        </>
      )}

      <LeftSignup>
        {isMobile === false ? (
          <>
            <span>
              <Image
                src={LoginImage}
                alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
              />
            </span>

            <H2>Connect to community based and recreational services</H2>
          </>
        ) : (
          <>
            <H4>
              Connect to <span>community based</span> <br />
              and <span>recreational services</span>
            </H4>

            <span>
              <Image
                src={LoginImageMobile}
                alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
              />
            </span>
          </>
        )}
      </LeftSignup>

      {isMobile === false ? (
        <>
          <RightSignup>
            <H1>
              Join <span>Inclusive</span>
            </H1>
            <div>
              <H4>Already have an account?</H4>
              <HyperlinkM
                href="/login"
                name="Log in"
              />
            </div>
            <div>
              <GoogleLoginBtn />
              <FacebookLoginBtn />
            </div>
            <div>
              <Caption>or</Caption>
            </div>

            <div>
              <SignupForm />
            </div>
          </RightSignup>
        </>
      ) : (
        <LastComponentsMobileWrapper>
          <span
            onClick={handleShowLoginButtons}
            onBlur={handleHideLoginButtons}>
            <ButtonSmall>Join Inclusive</ButtonSmall>
          </span>

          <div>
            <Caption>Already have an account?</Caption>
            <HyperlinkXS
              href="/login"
              name="Log in"
            />
          </div>

          {showLoginButtons && (
            <LoginButtonsMobile
              showLoginButtons={showLoginButtons}
              fadeOut={fadeOut}
            />
          )}
        </LastComponentsMobileWrapper>
      )}
    </SignupWrapper>
  )
}

export default Signup
