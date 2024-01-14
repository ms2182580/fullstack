import { useWidthWindow1024 } from "@/utils/useWidthWindow1024"
import { useRouter } from "next/router"
import { useState } from "react"
import { HeaderSignUpMobile } from "./HeaderSignUpMobile"
import { EmailSvg, ExclamationSvg, EyeSvg, LockSvg } from "@/assets/icons"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HyperlinkXS } from "@/components/ui/hyperlink/HyperlinkFonts"
import { ButtonMedium } from "@/components/ui/buttons/general"
import TermsAndServices, {
  CaptionSignUp,
  DisplayErrorComponent,
  Form,
  H4_EMAIL_SIGNUP,
  InputEmail,
  InputPassword,
  StyleInputFirst,
  StyleInputSecond,
} from "./styles/Signup_M_SignupWrapper"

const LOGIN_URL = "https://jsonplaceholder.typicode.com/posts"

export const Signup_M_SignupForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState({
    value: "",
    hasError: false,
    touched: false,
  })
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
    touched: false,
  })

  const [passwordReveal, setPasswordReveal] = useState(false)
  const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState("")

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     // const fetching = await fetch(LOGIN_URL, {
  //     //   method: "POST",
  //     //   body: JSON.stringify({
  //     //     email: `${email}`
  //     //   }),
  //     //   headers: {
  //     //     "Content-type": "application/json; charset=UTF-8"
  //     //   }
  //     // })

  //     // if (fetching.ok !== true) {
  //     //   throw new Error("Something happend")
  //     // }

  //     // const toJson = await fetching.json()

  //     // let keyToPush = `INCLUSIVE_ACCOUNT_${email.value}`

  //     // let isUserAlreayCreated = localStorage.getItem(keyToPush)

  //     // if (isUserAlreayCreated === null) {
  //     //   let valueToAdd = {
  //     //     isLogin: true,
  //     //     "speech-therapistss-saved": []
  //     //   }
  //     //   localStorage.setItem(keyToPush, JSON.stringify(valueToAdd))
  //     // }

  //     // if (isUserAlreayCreated) {
  //     //   // ?TODO This is the logic of log in
  //     //   // let parseDataUser = JSON.parse(localStorage.getItem(keyToPush))
  //     //   // parseDataUser.isLogin = true
  //     //   // localStorage.setItem(keyToPush, JSON.stringify(parseDataUser))

  //     //   setEmailAlreadyRegistered("This email is already registered. Want to")

  //     //   throw new Error("Email already used")
  //     // }
  //     const { user, session, error } = await supabase.auth.signUp({
  //       email: email.value,
  //       password: password.value
  //     })

  //     if (error) {
  //       throw error
  //     }

  //     console.log('user, session, error:', user, session, error)

  //     // setEmailAlreadyRegistered("")
  //     // setWhoIsLogin(keyToPush)
  //     localStorage.setItem("INCLUSIVE_ACCOUNT", "true")
  //     setIsLogin(true)
  //     router.push("/")
  //   } catch (error) {
  //     console.log("error:", error)

  //     // if (!error?.response) {
  //     //   setErrMsg("No server response")
  //     // } else if (error.response?.status === 400) {
  //     //   setErrMsg("Missing Username or Password")
  //     // } else if (error.response?.status === 401) {
  //     //   setErrMsg("Unauthorized")
  //     // } else {
  //     //   setErrMsg("Login Failed")
  //     // }

  //     // errRef.current.focus()
  //   }
  // }

  const onChangeEmail = (e) => {
    const inputValue = e.target.value.trim().toLowerCase()
    let emailHasError = false

    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        inputValue
      )
    ) {
      emailHasError = true
    }

    setEmail((prevState) => ({
      ...prevState,
      value: e.target.value,
      hasError: emailHasError,
    }))
    setEmailAlreadyRegistered("")
  }

  const handleFocusEmail = () => {
    if (!email.touched && email.value === "") {
      setEmail((prevState) => ({
        ...prevState,
        hasError: true,
        touched: true,
      }))
    }

    setEmail((prevState) => ({
      ...prevState,
      touched: true,
    }))
  }

  const onChangePassword = (e) => {
    const inputValue = e.target.value.trim().toLowerCase()
    let passwordHasError = false

    if (/[a-zA-Z0-9]{8,}/.test(inputValue)) {
      passwordHasError = true
    }

    setPassword((prevState) => ({
      ...prevState,
      value: e.target.value,
      hasError: passwordHasError,
    }))
    setEmailAlreadyRegistered("")
  }

  const handleFocusPassword = () => {
    setPassword((prevState) => ({
      ...prevState,

      touched: true,
    }))
  }

  const showPassword = () => {
    setPasswordReveal(!passwordReveal)
  }

  return (
    <>
      <section>
        <HeaderSignUpMobile />

        <Form>
          <H4_EMAIL_SIGNUP
            displayRedEmail={{
              emailAlreadyRegistered,
              hasError: email.hasError,
              hasTouched: email.touched,
            }}
          >
            Email
          </H4_EMAIL_SIGNUP>

          <StyleInputFirst
            customMargin={{
              emailAlreadyRegistered,
              hasError: email.hasError,
              hasTouched: email.touched,
            }}
          >
            <EmailSvg className="EmailIconSF" />

            <InputEmail
              value={email.value}
              type="email"
              required
              onChange={onChangeEmail}
              onBlur={handleFocusEmail}
              id="email"
              className="InputFirstSF"
              autoComplete="off"
              whichOutline={{
                emailAlreadyRegistered,
                hasError: email.hasError,
                hasTouched: email.touched,
              }}
            />
            {email.touched && email.hasError && (
              <Caption className={`CaptionInRedSF DisplayErrorFirst`}>
                It should be a valid email address!
              </Caption>
            )}
            {emailAlreadyRegistered !== "" && (
              <DisplayErrorComponent className="CaptionInRedSF DisplayErrorFirst">
                <ExclamationSvg />

                <Caption>
                  {emailAlreadyRegistered}{" "}
                  <HyperlinkXS href="/login" name="log in?" />
                </Caption>
              </DisplayErrorComponent>
            )}
          </StyleInputFirst>

          <>
            {password.touched && password.hasError ? (
              <h4>Password</h4>
            ) : (
              <h4 className={`${password.touched ? "CaptionInRedSF" : ""}`}>
                Password
              </h4>
            )}
          </>

          <StyleInputSecond>
            <LockSvg className="lockIconSF" />

            <EyeSvg className="eyeIconSF" onClick={showPassword} />

            <InputPassword
              value={password.value}
              type={passwordReveal ? "text" : "password"}
              required
              onChange={onChangePassword}
              onBlur={handleFocusPassword}
              id="password"
              className="InputSecondSF"
              whichOutline={{
                hasError: password.hasError,
                hasTouched: password.touched,
              }}
            />
            {password.touched && password.hasError ? (
              <CaptionSignUp className="DisplayErrorSecond">
                Password must include at least 8 characters
              </CaptionSignUp>
            ) : (
              <CaptionSignUp
                className={`${password.touched ? "CaptionInRedSF" : ""}`}
              >
                Password must include at least 8 characters
              </CaptionSignUp>
            )}
          </StyleInputSecond>

          <TermsAndServices>
            <Caption>
              By signing up, you agree to our{" "}
              <HyperlinkXS href="/work-in-progress" name="Terms of Service" />
              and
              <HyperlinkXS href="/work-in-progress" name="Privacy Policy" />
            </Caption>
          </TermsAndServices>

          <div>
            <ButtonMedium>Sign up</ButtonMedium>
          </div>
        </Form>
      </section>
    </>
  )
}
