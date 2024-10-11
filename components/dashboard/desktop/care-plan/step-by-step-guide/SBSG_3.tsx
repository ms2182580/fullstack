import {
  DropdownElementsToSelect_Type,
  InputTags,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { DropdownWrapper_Props } from "@/components/ui/input/styles/InputTagsWrapper"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-data-create-plan"
import { SBSG3_EditableData } from "./sbsg_3-editable-data"
import { SBSG_3Wrapper } from "./styles/SBSG_3Wrapper"

/* 
!FH0
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8354&t=uxkQcuqhgTnPrbHv-4
*/

type Props = {
  dropdownElementsToSelectSBSG3?: DropdownElementsToSelect_Type
  dropdownContainerStylesSBSG3?: DropdownWrapper_Props["dropdownStyles"]
}

type UseInputTagsLogic_ReturnSBSG3 = {
  tagsSBSG3: UseInputTagsLogic_Return["tags"]
  removeTagSBSG3: UseInputTagsLogic_Return["removeTag"]
  handleKeyDownSBSG3: UseInputTagsLogic_Return["handleKeyDown"]
  handleSelectOptionSBSG3: UseInputTagsLogic_Return["handleSelectOption"]
}

export const SBSG_3 = ({
  dropdownElementsToSelectSBSG3,
  dropdownContainerStylesSBSG3,
  ...restOfProps
}: Props) => {
  const {
    tagsSBSG3,
    removeTagSBSG3,
    handleSelectOptionSBSG3,
    handleKeyDownSBSG3,
  } = restOfProps as UseInputTagsLogic_ReturnSBSG3

  const { stateEditableDataSBSG3 } = useCtxDataCreatePlan()

  return (
    <SBSG_3Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>What services are you looking for? </p>
      <p>Enter resources, separating each one with enter key</p>

      <InputTags
        tags={tagsSBSG3}
        removeTag={removeTagSBSG3}
        handleKeyDown={handleKeyDownSBSG3}
        handleSelectOption={handleSelectOptionSBSG3}
        dropdownElementsToSelect={dropdownElementsToSelectSBSG3}
        dropdownContainerStyles={dropdownContainerStylesSBSG3}
      />

      <ul>
        {stateEditableDataSBSG3.map(({ label, defaultValue, icon }, index) => {
          return (
            <SBSG3_EditableData
              key={`${label}_${index}`}
              label={label}
              defaultValue={defaultValue}
              icon={icon}
            />
          )
        })}
      </ul>
    </SBSG_3Wrapper>
  )
}
