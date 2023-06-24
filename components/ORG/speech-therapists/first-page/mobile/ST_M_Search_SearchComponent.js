import { useRouter } from "next/router"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { ST_M_Search_InputKeyword } from "./ST_M_Search_InputKeyword"
import { ST_M_Search_InputLocation } from "./ST_M_Search_InputLocation"
import {
  ST_M_Search_SearchComponentWrapper
} from "./styles/ST_M_Search_SearchComponentWrapper"

export const ST_M_Search_SearchComponent = () => {
  const router = useRouter()

  const handleRoute = () => {
    router.push(`${router.pathname}/SpeechTherapists`)
  }

  return (
    <ST_M_Search_SearchComponentWrapper>
      <ST_M_Search_InputKeyword />
      <ST_M_Search_InputLocation />

      <span onClick={handleRoute}>
        <ButtonSmall>
          Search
        </ButtonSmall>
      </span>
    </ST_M_Search_SearchComponentWrapper>
  )
}
