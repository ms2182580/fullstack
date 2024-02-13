import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { Form_N } from "./Form_N"
import { LeftSide_N } from "./LeftSide_N"
import { Signup_N_FormWrapper } from "./styles/Signup_N_FormWrapper"
import { WhoYouAre } from "./WhoYouAre"
import { CreateProfile } from "./CreateProfile"
import { TellStory } from "./TellStory"
import { Review } from "./Review"
import { HeaderProgress } from "./Progress"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const Signup_N_Form = () => {
  const { step } = useSignup_Ctx()
  return (
    <Signup_N_FormWrapper>
      <LeftSide_N />
      <div>
        {step !== "signup" && <HeaderProgress />}
        {step === "signup" && <Form_N />}
        {step === "who_you_are" && <WhoYouAre />}
        {step === "create_profile" && <CreateProfile />}
        {step === "tell_us_your_story" && <TellStory />}
        {step === "review_and_save" && <Review />}
        {step !== "signup" && (
          <div>
            <ButtonSmall>Next</ButtonSmall>
          </div>
        )}
      </div>
    </Signup_N_FormWrapper>
  )
}
