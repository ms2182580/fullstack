import { BackArrow } from "@/assets/icons"
import { ReactElement, useState } from "react"
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

  const [nameProfileSelected, setNameProfileSelected] =
    useState<NameProfileSelected_Type>(null)

  const handleNameProfileSelected = ({ e, nameProfile }) => {
    if (e.type === "click" || e.key === "Enter") {
      setNameProfileSelected(nameProfile)
    }
  }

  const handleNoProfileSelected = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setNameProfileSelected(null)
    }
  }

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
        nameProfileSelected={nameProfileSelected}
        handleNameProfileSelected={handleNameProfileSelected}
        handleNoProfileSelected={handleNoProfileSelected}
      />
    </INDEX_D_CarePlan_StepByStepGuideWrapper>
  )
}
