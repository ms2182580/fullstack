import { InputTags } from "@/components/ui/input/input-tags"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { SBSG3_EditableData } from "./sbsg_3-editable-data"
import { SBSG_3Wrapper } from "./styles/SBSG_3Wrapper"

export const SBSG_3 = () => {
  const { stateEditableDataSBSG3, inputTagsLogicSBSG3 } =
    useCtxDataCreatePlan().SBSG3

  return (
    <SBSG_3Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>What services are you looking for? </p>
      <p>Enter resources, separating each one with enter key</p>

      <InputTags
        tags={inputTagsLogicSBSG3.tags}
        removeTag={inputTagsLogicSBSG3.removeTag}
        handleKeyDown={inputTagsLogicSBSG3.handleKeyDown}
        handleSelectOption={inputTagsLogicSBSG3.handleSelectOption}
        dropdownElementsToSelect={inputTagsLogicSBSG3.dropdownElementsToSelect}
        dropdownContainerStyles={inputTagsLogicSBSG3.dropdownContainerStyles}
        handleTagsExtracted={inputTagsLogicSBSG3.handleTagsExtracted}
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
