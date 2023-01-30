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
import { useEffect, useState } from "react"

export const SpeechtherapistFinalButtons = ({ widthWindow }) => {
  const [isMobile, setIsMobile] = useState(false)
  console.log('isMobile:', isMobile)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }
  
  useEffect(() => {
    if(widthWindow <= 768){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    
  
  },[widthWindow])

  return (
    <SpeechtherapistFinalButtonsWrapper isMobile={isMobile}>
      {pagination === 1 ? (
        <PrevButton onClick={() => toPrevious()}  isMobile={isMobile}>
          {isMobile === false ? (
            <>
              <LeftArrowSvg />
              <P bold>Previous</P>
            </>
          ) : (
            <>
              <LeftArrowSvg />
            </>
          )}
        </PrevButton>
      ) : (
        <LinkNoStyle href="#topOfSTL">
          <PrevButton onClick={() => toPrevious()} isMobile={isMobile}>
          {isMobile === false ? (
            <>
              <LeftArrowSvg />
              <P bold>Previous</P>
            </>
          ) : (
            <>
              <LeftArrowSvg />
            </>
          )}
          </PrevButton>
        </LinkNoStyle>
      )}

      <NavigationButtonsNumbers />

      <LinkNoStyle href="#topOfSTL">
        <NextButton onClick={() => setPagination(pagination + 1)} isMobile={isMobile}>
        {isMobile === false? (
            <>
              <P bold>Previous</P>
              <RightArrowSvg />
            </>
          ) : (
            <>
              <RightArrowSvg />
            </>
          )}
        </NextButton>
      </LinkNoStyle>
    </SpeechtherapistFinalButtonsWrapper>
  )
}
