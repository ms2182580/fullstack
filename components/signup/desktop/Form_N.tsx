import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Form_NWrapper, Input, Label } from "./styles/Form_NWrapper"
import Link from "next/link"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { useState } from "react"
import {
  SignUp_N_EyeCloseSvg,
  SignUp_N_EyeOpenSvg,
  Signup_N_FacebookSvg,
  Signup_N_GoogleSvg,
  Signup_N_InfoSvg,
} from "@/assets/icons"
import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { SignupLayout } from "./Layout"

function checkPasswordStrength(password) {
  let strength = 0

  if (password.length >= 8) strength++
  if (password.length >= 12) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  if (password.length < 8) {
    return "Very Weak"
  } else if (strength <= 2) {
    return "Weak"
  } else if (strength <= 4) {
    return "Strong"
  } else {
    return "Very Strong"
  }
}

export const Form_N = () => {
  const { setStep } = useSignup_Ctx()
  let [isShowPassword, setIsShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordStrength, setPasswordStrenth] = useState("")
  return (
    <SignupLayout>
      <Form_NWrapper passwordStrenth={passwordStrength}>
        <div>
          <H3>Create an account</H3>
          <form>
            <Label>
              First Name
              <Input placeholder="Ex John" />
            </Label>
            <Label>
              Last Name
              <Input placeholder="Ex John" />
            </Label>
            <Label>
              Email
              <Input placeholder="Ex John" />
            </Label>
            <Label>
              Password
              <Input
                placeholder="*****"
                type={isShowPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  const strength = checkPasswordStrength(e.target.value)
                  setPassword(e.target.value)
                  setPasswordStrenth(strength)
                }}
              />
              <span>
                {isShowPassword ? (
                  <SignUp_N_EyeOpenSvg
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                ) : (
                  <SignUp_N_EyeCloseSvg
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                )}
              </span>
              <Signup_N_InfoSvg />
              {passwordStrength && <span></span>}
              {passwordStrength && <span>{passwordStrength}</span>}
            </Label>
            <Label>
              Confirm Password
              <Input
                placeholder="*****"
                type={isShowPassword ? "text" : "password"}
              />
              <span>
                {isShowPassword ? (
                  <SignUp_N_EyeOpenSvg
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                ) : (
                  <SignUp_N_EyeCloseSvg
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                )}
              </span>
            </Label>
            <div>
              <input type="checkbox" />
              <span>
                By creating an account, I agree to our{" "}
                <Link href="">Terms of use</Link> and <br />
                <Link href="">Privacy Policy</Link>
              </span>
            </div>
            <ButtonSmall goToDynamic={() => setStep("who_you_are")}>
              Create an account
            </ButtonSmall>
          </form>
          <div>
            <p>
              Already have an account? <Link href="">Log in</Link>
            </p>
            <div>
              <span></span>
              <span>OR</span>
              <span></span>
            </div>
          </div>
          <ButtonSmall secondary>
            <Signup_N_GoogleSvg className="icons" />{" "}
            <span>Continue with Google</span>
          </ButtonSmall>
          <ButtonSmall secondary>
            <Signup_N_FacebookSvg className="icons" />
            <span>Continue with Facebook</span>
          </ButtonSmall>
        </div>
      </Form_NWrapper>{" "}
    </SignupLayout>
  )
}
