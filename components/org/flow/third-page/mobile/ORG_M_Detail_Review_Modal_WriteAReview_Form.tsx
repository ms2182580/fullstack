import { Checkbox } from "@/components/org/inputs/desktop/Checkbox"
import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper,
  ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES,
} from "./styles/ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper"
// import {
//   ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper,
//   ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES,
// } from "./styles/ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper"

const listOfCheckbox = ["A family member", "Myself", "A Client"]

export const enum CheckAllCheckbox_KEYS {
  INPUT_SELECTED = "INPUT_SELECTED",
  STATE_OF_INPUT = "STATE_OF_INPUT",
}

export const enum FieldsetClass {
  FIELDSET_FIRST_INPUT = "FIELDSET_FIRST_INPUT",
}

let toCheckCheckboxes = new Array(listOfCheckbox.length).fill(0).map(() => {
  return {
    [CheckAllCheckbox_KEYS.INPUT_SELECTED]: null,
    [CheckAllCheckbox_KEYS.STATE_OF_INPUT]: null,
  }
})
type IProps = {
  name: string
  lastName: string
}
export const ORG_M_Detail_Review_Modal_WriteAReview_Form = (props: IProps) => {
  const { name, lastName } = props
  const { query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // Handle form submission manually here
  }

  const [checkAllCheckbox, setCheckAllCheckbox] = useState(toCheckCheckboxes)
  const [checkAllCheckbox_PassCondition, setCheckAllCheckbox_PassCondition] =
    useState(false)

  useEffect(() => {
    const atLeastOneIsTrue = checkAllCheckbox.some(
      (x) => x[CheckAllCheckbox_KEYS.STATE_OF_INPUT] === true
    )
    setCheckAllCheckbox_PassCondition(atLeastOneIsTrue)
  }, [checkAllCheckbox])

  const [inputText, setInputText] = useState("")
  const [inputText_PassCondition, setInputText_PassCondition] = useState(false)

  let handleInputText = (e: any) => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    const atLeastHaveThreeCharacters = inputText.length >= 3
    setInputText_PassCondition(atLeastHaveThreeCharacters)
  }, [inputText])

  return (
    <ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper onSubmit={handleSubmit}>
      <div>
        <P semibold>About you</P>
      </div>
      <fieldset>
        <P>
          Add details to your review of{" "}
          <strong>
            {name} {lastName}
          </strong>
        </P>
        <label>
          <span>First name, Last intial</span>
          <input
            placeholder="John D. Lansbur"
            value={inputText}
            onChange={handleInputText}
            required
            className={FieldsetClass.FIELDSET_FIRST_INPUT}
          />
        </label>

        <label>
          <span>Diagonosis</span>
          <input
            placeholder="John D. Lansbur"
            value={inputText}
            onChange={handleInputText}
            required
            className={FieldsetClass.FIELDSET_FIRST_INPUT}
          />
        </label>
      </fieldset>

      <fieldset>
        <label>
          I used this resource for (Select all that apply)<span>*</span>
        </label>
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
      </fieldset>

      <fieldset>
        <label>
          Anything else to add about <strong>{titleFormatted}?</strong>
          <textarea placeholder="Ex: I used this resource for my daughter, they were fantastic... etc. " />
        </label>
      </fieldset>

      <button
        className={
          checkAllCheckbox_PassCondition && inputText_PassCondition
            ? ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES.CAN_SUBMIT
            : ""
        }
        tabIndex={
          checkAllCheckbox_PassCondition && inputText_PassCondition ? 0 : -1
        }
      >
        Post Review
      </button>
    </ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper>
  )
}
