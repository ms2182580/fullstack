import { ShareSvg } from "@/assets/icons"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useEffect } from "react"
import { Editor_Header_Row1Wrapper } from "./styles/Editor_Header_Row1Wrapper"

const CAREPLANTITLE_PLACEHOLDER = "Untitled Document"

export const Editor_Header_Row1 = () => {
  const { stateProfileSelectedSBSG1, handleProfileSelectedSBSG1 } =
    useCtxDataCreatePlan().SBSG1

  const handleChange = (event) => {
    /* 
    !FH0
    Limit the ammount of character to 100
    */
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
          /* 
          !FH0
          Add onBlur:
            * date of creation of the document: today
            * `{name_of_the_user} — care plan {today_date}`
          */
        />
      </span>
      <button>
        <ShareSvg /> Share
      </button>
    </Editor_Header_Row1Wrapper>
  )
}
