import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { LeftSide_N_Wrapper } from "./styles/LeftSide_N_Wrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useSignup_Ctx } from "@/context/Ctx_Signup"

export const LeftSide_N = () => {
  const { step, setStep } = useSignup_Ctx()

  let message = "Sign up here for free access to all of our resources."
  let content =
    " With a free account, you’ll be able to create your care plan(s) and get full access to resources and providers near you."
  if (step === "who_you_are") {
    message = "Let’s begin the journey by getting to know you!"
    content = "This information helps us customize your dashboard."
  }
  if (step === "create_profile1" || step === "create_profile2") {
    message = "Add profile information"
    content = "Creating a profile helps us find what you need faster."
  }
  if (step === "review_and_save") {
    message = "Saved profiles"
    content = "Review your profiles or create a new one."
  }
  if (step === "finish") {
    message = "Almost there..."
    content = "You’re one step away!"
  }
  return (
    <LeftSide_N_Wrapper>
      <div>
        <span>Inclusive</span>
        <span>BETA</span>
      </div>
      <H3>{message}</H3>
      <P>{content}</P>
    </LeftSide_N_Wrapper>
  )
}
