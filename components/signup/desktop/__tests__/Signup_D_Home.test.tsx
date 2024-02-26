import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { Signup_D_Home } from "../Signup_D_Home"

describe("Testing Signup Desktop Home", (ctx_describe) => {
  it("Signup is Render", (ctx_it) => {
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
})
