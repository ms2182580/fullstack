import {
  SignUp_N_EyeCloseSvg,
  SignUp_N_EyeOpenSvg,
  Signup_N_FacebookSvg,
  Signup_N_GoogleSvg,
  Signup_N_InfoSvg,
} from "@/assets/icons"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useSignup_Ctx } from "@/context/Ctx_Signup"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SignupLayout } from "./Layout"
import { Signup_D_HomeWrapper } from "./styles/Signup_D_HomeWrapper"

export const passwordStrength_Keys = {
  "Very Weak": "Very Weak",
  Weak: "Weak",
  Strong: "Strong",
  "Very Strong": "Very Strong",
  specialCharacters: "!”#$%&'()*+,-./:;<=>?@[]^_`{|}~ ",
}

function checkPasswordStrength(password) {
  let strength = 0

  if (password.length >= 8) strength++
  if (password.length >= 12) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  if (password.length < 8) {
    return passwordStrength_Keys["Very Weak"]
  } else if (strength <= 2) {
    return passwordStrength_Keys["Weak"]
  } else if (strength <= 4) {
    return passwordStrength_Keys["Strong"]
  } else {
    return passwordStrength_Keys["Very Strong"]
  }
}

export const Signup_D_Home = () => {
  const { setStep } = useSignup_Ctx()
  let [isShowPassword, setIsShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordStrength, setPasswordStrenth] = useState("")
  const [passwordIsFocus, setPasswordIsFocus] = useState(false)

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)

    const strength = checkPasswordStrength(e.target.value)
    setPasswordStrenth(strength)
  }

  const handleIsShowPassword = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      setIsShowPassword((prevState) => !prevState)
    }
  }

  const [tooltipState, setTooltipState] = useState(false)

  const handleShowTooltip = (e) => {
    setTooltipState(true)
  }

  const handleHideTooltip = (e) => {
    console.log("e:", e)
    if (
      e.type === "mouseleave" ||
      e.type === "blur" ||
      (e.type === "keydown" && e.key === "Escape")
    ) {
      setTooltipState(false)
      setPasswordIsFocus(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleHideTooltip)

    return () => {
      window.removeEventListener("keydown", handleHideTooltip)
    }
  }, [])

  return (
    <>
      <SignupLayout>
        <Signup_D_HomeWrapper passwordStrength={passwordStrength}>
          <H3>Create an account</H3>
          <form>
            <label>
              First Name
              <input placeholder="Ex John" required />
            </label>
            <label>
              Last Name
              <input placeholder="Ex John" required />
            </label>
            <label>
              Email
              <input placeholder="Ex John" type="email" required />
            </label>
            <label>
              Password
              <input
                placeholder="*****"
                type={isShowPassword ? "text" : "password"}
                value={password}
                onChange={handleOnChangePassword}
                onFocus={() => setPasswordIsFocus(true)}
                onBlur={() => setPasswordIsFocus(false)}
                required
              />
              <span
                tabIndex={0}
                onClick={handleIsShowPassword}
                onKeyDown={handleIsShowPassword}
              >
                {isShowPassword ? (
                  <SignUp_N_EyeOpenSvg />
                ) : (
                  <SignUp_N_EyeCloseSvg />
                )}
              </span>
              <div
                onMouseEnter={handleShowTooltip}
                onFocus={handleShowTooltip}
                onMouseLeave={handleHideTooltip}
                onBlur={handleHideTooltip}
                tabIndex={0}
                aria-describedby="passwordrules"
              >
                <Signup_N_InfoSvg />
                {(tooltipState || passwordIsFocus) && (
                  <>
                    <span role="tooltip" id="passwordrules">
                      <P>A strong password must:</P>
                      <ul>
                        <li>
                          Be at least 12 characters long and no longer than 64
                          characters
                        </li>
                        <li>Contain at least one uppercase letter</li>
                        <li>Contain at least one lowercase letter</li>
                        <li>Contain at least one number</li>
                        <li>
                          Contain at least one special character (
                          {passwordStrength_Keys.specialCharacters})
                        </li>
                      </ul>
                    </span>
                  </>
                )}
              </div>
              {passwordStrength && <span></span>}
              {passwordStrength && <span>{passwordStrength}</span>}
            </label>
            <label>
              Confirm Password
              <input
                placeholder="*****"
                type={isShowPassword ? "text" : "password"}
                required
              />
              <span
                tabIndex={0}
                onClick={handleIsShowPassword}
                onKeyDown={handleIsShowPassword}
              >
                {isShowPassword ? (
                  <SignUp_N_EyeOpenSvg />
                ) : (
                  <SignUp_N_EyeCloseSvg />
                )}
              </span>
            </label>
            <label>
              <input type="checkbox" />
              <span>
                By creating an account, I agree to our{" "}
                <Link href="">Terms of use</Link> and <br />
                <Link href="">Privacy Policy</Link>
              </span>
            </label>
            <ButtonSmall goToDynamic={() => setStep("who_you_are")}>
              Create an account
            </ButtonSmall>
          </form>
          <div>
            <p>
              Already have an account? <Link href="/login">Log in</Link>
            </p>
            <div>
              <span></span>
              <span>OR</span>
              <span></span>
            </div>
          </div>

          <ButtonSmall secondary>
            <Signup_N_GoogleSvg />
            <span>Continue with Google</span>
          </ButtonSmall>
          <ButtonSmall secondary>
            <Signup_N_FacebookSvg />
            <span>Continue with Facebook</span>
          </ButtonSmall>
        </Signup_D_HomeWrapper>{" "}
      </SignupLayout>
    </>
  )
}
