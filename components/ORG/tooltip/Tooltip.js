import { QuestionTooltip_STSvg } from "../../../assets/Icons"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { TooltipWrapper } from './styles/TooltipWrapper.js'


export const Tooltip = ({ isThirdPage = false }) => {
  const { isMobile } = useWidthWindow1024()

  return (
    <TooltipWrapper>
      {isMobile === false ? (
        <H3>Speech Language Pathologist</H3>
      ) : (
        <span>
          <Caption>Speech Language Pathologist,</Caption>

          <Caption> CCC-SLP</Caption>
        </span>
      )}

      {isMobile === false ? null : (
        <>
          <span>
            <QuestionTooltip_STSvg />
            <span>
              {isThirdPage === false ? (
                <>
                  <H4>
                    <span>CCC-SLP</span>
                  </H4>
                </>
              ) : (
                <>
                  <H3>CCC-SLP</H3>
                </>
              )}

              {isThirdPage === false ? (
                <>
                  <P>Certificate of Clinical Competence in Speech Language pathology</P>
                  <P>- Nationally recognized professional from the American Speech-</P>
                  <P>Language-Hearing Association (ASHA).</P>
                </>
              ) : (
                <>
                  <P>Certificate of Clinical</P>
                  <P>Competence in Speech</P>
                  <P>Language pathology -</P>
                  <P>Nationally recognized</P>
                  <P>professional from the</P>
                  <P>American Speech-Language-</P>
                  <P>Hearing Association (ASHA).</P>
                </>
              )}
            </span>
          </span>
        </>
      )}
    </TooltipWrapper>
  )
}
