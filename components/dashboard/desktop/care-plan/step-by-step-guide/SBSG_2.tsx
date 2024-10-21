import { InputTags } from "@/components/ui/input/input-tags"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

export const SBSG_2 = () => {
  const { stateProfileSelectedSBSG1 } = useCtxDataCreatePlan().SBSG1
  const { inputTagsLogicSBSG2 } = useCtxDataCreatePlan().SBSG2

  return (
    <SBSG_2Wrapper>
      <header>
        <h5>Goals</h5>
      </header>

      {stateProfileSelectedSBSG1 ? (
        <p>
          I’d like to <span>{stateProfileSelectedSBSG1}</span> to work on these
          goals:
        </p>
      ) : (
        <p>I’d like to work on these goals:</p>
      )}
      <InputTags
        tags={inputTagsLogicSBSG2.tags}
        removeTag={inputTagsLogicSBSG2.removeTag}
        handleKeyDown={inputTagsLogicSBSG2.handleKeyDown}
        handleSelectOption={inputTagsLogicSBSG2.handleSelectOption}
        dropdownElementsToSelect={inputTagsLogicSBSG2.dropdownElementsToSelect}
        dropdownContainerStyles={inputTagsLogicSBSG2.dropdownContainerStyles}
        handleTagsExtracted={inputTagsLogicSBSG2.handleTagsExtracted}
      />
    </SBSG_2Wrapper>
  )
}
