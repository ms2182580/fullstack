import Image from "next/image.js"
import { BackArrow } from "../../assets/Icons"
import LoginImage from "../../assets/images/LoginImage.png"
import { FacebookLoginBtn, GoogleLoginBtn } from "../../components/ui/buttons/login/LoginBtns.js"
import { Caption, P } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { H1, H4 } from "../../components/ui/heading_body_text/HeaderFonts.js"
import { HyperlinkM } from "../../components/ui/hyperlink/HyperlinkFonts.js"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"
import SignupForm from "./SignupForm.js"
import SignupWrapper, { LeftSignup, RightSignup } from "./styles/Signup.js"

const Signup = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <SignupWrapper isMobile={isMobile}>
      
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
      
      {/* 
      
      // !FH0
      Finish the styles
      
      */}
      
      
      <LeftSignup>
        <span>
          <Image
            src={LoginImage}
            alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
          />
        </span>
        <P>Connect to community based and recreational services</P>
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
      ) : null}
    </SignupWrapper>
  )
}

export default Signup
