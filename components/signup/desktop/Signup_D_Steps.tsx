import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Finish } from "./Finish"
import { Review } from "./Review"
import { Signup_D_Steps_CreateProfile } from "./Signup_D_Steps_CreateProfile"
import { Signup_D_Steps_Demography } from "./Signup_D_Steps_Demography"
import { Signup_D_Steps_WhoAreYou } from "./Signup_D_Steps_WhoAreYou"
import { Situation } from "./Situation"
import { TellStory } from "./TellStory"

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

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY) {
      return <Signup_D_Steps_Demography />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.SITUATION) {
      return <Situation />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY) {
      return <TellStory />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE) {
      return <Review />
    }

    if (actualStepFormatted === ALL_ROUTES.SIGNUP_STEPS.FINISH) {
      return <Finish />
    }
    return null
  }, [actualStepFormatted])

  return <>{componentToRender}</>
}
