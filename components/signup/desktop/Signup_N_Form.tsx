import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { Form_N } from "./Form_N"
import { LeftSide_N } from "./LeftSide_N"
import { Signup_N_FormWrapper } from "./styles/Signup_N_FormWrapper"
import { WhoYouAre } from "./WhoYouAre"
import { CreateProfile } from "./CreateProfile"
import { TellStory } from "./TellStory"
import { Review } from "./Review"
// import { HeaderProgress } from "./Progress"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Demography } from "./Demography"
import { Situation } from "./Situation"

export const Signup_N_Form = () => {
  const { step, setStep } = useSignup_Ctx()
  return (
    <Signup_N_FormWrapper
      isSignup={step === "signup" ? false : true}
      isBgInFooter={step === "create_profile"}
    >
      {/* {step === "tell_us_your_story" ? null : <LeftSide_N />} */}
      <div>
        {/* {step === "tell_us_your_story"
          ? null
          : step !== "signup" && <HeaderProgress />} */}
        {step === "signup" && <Form_N />}
        {step === "who_you_are" && <WhoYouAre />}
        {step === "create_profile" && <CreateProfile />}
        {step === "create_profile1" && <Demography />}
        {step === "create_profile2" && <Situation />}
        {step === "tell_us_your_story" && <TellStory />}
        {step === "review_and_save" && <Review />}
        {/* {step !== "signup" && (
          <div>
            <ButtonSmall
              goToDynamic={() => {
                setStep("create_profile")
              }}
              secondary
            >
              Back
            </ButtonSmall>
            <ButtonSmall
              goToDynamic={() => {
                if (step === "who_you_are") {
                  setStep("create_profile")
                } else if (step === "create_profile") {
                  setStep("create_profile1")
                } else if (step === "create_profile1") {
                  setStep("create_profile2")
                } else if (step === "create_profile2") {
                  setStep("tell_us_your_story")
                }
              }}
            >
              Next
            </ButtonSmall>
          </div>
        )} */}
      </div>
    </Signup_N_FormWrapper>
  )
}
