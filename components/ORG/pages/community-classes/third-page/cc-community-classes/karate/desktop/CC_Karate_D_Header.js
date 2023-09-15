import { useRouter } from "next/router.js"
import { useState } from "react"
import { SearchSVG, WriteAReviewDisableSvg } from "../../../../../../../../assets/Icons/index.js"
import { checkRouteThirdPage } from "../../../../../../../../utils/ORG/checkRouteThirdPage.js"
import { useCheckBreadcrumbs } from "../../../../../../../../utils/ORG/useCheckBreadcrumbs.js"
import { capitalizeWords } from "../../../../../../../../utils/capitalizeWords.js"
import { Breadcrumbs_D } from "../../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { CC_Karate_D_HeaderWrapper } from "./styles/CC_Karate_D_HeaderWrapper.js"

export const CC_Karate_D_Header = ({ thirdpageDataORG }) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  const [formattedActualRoute, setFormattedActualRoute] = useState(capitalizeWords(thirdpageDataORG.card.rightPart.thirdPageData.folderName))

  let URLFormatted = checkRouteThirdPage(pathname)

  return (
    <CC_Karate_D_HeaderWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, `${URLFormatted}`],
          [`${formattedActualRoute}`, ""],
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
            <a href="#">Contact</a>
          </H3>
        </li>
        <li>
          <H3>
            <a href="#">Information</a>
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
    </CC_Karate_D_HeaderWrapper>
  )
}
