import { ShareSvg } from "@/assets/icons"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { getDate } from "@/utils/getDate"
import { useEffect, useState } from "react"
import { Editor_Header_Row1Wrapper } from "./styles/Editor_Header_Row1Wrapper"

const CAREPLANTITLE_PLACEHOLDER = "Untitled Document"

const INPUT_WIDTH_CONST = {
  MIN: CAREPLANTITLE_PLACEHOLDER.length,
}

export const Editor_Header_Row1 = () => {
  const [inputWidth, setInputWidth] = useState(INPUT_WIDTH_CONST.MIN)

  const {
    stateProfileSelectedSBSG1,
    handleProfileSelectedSBSG1,
    handleNoProfileSelectedSBSG1,
  } = useCtxDataCreatePlan().SBSG1

  const handleChange = (event) => {
    const newValue = event.target.value

    handleProfileSelectedSBSG1({ nameProfile: newValue })
  }

  useEffect(() => {
    if (
      stateProfileSelectedSBSG1 === null ||
      stateProfileSelectedSBSG1 === "" ||
      stateProfileSelectedSBSG1 === CAREPLANTITLE_PLACEHOLDER
    ) {
      handleNoProfileSelectedSBSG1()
      setInputWidth(INPUT_WIDTH_CONST.MIN + 185)
    } else {
      const theNewValue = (stateProfileSelectedSBSG1.length + 2) * 10
      setInputWidth(theNewValue)
    }
  }, [stateProfileSelectedSBSG1, handleNoProfileSelectedSBSG1])

  const handleOnSelectCarePlanTitlePlaceholder = (event) => {
    if (event.target.value === CAREPLANTITLE_PLACEHOLDER) {
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
            style={{
              width: `${inputWidth}px`,
            }}
            value={stateProfileSelectedSBSG1 || CAREPLANTITLE_PLACEHOLDER}
            onChange={handleChange}
            onClick={handleOnSelectCarePlanTitlePlaceholder}
          />
          <p>— {`${month} ${day}${daySuffix}, ${year}`}</p>
        </span>
      </header>
      <button>
        <ShareSvg /> Share
      </button>
    </Editor_Header_Row1Wrapper>
  )
}
