import { useRouter } from "next/router"
import { SearchSVG } from "../../../../assets/Icons"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { ButtonSmall } from "../../../ui/buttons/general"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { ORG_D_InputInsurance } from "./ORG_D_InputInsurance"
import { ORG_D_InputKeyword } from "./ORG_D_InputKeyword"
import { ORG_D_InputLocation } from "./ORG_D_InputLocation"
import { ORG_D_SearchComponentWrapper } from "./styles/ORG_D_SearchComponentWrapper"

export const ORG_D_SearchComponent = ({ toWhere = "undefined" }) => {
  const router = useRouter()
  const shouldTab = useShouldTab()

  return (
    <ORG_D_SearchComponentWrapper>
      <ORG_D_InputKeyword />
      <ORG_D_InputLocation />
      <ORG_D_InputInsurance />

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
    </ORG_D_SearchComponentWrapper>
  )
}
