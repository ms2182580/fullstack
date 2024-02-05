import {
  DashboardTourHiSvg,
  Dashboard_TourChatSvg,
  Dashboard_TourCloseSvg,
  Dashboard_TourFileSvg,
  Dashboard_TourOptimize,
  Dashboard_TourSaveSvg,
} from "@/assets/icons"
import {
  DefaultDesign,
  FirstSreen,
  INDEX_D_TourIndividualWrapper,
} from "./styles/INDEX_D_TourIndividualWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const INDEX_D_TourIndividual = (props: any) => {
  console.log({ props })
  let content = <div></div>

  if (props.currentStep === 0) {
    content = (
      <FirstSreen>
        <span onClick={() => props.setIsOpen(false)}>
          <Dashboard_TourCloseSvg />
        </span>
        <DashboardTourHiSvg />
        <span>1 out of 5</span>
        <span>Welcome to the care plan editor!</span>
        <span>
          Let’s start with a quick guided tour. We’ll have you up and running in
          no time.{" "}
        </span>
        <div>
          <ButtonSmall
            goToDynamic={() => props.setCurrentStep(props.currentStep + 1)}
          >
            Get Started
          </ButtonSmall>
          <ButtonSmall secondary goToDynamic={() => props.setIsOpen(false)}>
            Show me later
          </ButtonSmall>
        </div>
      </FirstSreen>
    )
  }
  if (props.currentStep === 1) {
    content = (
      <DefaultDesign top="-70%" left="62%">
        <span onClick={() => props.setIsOpen(false)}>
          <Dashboard_TourCloseSvg />
        </span>
        <Dashboard_TourFileSvg />
        <span>2 out of 5</span>
        <span>Getting started - upload</span>
        <div>
          <span>
            You can upload a file to your saved profile, or use it to update
            your care plan.
          </span>
          <span>
            For example, you can tell Inclusive to "Summarize the attached file
            in a simple and straightforward way.”
          </span>
        </div>

        <div>
          <ButtonSmall
            goToDynamic={() => props.setCurrentStep(props.currentStep + 1)}
          >
            Next
          </ButtonSmall>
        </div>
      </DefaultDesign>
    )
  }
  if (props.currentStep === 2) {
    content = (
      <DefaultDesign top="-70%" left="62%">
        <span onClick={() => props.setIsOpen(false)}>
          <Dashboard_TourCloseSvg />
        </span>
        <Dashboard_TourSaveSvg />
        <span>2 out of 5</span>
        <span>Getting started - saved</span>
        <div>
          <span>
            Your recently saved resources will appear here for quick access. Add
            resources to a care plan at any time.
          </span>
        </div>

        <div>
          <ButtonSmall
            goToDynamic={() => props.setCurrentStep(props.currentStep + 1)}
          >
            Next
          </ButtonSmall>
        </div>
      </DefaultDesign>
    )
  }
  if (props.currentStep === 3) {
    content = (
      <DefaultDesign top="80%" left="70%">
        <span onClick={() => props.setIsOpen(false)}>
          <Dashboard_TourCloseSvg />
        </span>
        <Dashboard_TourChatSvg />
        <span>2 out of 5</span>
        <span>Getting started - chat</span>
        <div>
          <span>
            Use the chat feature to ask questions during the care plan creation
            process. You can also access the chat from the editor toolbar.
          </span>
          <span>
            For example, you can ask: "What is a speech language pathologist?”
          </span>
        </div>

        <div>
          <ButtonSmall
            goToDynamic={() => props.setCurrentStep(props.currentStep + 1)}
          >
            Next
          </ButtonSmall>
        </div>
      </DefaultDesign>
    )
  }
  if (props.currentStep === 4) {
    content = (
      <DefaultDesign top="330%" left="112%">
        <span onClick={() => props.setIsOpen(false)}>
          <Dashboard_TourCloseSvg />
        </span>
        <Dashboard_TourOptimize />
        <span>4 out of 5</span>
        <span>Getting started - optimize</span>
        <div>
          <span>
            Once a plan has been created, you can optimize  your plan based on
            factors such as private cost and functional behaviors.
          </span>
        </div>

        <div>
          <ButtonSmall
            goToDynamic={() => props.setCurrentStep(props.currentStep + 1)}
          >
            Next
          </ButtonSmall>
        </div>
      </DefaultDesign>
    )
  }
  return (
    <INDEX_D_TourIndividualWrapper>
      <span onClick={() => props.setIsOpen(false)}>
        <Dashboard_TourCloseSvg />
      </span>
      {content}
    </INDEX_D_TourIndividualWrapper>
  )
}
