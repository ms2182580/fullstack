import { Fragment } from "react"
import { GetServicePlan3, ORG_D_Search_CarePlanSvg, ORG_Detail_SearchFAQSSVG } from "../../../assets/Icons/index"

import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Home_GetServicePlan_Cards_D } from "./Home_GetServicePlan_Cards_D"
import { Home_GetServicePlan_DWrapper } from "./styles/Home_GetServicePlan_DWrapper.js"

const DATA_CARD = [
  {
    icon: <ORG_Detail_SearchFAQSSVG />,
    title: "Find Providers",
    subtitle: "Search for providers around the globe. ",
    lastButtonText: "Search",
    toWhere: "ORG"
  },
  {
    icon: <ORG_D_Search_CarePlanSvg />,
    title: "Pick a setting",
    subtitle: "Where do you want care? Home? Clinic?",
    lastButtonText: "Tell us ",
    toWhere: "#"
  },
  {
    icon: <GetServicePlan3 />,
    title: "Get your plan",
    subtitle: "See your care plan in seconds!",
    lastButtonText: "See sample",
    toWhere: "#"
  },
]

export const Home_GetServicePlan_D = () => {
  return (
    <Home_GetServicePlan_DWrapper>
      <H2 bold>Get a service plan in 3 steps</H2>

      <div>
        {DATA_CARD.map((xDATA_CARD, index) => (
          <Fragment key={`${xDATA_CARD.title}`}>
            <Home_GetServicePlan_Cards_D allData={xDATA_CARD} index={index + 1}
            />
          </Fragment>
        ))}
      </div>
    </Home_GetServicePlan_DWrapper>
  )
}
