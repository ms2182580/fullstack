import Image from "next/image"
import styled from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../assets/Colors"
import { Caption } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../components/ui/heading_body_text/HeaderFonts"

export const H4_EMAIL_SIGNUP = styled(H4)`
  color: ${(x) =>
    x.displayRedEmail.emailAlreadyRegistered !== "" ||
    (x.displayRedEmail.hasError === true &&
      x.displayRedEmail.hasTouched === true)
      ? `${SEMANTICS.ERROR_STATE}`
      : `${NEUTRALS.BLACK}`};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > h4 {
    margin-bottom: 8px;
  }

  .CaptionInRedSF {
    color: ${SEMANTICS.ERROR_STATE};
  }
`

export const Img = styled(Image)`
  /* width: 16px;
  height:16px; */
`

export const StyleInputFirst = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  margin-bottom: ${(x) =>
    x.customMargin.emailAlreadyRegistered !== "" ||
    (x.customMargin.hasError === true && x.customMargin.hasTouched === true)
      ? ``
      : `56px`};

  .EmailIconSF {
    position: absolute;
    width:18px;
    height:18px;
  }
  .EmailIconSF {
    left: 24px;
  }
  .EmailIconSF {
    top: 15px;
  }

  .DisplayErrorFirst {
    margin-top: 8px;
    margin-left: 14px;
    margin-bottom: 24px;
  }
  
`

export const InputEmail = styled.input`
  outline: ${(x) =>
    x.whichOutline.emailAlreadyRegistered !== "" ||
    (x.whichOutline.hasError === true && x.whichOutline.hasTouched === true)
      ? `3px ${SEMANTICS.ERROR_STATE} solid`
      : `1px ${NEUTRALS.BLACK} solid`};

  border-radius: 8px;
  border: none;
  height: 48px;
  padding-left: 65.08px;
  padding-right: 65.08px;
`

export const DisplayErrorComponent = styled.div`
  display: flex;
  justify-content: left;

  padding: 14px 14px 14px 0px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  & > span > a {
    padding: 0px;
    margin-left: 12px;
  }
`

export const H4_PASSWORD_SIGNUP = styled(H4)``

export const StyleInputSecond = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .lockIconSF,
  .eyeIconSF {
    position: absolute;
    
  }

  .lockIconSF {
    left: 24px;
    top: 12px;
    width: 24px;
    height:24px;
  }
  
  .eyeIconSF {
    width: 22px;
    height:15px;
    top: 17px;
    right: 22px;
    cursor: pointer;
  }

  & > input {
    padding-left: 65.08px;
    padding-right: 65.08px;
  }

  & > span:last-child {
    margin-left: 14px;
    margin-bottom: 50px;
  }

  .CaptionInRedSF {
    color: ${SEMANTICS.ERROR_STATE};
  }
`

export const InputPassword = styled.input`
  outline: ${(x) =>
    x.whichOutline.hasError !== true && x.whichOutline.hasTouched
      ? `3px ${SEMANTICS.ERROR_STATE} solid`
      : `1px ${NEUTRALS.BLACK} solid`};

  border-radius: 8px;
  border: none;

  height: 48px;
  padding-left: 65.08px;
  padding-right: 65.08px;
  margin-bottom: 18px;
`

export const CaptionSignUp = styled(Caption)`
  color: ${NEUTRALS.DARK_GREY};
`

export const TermsAndServices = styled.div`
  margin-bottom: 24px;
`
