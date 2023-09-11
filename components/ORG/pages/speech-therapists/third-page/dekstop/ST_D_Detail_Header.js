import { BackArrow } from '../../../../../../assets/Icons'
import { LinkNoStyle } from '../../../../../../components/ui/hyperlink/HyperlinkNoStyles'
import { Breadcrumbs_D } from '../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts'
import { H3 } from '../../../../../ui/heading_body_text/HeaderFonts'
import { ST_D_Detail_HeaderWrapper } from "./styles/ST_D_Detail_HeaderWrapper"

export const ST_D_Detail_Header = ({ STData }) => {
  // const { keywordsContext, citiesContext, setKeywordsContext, setCitiesContext } = useORG_InputCtx()

  return (
    <ST_D_Detail_HeaderWrapper>
      <span>
        <LinkNoStyle href="/ORG/speech-therapists">
          <BackArrow /> <P semibold>Back</P>
        </LinkNoStyle>
      </span>{" "}
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", "ORG/speech-therapists"],
          [`${STData.data[0].name.first} ${STData.data[0].name.last}`, ""]
        ]}
      />
      <ul>
        <li>
          <H3>
            <a href="#">About</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#">Location</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#Appointments">Appointments</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#Reviews">Reviews</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#FAQs">FAQs</a>
          </H3>
        </li>
      </ul>
    </ST_D_Detail_HeaderWrapper>
  )
}
