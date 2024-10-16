import { useState } from "react"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG1 = {
  STATE_PROFILE_SELECTED: `stateProfileSelected${NAME_COMPONENTS}1`,
  HANDLER_PROFILE_SELECTED: `handleProfileSelected${NAME_COMPONENTS}1`,
  HANDLER_NO_PROFILE_SELECTED: `handleNoProfileSelected${NAME_COMPONENTS}1`,
} as const

type NameProfileSelected_Type = string | null | ""

type SBSG1Types = {
  [NAME_STATES_SBSG1.STATE_PROFILE_SELECTED]: NameProfileSelected_Type
  [NAME_STATES_SBSG1.HANDLER_PROFILE_SELECTED]: ({
    nameProfile,
  }: {
    nameProfile: NameProfileSelected_Type
  }) => void
  [NAME_STATES_SBSG1.HANDLER_NO_PROFILE_SELECTED]: () => void
}

const useHooksSBSG1 = () => {
  const [nameProfileSelected, setNameProfileSelected] =
    useState<NameProfileSelected_Type>(null)

  const handleNameProfileSelected = ({ nameProfile }) => {
    setNameProfileSelected(nameProfile)
  }

  const handleNoProfileSelected = () => {
    setNameProfileSelected(null)
  }

  return {
    nameProfileSelected,
    handleNameProfileSelected,
    handleNoProfileSelected,
  }
}

export const SBSG1Props = {
  name: `${NAME_COMPONENTS}1` as const,
  types: {} as SBSG1Types,
  hooks: useHooksSBSG1,
}
