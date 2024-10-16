import { ShareSvg } from "@/assets/icons"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useEffect } from "react"
import { Editor_Header_Row1Wrapper } from "./styles/Editor_Header_Row1Wrapper"

const CAREPLANTITLE_PLACEHOLDER: string = "Untitled Document"

export const Editor_Header_Row1 = () => {
  const { stateProfileSelectedSBSG1, handleProfileSelectedSBSG1 } =
    useCtxDataCreatePlan().SBSG1

  const handleChange = (event) => {
    handleProfileSelectedSBSG1({ nameProfile: event.target.value })
  }

  useEffect(() => {
    if (
      stateProfileSelectedSBSG1 === null ||
      stateProfileSelectedSBSG1 === ""
    ) {
      handleProfileSelectedSBSG1({ nameProfile: CAREPLANTITLE_PLACEHOLDER })
    }
  }, [stateProfileSelectedSBSG1])

  const handleOnSelectCarePlanTitlePlaceholder = (event) => {
    if (stateProfileSelectedSBSG1 === CAREPLANTITLE_PLACEHOLDER) {
      event.target.select()
    }
  }

  return (
    <Editor_Header_Row1Wrapper>
      <span>
        <HomeSvg_Default />

        <input
          value={`${stateProfileSelectedSBSG1}` || ""}
          onChange={handleChange}
          onClick={handleOnSelectCarePlanTitlePlaceholder}
        />
      </span>
      <button>
        <ShareSvg /> Share
      </button>
    </Editor_Header_Row1Wrapper>
  )
}
