import { ButtonSmall } from "@/components/ui/buttons/general"
import { Steps_Enum, useSignup_Ctx } from "@/context/Ctx_Signup"
import { LeftSide_N } from "./LeftSide_N"
import { HeaderProgress } from "./Progress"
import { LayoutWrapper4 } from "./styles/LayoutWrapper4"

export const Layout_Signup = ({ children }) => {
  const { step, setStep } = useSignup_Ctx()
  return (
    <>
      <LayoutWrapper4
        colorBottom={step === "review_and_save" ? true : false}
        isShowSidebar={
          step !== "create_profile" && step !== "tell_us_your_story"
        }
      >
        {step === "create_profile" || step === "tell_us_your_story" ? (
          <div></div>
        ) : (
          <LeftSide_N />
        )}
        <div>
          {step !== "home" &&
            step !== "finish" &&
            step !== "recentLogin" &&
            step !== "login" && (
              <HeaderProgress
                showLogo={
                  step === "create_profile" || step === "tell_us_your_story"
                    ? true
                    : false
                }
              />
            )}

          {children}

          <div className="bottom">
            {step !== "home" && (
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

                {step === "finish" ||
                step === "recentLogin" ||
                step === "login" ? null : (
                  <ButtonSmall
                    goToDynamic={() => {
                      if (step === Steps_Enum["who_are_you"]) {
                        setStep("create_profile")
                      } else if (step === "create_profile") {
                        setStep("create_profile1")
                      } else if (step === "create_profile1") {
                        setStep("create_profile2")
                      } else if (step === "create_profile2") {
                        setStep("tell_us_your_story")
                      } else if (step === "tell_us_your_story") {
                        setStep("review_and_save")
                      } else if (step === "review_and_save") {
                        setStep("finish")
                      }
                    }}
                  >
                    {step === "review_and_save" ? "Finish" : "Next"}
                  </ButtonSmall>
                )}
              </div>
            )}
          </div>
        </div>
      </LayoutWrapper4>
    </>
  )
}
