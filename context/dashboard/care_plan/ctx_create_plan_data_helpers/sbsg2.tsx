import { useState } from "react"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG1 = {
  GOALS_OF_USER: `stateGoalsOfUser${NAME_COMPONENTS}2`,
  HANDLER_GOALS_OF_USER: `handleGoalsOfUser${NAME_COMPONENTS}2`,
} as const

type SBSG2Types = {
  [NAME_STATES_SBSG1.GOALS_OF_USER]: any
  [NAME_STATES_SBSG1.HANDLER_GOALS_OF_USER]: (
    allGoalsSelected: { value: string; comesFromSuggestions: boolean }[]
  ) => void
}

const useHooksSBSG2 = () => {
  const [goalsOfUser, setGoalsOfUser] = useState(null)

  const handleGoalsOfUser = (allGoalsSelected) => {
    setGoalsOfUser(allGoalsSelected)
  }

  return {
    goalsOfUser,
    handleGoalsOfUser,
  }
}

export const SBSG2Props = {
  name: `${NAME_COMPONENTS}2` as const,
  types: {} as SBSG2Types,
  hooks: useHooksSBSG2,
}
