import { useRouter } from "next/router"
import { SearchSVG } from "../../../../assets/Icons"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { ButtonSmall } from "../../../ui/buttons/general"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_D_InputInsurance } from "./ST_D_InputInsurance"
import { ST_D_InputKeyword } from "./ST_D_InputKeyword"
import { ST_D_InputLocation } from "./ST_D_InputLocation"
import { ST_D_SearchComponentWrapper } from "./styles/ST_D_SearchComponentWrapper"

export const ST_D_SearchComponent = ({ toWhere = "undefined" }) => {
  const router = useRouter()
  const shouldTab = useShouldTab()

  return (
    <ST_D_SearchComponentWrapper>
      <ST_D_InputKeyword />
      <ST_D_InputLocation />
      <ST_D_InputInsurance />

      {toWhere === "SpeechTherapists" ? (
        <LinkNoStyle href={`${router.pathname}/${toWhere}`}>
          <ButtonSmall>
            <SearchSVG />
          </ButtonSmall>
        </LinkNoStyle>
      ) : toWhere === "no where" ? (
        <LinkNoStyle href="#">
          <ButtonSmall>
            <SearchSVG />
          </ButtonSmall>
        </LinkNoStyle>
      ) : (
        <LinkNoStyle
          href={`${router.pathname}`}
          tabIndex={shouldTab}>
          <ButtonSmall preventFocus={shouldTab}>
            <SearchSVG />
          </ButtonSmall>
        </LinkNoStyle>
      )}
    </ST_D_SearchComponentWrapper>
  )
}
