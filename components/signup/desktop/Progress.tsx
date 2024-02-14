import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { HeaderProgressWrapper } from "./styles/HeaderProgressWrapper"

export const HeaderProgress = () => {
  const { step, setStep } = useSignup_Ctx()
  let progress = 25
  if (step === "create_profile") {
    progress = 50
  } else if (step === "tell_us_your_story") {
    progress = 75
  } else if (step === "review_and_save") {
    progress = 100
  }
  let data = [
    {
      name: "1. Who are you",
    },
    {
      name: "2. Create profile",
    },
    {
      name: "3. Tell us your story",
    },
    {
      name: "3. Review and save",
    },
  ]
  return (
    <HeaderProgressWrapper progress={progress}>
      <div></div>
      <span></span>
      <div>
        {data.map((item) => (
          <div key={item.name}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </HeaderProgressWrapper>
  )
}
