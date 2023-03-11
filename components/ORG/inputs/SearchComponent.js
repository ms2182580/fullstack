import { useRouter } from "next/router"
import { SearchSVG } from "../../../assets/Icons"
import { ButtonSmall } from "../../ui/buttons/general"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { InputInsurance } from "./InputInsurance"
import { InputKeyword } from "./InputKeyword"
import { InputLocation } from "./InputLocation"
import SearchComponentWrapper from "./styles/SearchComponentWrapper"

const SearchComponent = ({ toWhere = "undefined", landingHere }) => {
  const router = useRouter()

  return (
    <>
      <SearchComponentWrapper landingHere={landingHere}>
        <InputKeyword />
        <InputLocation />
        <InputInsurance />

        {/* Final Button */}
        {toWhere === "SpeechTherapists" ? (
          <LinkNoStyle href={`${router.pathname}/${toWhere}`}>
            <ButtonSmall><SearchSVG/></ButtonSmall>
          </LinkNoStyle>
        ) : toWhere === "no where" ? (
          <LinkNoStyle href="#">
            <ButtonSmall><SearchSVG/></ButtonSmall>
          </LinkNoStyle>
        ) : (
          <LinkNoStyle href={`${router.pathname}`}>
            <ButtonSmall><SearchSVG/></ButtonSmall>
          </LinkNoStyle>
        )}
        
        
        
      </SearchComponentWrapper>
    </>
  )
}

export default SearchComponent
