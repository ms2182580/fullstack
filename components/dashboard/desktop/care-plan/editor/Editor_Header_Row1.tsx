import { ShareSvg } from "@/assets/icons"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { getDate } from "@/utils/getDate"
import { useEffect, useState } from "react"
import { Editor_Header_Row1Wrapper } from "./styles/Editor_Header_Row1Wrapper"

const CAREPLANTITLE_PLACEHOLDER = "Untitled Document"

export const Editor_Header_Row1 = () => {
  const {
    stateProfileSelectedSBSG1,
    handleProfileSelectedSBSG1,
    handleNoProfileSelectedSBSG1,
  } = useCtxDataCreatePlan().SBSG1

  const handleChange = (event) => {
    handleProfileSelectedSBSG1({ nameProfile: event.target.value })
  }

  const [shouldDisplayPlaceholder, setShouldDisplayPlaceholder] =
    useState(false)

  useEffect(() => {
    if (
      stateProfileSelectedSBSG1 === null ||
      stateProfileSelectedSBSG1 === "" ||
      stateProfileSelectedSBSG1 === CAREPLANTITLE_PLACEHOLDER
    ) {
      handleNoProfileSelectedSBSG1()
      setShouldDisplayPlaceholder(true)
    } else {
      setShouldDisplayPlaceholder(false)
    }
  }, [stateProfileSelectedSBSG1])

  const handleOnSelectCarePlanTitlePlaceholder = (event) => {
    if (stateProfileSelectedSBSG1 === CAREPLANTITLE_PLACEHOLDER) {
      event.target.select()
    }
  }

  const { month, day, daySuffix, year } = getDate()

  return (
    <Editor_Header_Row1Wrapper>
      <header>
        <HomeSvg_Default />

        <span>
          <input
            value={
              shouldDisplayPlaceholder
                ? CAREPLANTITLE_PLACEHOLDER
                : `${stateProfileSelectedSBSG1}`
            }
            onChange={handleChange}
            onClick={handleOnSelectCarePlanTitlePlaceholder}
          />
          <p>Document created: {`${month} ${day}${daySuffix}, ${year}`}</p>
        </span>
      </header>
      <button>
        <ShareSvg /> Share
      </button>
    </Editor_Header_Row1Wrapper>
  )
}
