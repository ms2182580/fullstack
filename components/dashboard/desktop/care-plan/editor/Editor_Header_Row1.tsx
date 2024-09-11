import { ShareSvg } from "@/assets/icons"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import { useEffect, useState } from "react"
import { Editor_Header_Row1Wrapper } from "./styles/Editor_Header_Row1Wrapper"

const CAREPLANTITLE_PLACEHOLDER: string =
  "▀▄ Placeholder: my care plan title here ▄▀"

export const Editor_Header_Row1 = () => {
  const [carePlanTitle, setCarePlanTitle] = useState("Kahlil’s Care Plan")

  const handleChange = (event) => {
    setCarePlanTitle(event.target.value)
  }

  useEffect(() => {
    if (carePlanTitle === "") {
      setCarePlanTitle(CAREPLANTITLE_PLACEHOLDER)
    }
  }, [carePlanTitle])

  const handleOnSelectCarePlanTitlePlaceholder = (event) => {
    if (carePlanTitle === CAREPLANTITLE_PLACEHOLDER) {
      event.target.select()
    }
  }

  return (
    <Editor_Header_Row1Wrapper>
      <span>
        <HomeSvg_Default />

        <input
          value={carePlanTitle}
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
