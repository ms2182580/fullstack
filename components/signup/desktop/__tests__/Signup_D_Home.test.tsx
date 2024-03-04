import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import {
  INDEX_D_Signup_Home,
  passwordStrength_Keys,
} from "../INDEX_D_Signup_Home"

describe(`Testing ${INDEX_D_Signup_Home.name} component`, (ctx_describe) => {
  afterEach(cleanup)

  it("Signup Home is Render", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <INDEX_D_Signup_Home />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )
  })

  it("Signup Home is stablished: nothing should change", async (ctx_it) => {
    let theActualJSXFile = render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <INDEX_D_Signup_Home />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )

    await expect(theActualJSXFile).toMatchFileSnapshot(
      "./__snapshots__/Signup_D_Home.html"
    )
  })

  it("Title is there: «Create an account»", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <INDEX_D_Signup_Home />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )

    const getTitle = screen.getByRole("heading", { level: 2 })

    expect(getTitle).toBeInTheDocument()
  })

  describe("Input label «First Name»", (ctx_describe) => {
    it("Text and input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getFirstNameLabel = screen.getByLabelText(/first name/i)
      expect(getFirstNameLabel).toBeInTheDocument()

      const inputFirstName = screen.getByPlaceholderText(/ex: john/i)
      expect(inputFirstName).toBeInTheDocument()
      expect(inputFirstName).toHaveAttribute("required")
    })

    it("Clicking on label, the input is focus", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getFirstNameLabel = screen.getByLabelText(/first name/i)
      const inputFirstName = screen.getByPlaceholderText(/ex: john/i)

      await user.click(getFirstNameLabel)
      expect(inputFirstName).toHaveFocus()
    })
  })

  describe("Input label «Last Name»", (ctx_describe) => {
    it("Text and input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getLastNameLabel = screen.getByLabelText(/last name/i)
      expect(getLastNameLabel).toBeInTheDocument()

      const inputLastName = screen.getByPlaceholderText(/ex: smith/i)
      expect(inputLastName).toBeInTheDocument()
      expect(inputLastName).toHaveAttribute("required")
    })

    it("Clicking on label, the input is focus", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getLastNameLabel = screen.getByLabelText(/last name/i)
      const inputLastName = screen.getByPlaceholderText(/ex: smith/i)

      await user.click(getLastNameLabel)
      expect(inputLastName).toHaveFocus()
    })
  })

  describe("Input label «Email»", (ctx_describe) => {
    it("Tex and input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getEmailLabel = screen.getByLabelText(/email/i)
      expect(getEmailLabel).toBeInTheDocument()

      const inputEmail = screen.getByPlaceholderText(/ex: jsmith123@gmail.com/i)
      expect(inputEmail).toBeInTheDocument()
      expect(inputEmail).toHaveAttribute("required")
    })

    it("Clicking on label, the input is focus", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getEmailLabel = screen.getByLabelText(/email/i)
      const inputEmail = screen.getByPlaceholderText(/ex: jsmith123@gmail.com/i)

      await user.click(getEmailLabel)
      expect(inputEmail).toHaveFocus()
    })
  })

  describe("Checking «Password»", (ctx_describe) => {
    it("Input label «Password» and his input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getPasswordLabel = screen.getByText("Password")
      expect(getPasswordLabel).toBeInTheDocument()

      const inputPassword = screen.getByPlaceholderText(/enter your password/i)
      expect(inputPassword).toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("required")
    })

    it("Container of show and hide password exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getAll = screen.getByLabelText("show-hide-password")

      expect(getAll).toBeInTheDocument()
    })

    it("Container of tooltip exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getContainerOfTooltip = screen.getByLabelText("password-rules")

      expect(getContainerOfTooltip).toBeInTheDocument()
    })

    it("Tooltip is showed when is hover", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getContainerOfTooltip = screen.getByLabelText("password-rules")
      let isHover = false

      getContainerOfTooltip.addEventListener("mouseover", () => {
        isHover = true
      })
      getContainerOfTooltip.addEventListener("mouseout", () => {
        isHover = false
      })

      expect(isHover).toBeFalsy()

      await user.hover(getContainerOfTooltip)
      expect(isHover).toBeTruthy()
      expect(screen.getByRole("tooltip")).toBeInTheDocument()

      await user.unhover(getContainerOfTooltip)
      expect(isHover).toBeFalsy()
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

      await user.hover(getContainerOfTooltip)
      expect(isHover).toBeTruthy()
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    it("Show and hide password is working", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const inputPassword = screen.getByPlaceholderText(/enter your password/i)

      expect(inputPassword).toHaveAttribute("type", "password")

      const showHidePassword = screen.getByLabelText("show-hide-password")

      await user.click(showHidePassword)

      const getOpenEyeSvg = screen.getByTestId("open_eye")

      expect(getOpenEyeSvg).toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("type", "text")
      expect(inputPassword).toHaveFocus()
      expect(await screen.findByRole("tooltip")).toBeInTheDocument()

      await user.click(showHidePassword)

      const getCloseEyeSvg = screen.getByTestId("close_eye")

      expect(getCloseEyeSvg).toBeInTheDocument()
      expect(getOpenEyeSvg).not.toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("type", "password")
      expect(inputPassword).toHaveFocus()
      expect(await screen.findByRole("tooltip")).toBeInTheDocument()
    })

    it("Type on password input show strength of password ", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const typeCollection = {
        "Very Weak": "1234567",
        Weak: "12345678",
        Strong: "12345678a",
        "Very Strong": "0123456789Aa",
      }

      const inputPassword = screen.getByPlaceholderText(/enter your password/i)

      await user.type(inputPassword, `${typeCollection["Very Weak"]}`)

      const getPasswordStrength = screen.getByLabelText("password-strength")

      expect(inputPassword).toHaveFocus()
      expect(inputPassword).toHaveValue(typeCollection["Very Weak"])
      expect(getPasswordStrength).toBeInTheDocument()
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Very Weak"]}$`)
      )

      await user.clear(inputPassword)

      expect(inputPassword).toHaveValue("")
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Very Weak"]}$`)
      )

      await user.type(inputPassword, `${typeCollection["Weak"]}`)

      expect(inputPassword).toHaveValue(typeCollection["Weak"])
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Weak"]}$`)
      )

      await user.clear(inputPassword)

      expect(inputPassword).toHaveValue("")
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Very Weak"]}$`)
      )

      await user.type(inputPassword, `${typeCollection["Strong"]}`)

      expect(inputPassword).toHaveValue(typeCollection["Strong"])
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Strong"]}$`)
      )

      await user.clear(inputPassword)

      expect(inputPassword).toHaveValue("")
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Very Weak"]}$`)
      )

      await user.type(inputPassword, `${typeCollection["Very Strong"]}`)

      expect(inputPassword).toHaveValue(typeCollection["Very Strong"])
      expect(getPasswordStrength).toHaveTextContent(
        new RegExp(`^${passwordStrength_Keys["Very Strong"]}$`)
      )
    })
  })

  describe("Checking «Confirm Password»", (ctx_describe) => {
    it("Input label «Confirm Password» and his input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getPasswordLabel = screen.getByText("Confirm Password")
      expect(getPasswordLabel).toBeInTheDocument()

      const inputPassword = screen.getByPlaceholderText(/confirm password/i)
      expect(inputPassword).toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("required")
    })

    it("individual test", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getConfirmPassword = screen.getByLabelText(
        "show-hide-confirm-password"
      )

      expect(getConfirmPassword).toBeInTheDocument()
    })

    it("Show and hide confirm password is working", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const inputPassword = screen.getByPlaceholderText(/confirm password/i)

      expect(inputPassword).toHaveAttribute("type", "password")

      const showHidePassword = screen.getByLabelText(
        "show-hide-confirm-password"
      )

      await user.click(showHidePassword)

      const getOpenEyeSvg = screen.getByTestId("open_eye")

      expect(getOpenEyeSvg).toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("type", "text")
      expect(inputPassword).toHaveFocus()

      await user.click(showHidePassword)

      const getCloseEyeSvg = screen.getByTestId("close_eye")

      expect(getCloseEyeSvg).toBeInTheDocument()
      expect(getOpenEyeSvg).not.toBeInTheDocument()
      expect(inputPassword).toHaveAttribute("type", "password")
      expect(inputPassword).toHaveFocus()
    })
  })

  describe("Accept terms of use and Privacy Policy", (ctx_describe) => {
    it("Text exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByLabelText(
        /By creating an account, I agree to our Terms of use and Privacy Policy/i
      )

      expect(getData).toBeInTheDocument()
    })

    it("Input checkbox exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("checkbox")

      expect(getData).toBeInTheDocument()
    })

    it("Click on text should check the input", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const textAcceptTerms = screen.getByLabelText(
        /By creating an account, I agree to our Terms of use and Privacy Policy/i
      )
      const inputAcceptTerms = screen.getByRole("checkbox")
      expect(inputAcceptTerms).not.toBeChecked()

      await user.click(textAcceptTerms)
      expect(inputAcceptTerms).toBeChecked()

      await user.click(textAcceptTerms)
      expect(inputAcceptTerms).not.toBeChecked()

      await user.click(inputAcceptTerms)
      expect(inputAcceptTerms).toBeChecked()
    })
  })

  describe("Create an account button", (ctx_describe) => {
    it("Button exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("link", { name: /create an account/i })

      expect(getData).toBeInTheDocument()
    })

    it("Button have the correct data to move the view of the user to the next step", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("link", { name: /create an account/i })

      expect(getData).toHaveAttribute(
        "href",
        `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU}`
      )
    })
  })

  describe("«Already have an account? Log in» ", (ctx_describe) => {
    it("«Already have an account?»", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByText(/Already have an account?/i)

      expect(getData.textContent).toBeDefined()
    })

    it("«Log in» text have correct href", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("link", { name: /log in/i })

      expect(getData).toBeInTheDocument()
      expect(getData).toHaveAttribute(
        "href",
        `${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`
      )
    })
  })

  describe("Access with Social Media", (ctx_describe) => {
    it("Google", (ctx_it) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByText(/Continue with Google/i)
      expect(getData).toBeInTheDocument()

      const getIcon = screen.getByTestId(/google-icon/i)
      expect(getIcon).toBeInTheDocument()
    })

    it("Facebook", (ctx_it) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <INDEX_D_Signup_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getText = screen.getByText(/Continue with Facebook/i)
      expect(getText).toBeInTheDocument()

      const getIcon = screen.getByTestId(/facebook-icon/i)
      expect(getIcon).toBeInTheDocument()
    })
  })
})
