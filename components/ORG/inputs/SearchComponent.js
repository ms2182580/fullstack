import { useRouter } from "next/router"
import { SearchSVG } from "../../../assets/Icons"
import { useORG_CtxShowFiltersDesktop } from "../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ButtonSmall } from "../../ui/buttons/general"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { InputInsurance } from "./InputInsurance"
import { InputKeyword } from "./InputKeyword"
import { InputLocation } from "./InputLocation"
import SearchComponentWrapper from "./styles/SearchComponentWrapper"

export const SearchComponent = ({ toWhere = "undefined", landingHere }) => {
  const router = useRouter()
  
  
  const { showFullMapButton, ORGShowFullMapFilter, setShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

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
          <LinkNoStyle href={`${router.pathname}`}>
            <ButtonSmall>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        )}
      </SearchComponentWrapper>
    </>
  )
}

