import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { WhoAreYou } from "../WhoAreYou"

describe(`Testing ${WhoAreYou.name} component`, (ctx_describe) => {
  it("Component is render", (ctx_it) => {
    render(
      <>
        <Dashboard_Ctx_AICHAT_Provider>
          <Ctx_Signup_Provider>
            <WhoAreYou />
          </Ctx_Signup_Provider>
        </Dashboard_Ctx_AICHAT_Provider>
      </>
    )
  })
})
