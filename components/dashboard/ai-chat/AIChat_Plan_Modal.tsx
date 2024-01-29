import {
  Dashboard_AIChat_CheckedSquareSvg,
  Dashboard_AIChat_NoCheckSquareSvg,
  Dashboard_AIChat_PlanAttechmentSvg,
  Dashboard_AIChat_PlanModalCloseSvg,
} from "@/assets/icons"
import { AIChat_Plan_ModalWrapper } from "./styles/AIChat_Plan_ModalWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { useState } from "react"

export const AIChat_Plan_Modal = ({ showModalToggle }) => {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const handleChange2 = () => {
    setChecked2(!checked2)
  }

  const handleChange1 = () => {
    setChecked1(!checked1)
  }

  return (
    <AIChat_Plan_ModalWrapper>
      <div>
        <span>
          <span>Which care plan would you like to add this chat to?</span>
          <Dashboard_AIChat_PlanModalCloseSvg onClick={showModalToggle} />
        </span>
        <div>
          <span>
            {checked1 ? (
              <Dashboard_AIChat_NoCheckSquareSvg onClick={handleChange1} />
            ) : (
              <Dashboard_AIChat_CheckedSquareSvg onClick={handleChange1} />
            )}

            <label>
              <Dashboard_AIChat_PlanAttechmentSvg /> <span>Care Plan Name</span>
            </label>
          </span>
          <span>
            {checked2 ? (
              <Dashboard_AIChat_NoCheckSquareSvg onClick={handleChange2} />
            ) : (
              <Dashboard_AIChat_CheckedSquareSvg onClick={handleChange2} />
            )}
            <label>
              <Dashboard_AIChat_PlanAttechmentSvg />
              <span> Care Plan Name</span>
            </label>
          </span>
          <span>
            <ButtonSmall goToDynamic={showModalToggle}>
              Save to Care Plan
            </ButtonSmall>
            <ButtonSmall goToDynamic={showModalToggle}>
              Create new Plan
            </ButtonSmall>
          </span>
        </div>
      </div>
    </AIChat_Plan_ModalWrapper>
  )
}
