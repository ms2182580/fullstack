import { useRouter } from "next/router"
import { ButtonSmall } from "../../../ui/buttons/general"
import { STSearchMobile_InputKeyword } from "./STSearchMobile_InputKeyword"
import { STSearchMobile_InputLocation } from "./STSearchMobile_InputLocation"
import {
  STSearchMobile_SearchComponentWrapper
} from "./styles/STSearchMobile_SearchComponentWrapper"

export const STSearchMobile_SearchComponent = ({ toWhere = "undefined" }) => {
  const router = useRouter()

  const handleRoute = () => {
    router.push(`${router.pathname}/SpeechTherapists`)
  }

  return (
    <STSearchMobile_SearchComponentWrapper>
      <STSearchMobile_InputKeyword />
      <STSearchMobile_InputLocation />

      <span onClick={handleRoute}>
        <ButtonSmall>
          Search
        </ButtonSmall>
      </span>
    </STSearchMobile_SearchComponentWrapper>
  )
}
