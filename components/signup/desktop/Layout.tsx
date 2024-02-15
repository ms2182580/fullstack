import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { LeftSide_N } from "./LeftSide_N"
import { HeaderProgress } from "./Progress"
import { LayoutWrapper } from "./styles/LayoutWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"

type Props = {
  children: React.ReactNode
}
export const SignupLayout = (props: Props) => {
  const { step, setStep } = useSignup_Ctx()
  return (
    <LayoutWrapper
      isShowSidebar={
        step === "create_profile" || step === "tell_us_your_story"
          ? false
          : true
      }
    >
      <div>
        {step === "create_profile" || step === "tell_us_your_story" ? (
          <div></div>
        ) : (
          <LeftSide_N />
        )}
        <div>
          {step !== "signup" && (
            <HeaderProgress
              showLogo={
                step === "create_profile" || step === "tell_us_your_story"
                  ? true
                  : false
              }
            />
          )}
          {props.children}

          <div className="bottom">
            {step !== "signup" && (
              <div>
                {step === "create_profile" ||
                  (step === "tell_us_your_story" && (
                    <ButtonSmall
                      goToDynamic={() => {
                        setStep("create_profile")
                      }}
                      secondary
                    >
                      Back
                    </ButtonSmall>
                  ))}
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
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
