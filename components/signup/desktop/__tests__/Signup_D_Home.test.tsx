import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import "@testing-library/jest-dom/vitest"
import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { Signup_D_Home } from "../Signup_D_Home"

describe("Testing Signup Desktop Home", (ctx_describe) => {
  afterEach(cleanup)

  it("Signup Home is Render", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <Signup_D_Home />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )
  })

  it("Title is there: «Create an account»", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <Signup_D_Home />
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
              <Signup_D_Home />
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
              <Signup_D_Home />
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
              <Signup_D_Home />
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
              <Signup_D_Home />
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
              <Signup_D_Home />
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
              <Signup_D_Home />
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

  describe("Checking all visible data on «Password»", (ctx_describe) => {
    it("Input label «Password» and his input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
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
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getAll = screen.getByLabelText("show-hide-password")

      expect(getAll).toBeInTheDocument()
    })

    /* 
    !FH0
    Test if the words inside the input is able to be seen. Test it recovering the input and checking if have the attribute type on text or password
    */
    it("Show and hide password is working", async (ctx) => {
      const user = userEvent.setup()
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getAll = screen.getByLabelText("show-hide-password")

      await user.click(getAll)

      const getOpenEye = screen.getByTestId("open_eye")
      expect(getOpenEye).toBeInTheDocument()

      await user.click(getAll)

      const getCloseEye = screen.getByTestId("close_eye")
      expect(getCloseEye).toBeInTheDocument()
      expect(getOpenEye).not.toBeInTheDocument()
    })

    it("Container of tooltip exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getContainerOfTooltip = screen.getByLabelText("password-rules")

      expect(getContainerOfTooltip).toBeInTheDocument()
    })
  })

  describe("Checking all visible data on «Confirm Password»", (ctx_describe) => {
    it("Input label «Confirm Password» and his input exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
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
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getConfirmPassword = screen.getByLabelText(
        "show-hide-confirm-password"
      )

      expect(getConfirmPassword).toBeInTheDocument()
    })
  })

  describe("Accept terms of use and Privacy Policy", (ctx_describe) => {
    it("Text exist", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
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
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("checkbox")

      expect(getData).toBeInTheDocument()
    })
  })

  it("Create an account button", (ctx) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <Signup_D_Home />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )

    const getData = screen.getByRole("button", { name: /create an account/i })

    expect(getData).toBeInTheDocument()
  })

  describe("«Already have an account? Log in» ", (ctx_describe) => {
    it("«Already have an account?»", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByText(/Already have an account?/i)

      expect(getData.textContent).toBeDefined()
    })

    it("«Log in» text inside an anchor", (ctx) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
            </Ctx_Signup_Provider>
          </Dashboard_Ctx_AICHAT_Provider>
        </>
      )

      const getData = screen.getByRole("link", { name: /log in/i })

      expect(getData).toBeInTheDocument()
      expect(getData).toHaveAttribute("href", "/login")
    })
  })

  describe("Access with Social Media", (ctx_describe) => {
    it("Google", (ctx_it) => {
      render(
        <>
          <Dashboard_Ctx_AICHAT_Provider>
            <Ctx_Signup_Provider>
              <Signup_D_Home />
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
              <Signup_D_Home />
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
