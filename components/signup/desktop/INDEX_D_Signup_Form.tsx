import { CreateProfile } from "./CreateProfile"
import { Review } from "./Review"
import { Signup_D_Home } from "./Signup_D_Home"
import { TellStory } from "./TellStory"
import { WhoAreYou } from "./WhoAreYou"
// import { HeaderProgress } from "./Progress"
import { Steps_Enum, useSignup_Ctx } from "@/context/Ctx_Signup"
import { useMemo } from "react"
import { Demography } from "./Demography"
import { Finish } from "./Finish"
import { Signup_D_Layout2 } from "./Signup_D_Layout2"
import { Situation } from "./Situation"

export const INDEX_D_Signup_Form = () => {
  const { step, setStep } = useSignup_Ctx()

  const componentToRender = useMemo(() => {
    if (step === Steps_Enum["home"]) return <Signup_D_Home />
    if (step === Steps_Enum["who_are_you"]) return <WhoAreYou />
    if (step === Steps_Enum["create_profile"]) return <CreateProfile />
    if (step === "create_profile1") return <Demography />
    if (step === "create_profile2") return <Situation />
    if (step === "tell_us_your_story") return <TellStory />
    if (step === "review_and_save") return <Review />
    if (step === "finish") return <Finish />

    return null
  }, [step])

  return (
    <>
      <Signup_D_Layout2>{componentToRender}</Signup_D_Layout2>
    </>
  )
}
