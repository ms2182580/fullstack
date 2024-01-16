import Link from "next/link.js"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
import { Home_GetServicePlan_Cards_DWrapper } from "./styles/Home_GetServicePlan_Cards_DWrapper.js"

export const Home_GetServicePlan_Cards_D = ({ allData, index }) => {
  return (
    <Home_GetServicePlan_Cards_DWrapper>
      <p>{index}</p>
      <div>
        <div>{allData.icon}</div>
        <H3>{allData.title}</H3>
        <p>{allData.subtitle}</p>
        <Link href={allData.toWhere}>{allData.lastButtonText}</Link>
      </div>
    </Home_GetServicePlan_Cards_DWrapper>
  )
}
