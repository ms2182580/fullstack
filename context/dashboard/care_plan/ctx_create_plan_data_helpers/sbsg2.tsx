import {
  useInputTagsLogic,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG1 = {
  GOALS_OF_USER: `stateGoalsOfUser${NAME_COMPONENTS}2`,
  HANDLER_GOALS_OF_USER: `handleGoalsOfUser${NAME_COMPONENTS}2`,
} as const

type SBSG2Types = {
  [NAME_STATES_SBSG1.GOALS_OF_USER]: UseInputTagsLogic_Return["stateTagsExtractedToOutside"]
  [NAME_STATES_SBSG1.HANDLER_GOALS_OF_USER]: UseInputTagsLogic_Return["handleTagsExtracted"]
}

const useHooksSBSG2 = (): SBSG2Types => {
  const { stateTagsExtractedToOutside, handleTagsExtracted } =
    useInputTagsLogic()

  return {
    stateGoalsOfUserSBSG2: stateTagsExtractedToOutside,
    handleGoalsOfUserSBSG2: handleTagsExtracted,
  }
}

export const SBSG2Props = {
  name: `${NAME_COMPONENTS}2` as const,
  types: {} as SBSG2Types,
  hooks: useHooksSBSG2,
}
