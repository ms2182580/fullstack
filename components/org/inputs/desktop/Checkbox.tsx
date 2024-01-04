import { useState } from "react"
import { CheckAllCheckbox_KEYS } from "../../cards/third-page/desktop/ORG_D_Detail_Review_Modal_WriteAReview_Form"
import { CheckboxWrapper } from "./styles/CheckboxWrapper"

export const Checkbox = ({ label, checked = false, setCheckAllCheckbox, index, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)
  // console.log("isChecked:", isChecked, index)

  let handleOnChange = () => {
    setIsChecked((prevState) => !prevState)

    setCheckAllCheckbox((prevState) => {
      const updatedCheckboxes = [...prevState]
      updatedCheckboxes[index] = {
        [CheckAllCheckbox_KEYS.INPUT_SELECTED]: index,
        [CheckAllCheckbox_KEYS.STATE_OF_INPUT]: !isChecked,
      }
      return updatedCheckboxes
    })
  }

  return (
    <CheckboxWrapper>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          className={isChecked ? "CHECKED" : ""}
          {...props}
        />
        <span>{label}</span>
      </label>
    </CheckboxWrapper>
  )
}
