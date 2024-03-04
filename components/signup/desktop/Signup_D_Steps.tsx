import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Signup_D_Steps_CreateProfile } from "./Signup_D_Steps_CreateProfile"
import { Signup_D_Steps_WhoAreYou } from "./Signup_D_Steps_WhoAreYou"

export const Signup_D_Steps = () => {
  const { asPath } = useRouter()

  const actualStepFormatted = useMemo(() => {
    return asPath.split("/").at(-1)
  }, [asPath])

  const componentToRender = useMemo(() => {
    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU) {
      return <Signup_D_Steps_WhoAreYou />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE) {
      return <Signup_D_Steps_CreateProfile />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE1) {
      return (
        <>
          <div>
            <h2>Some data on create profile 1</h2>
          </div>
        </>
      )
    }
    return null
  }, [actualStepFormatted])

  return <>{componentToRender}</>
}
