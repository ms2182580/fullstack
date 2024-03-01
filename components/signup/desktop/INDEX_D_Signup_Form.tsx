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
import { Signup_D_Layout_Home } from "./Signup_D_Layout_Home"
import { Signup_D_Layout_WhoAreYou } from "./Signup_D_Layout_WhoAreYou"
import { Situation } from "./Situation"

const getLayoutComponent = (step) => {
  switch (step) {
    case Steps_Enum["home"]:
      return Signup_D_Layout_Home

    case Steps_Enum["who_are_you"]:
      return Signup_D_Layout_WhoAreYou

    default:
      return null
  }
}

export const INDEX_D_Signup_Form = () => {
  const { step, setStep } = useSignup_Ctx()
  /* 
  
   const componentToRender = useMemo(() => {
    if (step === Steps_Enum["home"]) {
      return <Signup_D_Home_Layout><Signup_D_Home/></Signup_D_Home_Layout>;
    }
    if (step === Steps_Enum["who_are_you"]) {
      return <WhoAreYou_Layout><WhoAreYou/></WhoAreYou_Layout>;
    }
    return null;
  }, [step]);

  */

  const componentToRender2 = useMemo(() => {
    if (step === Steps_Enum["home"]) {
      return (
        <>
          {/* 
        !FH0
        Re made all the layouts here
        */}
          <Signup_D_Layout_Home>
            <Signup_D_Home />
          </Signup_D_Layout_Home>
        </>
      )
    }
    if (step === Steps_Enum["who_are_you"]) {
      return (
        <>
          <Signup_D_Layout_WhoAreYou>
            <WhoAreYou />
          </Signup_D_Layout_WhoAreYou>
        </>
      )
    }
    return null
  }, [step])

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

  return <>{componentToRender2}</>
}
