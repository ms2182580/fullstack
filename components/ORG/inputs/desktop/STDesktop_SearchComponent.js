import { useRouter } from "next/router"
import { SearchSVG } from "../../../../assets/Icons"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { ButtonSmall } from "../../../ui/buttons/general"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { STDesktop_InputInsurance } from "./STDesktop_InputInsurance"
import { STDesktop_InputKeyword } from "./STDesktop_InputKeyword"
import { STDesktop_InputLocation } from "./STDesktop_InputLocation"
import { STDesktop_SearchComponentWrapper } from "./styles/STDesktop_SearchComponentWrapper"

export const STDesktop_SearchComponent = ({ toWhere = "undefined" }) => {
  const router = useRouter()

  const shouldTab = useShouldTab()

  return (
    <>
      <STDesktop_SearchComponentWrapper>
        <STDesktop_InputKeyword />
        <STDesktop_InputLocation />
        <STDesktop_InputInsurance />

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
            tabIndex={shouldTab}
          >
            <ButtonSmall preventFocus={shouldTab}>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        )}
      </STDesktop_SearchComponentWrapper>
    </>
  )
}
