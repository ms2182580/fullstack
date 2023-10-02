import { useRouter } from "next/router"
import { useState } from "react"
import { SearchSVG, WriteAReviewDisableSvg } from "../../../../../assets/Icons"
import { checkRouteThirdPage } from "../../../../../utils/ORG/checkRouteThirdPage"
import { useCheckBreadcrumbs } from "../../../../../utils/ORG/useCheckBreadcrumbs"
import { capitalizeWords } from "../../../../../utils/capitalizeWords"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_HeaderWrapper } from "./styles/ORG_D_Detail_HeaderWrapper"

export const ORG_D_Detail_Header = ({ thirdpageDataORG }) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  const [formattedActualRoute, setFormattedActualRoute] = useState(capitalizeWords(thirdpageDataORG.card.rightPart.thirdPageData.folderName))

  let { theURLFormatted } = checkRouteThirdPage(pathname)

  return (
    <ORG_D_Detail_HeaderWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, `${theURLFormatted}`],
          [`${formattedActualRoute}`, ""],
        ]}
      />

      <ul>
        <li>
          <H3>
            <a href="#About">About</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#Contact">Contact</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#Information">Information</a>
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

        <li>
          <div>
            <SearchSVG />
          </div>
        </li>

        <li>
          <div>
            {" "}
            <WriteAReviewDisableSvg />
            <P
              semibold
              light_gray>
              Write a review
            </P>
          </div>
        </li>
      </ul>
    </ORG_D_Detail_HeaderWrapper>
  )
}
