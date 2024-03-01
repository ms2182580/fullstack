import {
  SignUp_N_EyeCloseSvg,
  SignUp_N_EyeOpenSvg,
  Signup_N_FacebookSvg,
  Signup_N_GoogleSvg,
  Signup_N_InfoSvg,
} from "@/assets/icons"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Steps_Enum, useSignup_Ctx } from "@/context/Ctx_Signup"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useEffect, useState } from "react"
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
      <Signup_D_HomeWrapper passwordStrength={passwordStrength}>
        <H2>Create an account</H2>
        <form>
          <label>
            First Name
            <input placeholder="Ex: John" required />
          </label>
          <label>
            Last Name
            <input placeholder="Ex: Smith" required />
          </label>
          <label>
            Email
            <input
              placeholder="Ex: jsmith123@gmail.com"
              type="email"
              required
            />
          </label>
          <label>
            Password
            <input
              placeholder="Enter your password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePassword}
              onFocus={() => setPasswordIsFocus(true)}
              onBlur={() => setPasswordIsFocus(false)}
              required
              minLength={12}
              maxLength={64}
            />
            <span
              tabIndex={0}
              onClick={handleIsShowPassword}
              onKeyDown={handleIsShowPassword}
              aria-label="show-hide-password"
              aria-details="Clicking here you can toggle the visibility of the password in this input and the next input (confirm password)"
            >
              {isShowPassword ? (
                <SignUp_N_EyeOpenSvg data-testid="open_eye" />
              ) : (
                <SignUp_N_EyeCloseSvg data-testid="close_eye" />
              )}
            </span>
            <div
              onMouseEnter={handleShowTooltip}
              onFocus={handleShowTooltip}
              onMouseLeave={handleHideTooltip}
              onBlur={handleHideTooltip}
              tabIndex={0}
              aria-label="password-rules"
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
            {passwordStrength && (
              <span aria-label="password-strength">{passwordStrength}</span>
            )}
          </label>
          <label>
            Confirm Password
            <input
              placeholder="Confirm password"
              type={isShowPassword ? "text" : "password"}
              required
            />
            <span
              tabIndex={0}
              onClick={handleIsShowPassword}
              onKeyDown={handleIsShowPassword}
              aria-label="show-hide-confirm-password"
              aria-details="Clicking here you can toggle the visibility of the confirm password in this input and the previous input (password)"
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
          <button onClick={() => setStep(Steps_Enum["who_are_you"])}>
            Create an account
          </button>
        </form>

        <div>
          <p>
            Already have an account?{" "}
            <Link href={`${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
              Log in
            </Link>
          </p>
          <div>
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
        </div>

        <ButtonSmall secondary>
          <Signup_N_GoogleSvg data-testid="google-icon" />
          <span>Continue with Google</span>
        </ButtonSmall>
        <ButtonSmall secondary>
          <Signup_N_FacebookSvg data-testid="facebook-icon" />
          <span>Continue with Facebook</span>
        </ButtonSmall>
      </Signup_D_HomeWrapper>{" "}
    </>
  )
}
