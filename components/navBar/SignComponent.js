import { LanguageIconSvg, ProfileIconSvg } from "../../assets/Icons"
import { SignComponentWrapper } from "./styles/SignComponentWrapper.js"

export const SignComponent = () => {
  return (
    <>
      <SignComponentWrapper>
        <span>
          <LanguageIconSvg />
        </span>

        <span>
          <ProfileIconSvg />
        </span>
      </SignComponentWrapper>
    </>
  )
}
