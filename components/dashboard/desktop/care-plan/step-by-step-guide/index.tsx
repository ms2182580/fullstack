import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { BackArrow } from "@/assets/icons"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import {
  DropdownElementsToSelect_Type,
  useInputTagsLogic,
} from "@/components/ui/input/input-tags"
import { CtxCreatePlanData_Provider } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { ReactElement, useMemo, useState } from "react"
import { css } from "styled-components"
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

  const {
    tags: tagsSBSG2,
    handleKeyDown: handleKeyDownSBSG2,
    handleSelectOption: handleSelectOptionSBSG2,
    removeTag: removeTagSBSG2,
  } = useInputTagsLogic()

  const dropdownElementsCSS = () => css`
    color: ${PRIMARY.PRIMARY_CTA};
    font-weight: 500;

    width: fit-content;
    cursor: default;

    display: grid;

    &::first-letter {
      text-transform: capitalize;
    }
  `

  const dropdownContainerStyles = () => css`
    background-color: ${NEUTRALS.OFF_WHITE_2};
    margin-top: 24px;

    padding: 12px 8px;

    border-radius: 8px;

    display: grid;
    gap: 16px;

    & > li {
      & > span {
        display: flex;
        gap: 10px;

        font-weight: 400;
        color: ${PRIMARY.LIGHT_MAROON};

        & > span {
          text-transform: lowercase;

          &::first-letter {
            text-transform: capitalize;
          }
        }

        &:is(:hover, :focus-visible) {
          filter: unset;
        }
      }
    }
  `
  const dropdownElementsToSelectSBSG2: DropdownElementsToSelect_Type = [
    {
      value: (
        <span>
          <ThunderSVG /> <span>Quick Picks:</span>
        </span>
      ),
      shouldBeSelected: false,
    },
    {
      value: "Make new friends",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Play on a sport team",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Improve mobility",
      elementStyles: dropdownElementsCSS,
    },
  ]

  const SBSG2Props = {
    nameProfileSelected: {
      state: nameProfileSelected,
      setState: {
        selectedProfile: handleNameProfileSelected,
        noProfileSelected: handleNoProfileSelected,
      },
    },
    inputTagLogic: {
      tags: tagsSBSG2,
      removeTag: removeTagSBSG2,
      handleKeyDown: handleKeyDownSBSG2,
      handleSelectOption: handleSelectOptionSBSG2,
      dropdownElementsToSelectSBSG2,
      dropdownContainerStyles,
    },
  }

  const {
    tags: tagsSBSG3,
    handleKeyDown: handleKeyDownSBSG3,
    handleSelectOption: handleSelectOptionSBSG3,
    removeTag: removeTagSBSG3,
  } = useInputTagsLogic()

  const dropdownElementsToSelectSBSG3: DropdownElementsToSelect_Type = [
    {
      value: (
        <span>
          <ThunderSVG /> <span>Quick Picks:</span>
        </span>
      ),
      shouldBeSelected: false,
    },
    {
      value: "Day camps",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Mobility aids",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Physical therapy",
      elementStyles: dropdownElementsCSS,
    },
  ]

  const shouldDisplaySkipButton = useMemo(() => {
    return activeStep === 2 || activeStep === 3
  }, [activeStep])

  const SBSG3Props = {
    inputTagLogic: {
      tags: tagsSBSG3,
      removeTag: removeTagSBSG3,
      handleKeyDown: handleKeyDownSBSG3,
      handleSelectOption: handleSelectOptionSBSG3,
      dropdownElementsToSelectSBSG3,
      dropdownContainerStyles,
    },
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

      <CtxCreatePlanData_Provider>
        <SBSG_Content
          componentSteps={componentSteps}
          activeStep={activeStep}
          handleNextStep={handleNextStep}
          shouldDisplaySkipButton={shouldDisplaySkipButton}
          nameProfileSelected={SBSG2Props.nameProfileSelected.state}
          handleNameProfileSelected={
            SBSG2Props.nameProfileSelected.setState.selectedProfile
          }
          handleNoProfileSelected={
            SBSG2Props.nameProfileSelected.setState.noProfileSelected
          }
          tagsSBSG2={SBSG2Props.inputTagLogic.tags}
          removeTagSBSG2={SBSG2Props.inputTagLogic.removeTag}
          handleKeyDownSBSG2={SBSG2Props.inputTagLogic.handleKeyDown}
          handleSelectOptionSBSG2={SBSG2Props.inputTagLogic.handleSelectOption}
          dropdownElementsToSelectSBSG2={
            SBSG2Props.inputTagLogic.dropdownElementsToSelectSBSG2
          }
          dropdownContainerStylesSBSG2={
            SBSG2Props.inputTagLogic.dropdownContainerStyles
          }
          tagsSBSG3={SBSG3Props.inputTagLogic.tags}
          removeTagSBSG3={SBSG3Props.inputTagLogic.removeTag}
          handleKeyDownSBSG3={SBSG3Props.inputTagLogic.handleKeyDown}
          handleSelectOptionSBSG3={SBSG3Props.inputTagLogic.handleSelectOption}
          dropdownElementsToSelectSBSG3={
            SBSG3Props.inputTagLogic.dropdownElementsToSelectSBSG3
          }
          dropdownContainerStylesSBSG3={
            SBSG3Props.inputTagLogic.dropdownContainerStyles
          }
        />
      </CtxCreatePlanData_Provider>
    </INDEX_D_CarePlan_StepByStepGuideWrapper>
  )
}
