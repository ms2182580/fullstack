import { useShouldTab } from "../../utils/ORG_shouldTab.js"
import { BtnMedium } from "../ui/buttons/general/styles/ButtonStyled.js"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles.js"
import { FooterSignupLoginButtonsWrapper } from "./styles/FooterSignupLoginButtonsWrapper.js"

export const FooterSignupLoginButtons = () => {
  
  // const { pathname } = useRouter()

  // const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  // const [shouldTab, setShouldTab] = useState(0)

  // useEffect(() => {
  //   if (ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists") {
  //     setShouldTab(-1)
  //   } else {
  //     setShouldTab(0)
  //   }
  // }, [ORGShowFullMapFilter])
  
  
  const shouldTab = useShouldTab()
  
  
  
  return (
    <FooterSignupLoginButtonsWrapper>
      <LinkNoStyle href="/signup" tabIndex={shouldTab}>
        <BtnMedium secondary tabIndex={shouldTab}>Sign up</BtnMedium>
      </LinkNoStyle>

      <LinkNoStyle href="/login" tabIndex={shouldTab}>
        <BtnMedium tabIndex={shouldTab}>Login</BtnMedium>
      </LinkNoStyle>
    </FooterSignupLoginButtonsWrapper>
  )
}
