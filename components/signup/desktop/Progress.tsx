import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { HeaderProgressWrapper } from "./styles/HeaderProgressWrapper"

type Props = {
  showLogo: boolean
}
export const HeaderProgress = ({ showLogo }: Props) => {
  const { step, setStep } = useSignup_Ctx()
  let progress = 25
  if (
    step === "create_profile" ||
    step === "create_profile1" ||
    step === "create_profile2"
  ) {
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
    <HeaderProgressWrapper progress={progress} isGap={showLogo}>
      <div>
        {showLogo && (
          <>
            <span>Inclusive</span>
            <span>BETA</span>
          </>
        )}
      </div>
      <div>
        <div></div>
        <span></span>
        <div>
          {data.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </HeaderProgressWrapper>
  )
}
