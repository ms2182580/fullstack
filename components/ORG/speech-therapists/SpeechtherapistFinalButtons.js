import { LeftArrowSvg, RightArrowSvg } from "../../../assets/Icons/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import {
  NextButton,
  PrevButton,
  SpeechtherapistFinalButtonsWrapper
} from "./styles/SpeechtherapistFinalButtonsWrapper.js"
import { NavigationButtonsNumbers } from "./NavigationButtonsNumbers.js"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles.js"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider.js"

export const SpeechtherapistFinalButtons = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })

  }

  return (
    <SpeechtherapistFinalButtonsWrapper>
      {pagination === 1 ? (
        <PrevButton onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </PrevButton>
      ) : (
        <LinkNoStyle href="#topOfSTL">
          <PrevButton onClick={() => toPrevious()}>
            <LeftArrowSvg />
            <P bold>Previous</P>
          </PrevButton>
        </LinkNoStyle>
      )}

      <NavigationButtonsNumbers />

      <LinkNoStyle href="#topOfSTL">
        <NextButton onClick={() => setPagination(pagination + 1)}>
          <P bold>Next</P>
          <RightArrowSvg />
        </NextButton>
      </LinkNoStyle>
    </SpeechtherapistFinalButtonsWrapper>
  )
}
