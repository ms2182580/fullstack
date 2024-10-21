import { BackArrow } from "@/assets/icons"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { ReactElement, useMemo, useState } from "react"
import { SBSG_1 } from "./SBSG_1"
import { SBSG_2 } from "./SBSG_2"
import { SBSG_3 } from "./SBSG_3"
import { SBSG_4 } from "./SBSG_4"
import { SBSG_5 } from "./SBSG_5"
import { SBSG_Content } from "./SBSG_Content"
import { INDEX_D_CarePlan_StepByStepGuideWrapper } from "./styles/INDEX_D_CarePlan_StepByStepGuideWrapper"

type Component_Type = ReactElement

export type ComponentSteps_Type = {
  component: Component_Type
  props?: any
}[]

const componentSteps: ComponentSteps_Type = [
  {
    component: <SBSG_1 />,
  },
  {
    component: <SBSG_2 />,
  },
  {
    component: <SBSG_3 />,
  },
  {
    component: <SBSG_4 />,
  },
  {
    component: <SBSG_5 />,
  },
]

export type NameProfileSelected_Type = string | null

export const INDEX_D_CarePlan_StepByStepGuide = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNextStep = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (activeStep >= 0 && activeStep < componentSteps.length - 1) {
        return setActiveStep((prevState) => prevState + 1)
      }
    }
  }

  const handlePreviousStep = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (activeStep > 0 && activeStep <= componentSteps.length - 1) {
        return setActiveStep((prevState) => prevState - 1)
      }
    }
  }

  const { inputTagsLogicSBSG2 } = useCtxDataCreatePlan().SBSG2

  const { inputTagsLogicSBSG3 } = useCtxDataCreatePlan().SBSG3

  const shouldDisplaySkipButton = useMemo(() => {
    return activeStep === 2 || activeStep === 3
  }, [activeStep])

  return (
    <INDEX_D_CarePlan_StepByStepGuideWrapper>
      <header>
        {activeStep > 0 && (
          <span
            onClick={handlePreviousStep}
            onKeyDown={handlePreviousStep}
            tabIndex={0}
          >
            <BackArrow />
          </span>
        )}

        <progress
          max={componentSteps.length}
          value={activeStep + 1}
          aria-labelledby="progress bar"
        />
        <p>
          Step {activeStep + 1} from {componentSteps.length}
        </p>

        <section>
          <h4>Create Care Plan</h4>
          <button>Ask</button>
        </section>
      </header>

      <SBSG_Content
        componentSteps={componentSteps}
        activeStep={activeStep}
        handleNextStep={handleNextStep}
        shouldDisplaySkipButton={shouldDisplaySkipButton}
        tagsSBSG2={inputTagsLogicSBSG2.tags}
        removeTagSBSG2={inputTagsLogicSBSG2.removeTag}
        handleKeyDownSBSG2={inputTagsLogicSBSG2.handleKeyDown}
        handleSelectOptionSBSG2={inputTagsLogicSBSG2.handleSelectOption}
        dropdownElementsToSelectSBSG2={
          inputTagsLogicSBSG2.dropdownElementsToSelect
        }
        dropdownContainerStylesSBSG2={
          inputTagsLogicSBSG2.dropdownContainerStyles
        }
        tagsSBSG3={inputTagsLogicSBSG3.tags}
        removeTagSBSG3={inputTagsLogicSBSG3.removeTag}
        handleKeyDownSBSG3={inputTagsLogicSBSG3.handleKeyDown}
        handleSelectOptionSBSG3={inputTagsLogicSBSG3.handleSelectOption}
        dropdownElementsToSelectSBSG3={
          inputTagsLogicSBSG3.dropdownElementsToSelect
        }
        dropdownContainerStylesSBSG3={
          inputTagsLogicSBSG3.dropdownContainerStyles
        }
      />
    </INDEX_D_CarePlan_StepByStepGuideWrapper>
  )
}
