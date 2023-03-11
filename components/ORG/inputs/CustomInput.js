import { useRouter } from "next/router"
import { ButtonSmall } from "../../ui/buttons/general"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { InputInsurance } from "./InputInsurance"
import { InputKeyword } from "./InputKeyword"
import { InputLocation } from "./InputLocation"
import SearchComponentWrapper from "./styles/SearchComponentWrapper"

const CustomInput = ({ toWhere = "undefined", landingHere }) => {
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
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        ) : toWhere === "no where" ? (
          <LinkNoStyle href="#">
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        ) : (
          <LinkNoStyle href={`${router.pathname}`}>
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        )}
      </SearchComponentWrapper>
    </>
  )
}

export default CustomInput
