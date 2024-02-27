import { CreateProfile } from "./CreateProfile"
import { Review } from "./Review"
import { Signup_D_Home } from "./Signup_D_Home"
import { TellStory } from "./TellStory"
import { WhoYouAre } from "./WhoYouAre"
import { INDEX_D_Signup_FormWrapper } from "./styles/INDEX_D_Signup_FormWrapper"
// import { HeaderProgress } from "./Progress"
import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { Demography } from "./Demography"
import { Finish } from "./Finish"
import { SignupLayout } from "./Layout"
import { Situation } from "./Situation"

export const INDEX_D_Signup_Form = () => {
  const { step, setStep } = useSignup_Ctx()
  return (
    <INDEX_D_Signup_FormWrapper
      isSignup={step === "signup" ? false : true}
      isBgInFooter={step === "create_profile"}
    >
      <SignupLayout>
        {step === "signup" && <Signup_D_Home />}
        {step === "who_you_are" && <WhoYouAre />}
        {step === "create_profile" && <CreateProfile />}
        {step === "create_profile1" && <Demography />}
        {step === "create_profile2" && <Situation />}
        {step === "tell_us_your_story" && <TellStory />}
        {step === "review_and_save" && <Review />}
        {step === "finish" && <Finish />}
      </SignupLayout>
    </INDEX_D_Signup_FormWrapper>
  )
}
