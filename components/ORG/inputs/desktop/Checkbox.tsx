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

/* 
!FH0
ASK TO CHATGPT

F: https://www.figma.com/file/lpHBroZRY7imHzHhMm1gAb/Regenesis-for-August%2C-2023-Launch?type=design&node-id=3414-29023&mode=dev


 */

/* 




In TypeScript with React:

«
export const ORG_D_Detail_Review_Modal_WriteAReview_Form = () => {
  const [checkAllCheckbox, setCheckAllCheckbox] = useState([])

  return (
    <>
      <ul>
        {listOfCheckbox.map((x, index) => (
          <li key={x}>
            <Checkbox
              label={x}
              setCheckAllCheckbox={setCheckAllCheckbox}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export const Checkbox = ({ label, checked = false, setCheckAllCheckbox, index, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)

  let handleOnChange = () => {
    setIsChecked((prevState) => !prevState)
    setCheckAllCheckbox()
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
»

How can I update the setCheckAllCheckbox dispatch to have this structure:

«
[
  {
    inputSelected: //number here,
    stateOfInput: //FALSE or TRUE
  }
]
»

Think step by step

*/
