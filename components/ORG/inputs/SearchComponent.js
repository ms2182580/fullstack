import { useRouter } from "next/router"
import { SearchSVG } from "../../../assets/Icons"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { ButtonSmall } from "../../ui/buttons/general"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { InputInsurance } from "./InputInsurance"
import { InputKeyword } from "./InputKeyword"
import { InputLocation } from "./InputLocation"
import SearchComponentWrapper from "./styles/SearchComponentWrapper"

export const SearchComponent = ({ toWhere = "undefined", landingHere }) => {
  const router = useRouter()

  const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  const shouldTab = useShouldTab()

  const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFilters()

  // const handleFetch = () => {
  //   setShouldFetchDesktopNoFilters(true)
  // }

  return (
    <>
      <SearchComponentWrapper landingHere={landingHere}>
        <InputKeyword />
        <InputLocation />
        <InputInsurance />

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
          // onClick={handleFetch}
          >
            <ButtonSmall preventFocus={shouldTab}>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        )}
      </SearchComponentWrapper>
    </>
  )
}
