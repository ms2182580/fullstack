import Link from "next/link.js"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
import { Home_OurPlatformCarousal_Carousal_DWrapper } from "./styles/Home_OurPlatformCarousal_Carousal_DWrapper.js"

export const Home_OurPlatformCarousal_Carousal_D = ({ allData }) => {
  return (
    <Home_OurPlatformCarousal_Carousal_DWrapper theFill={allData.theFill}>
      <div>{allData.icon}</div>
      <H3>{allData.title}</H3>
      <p>{allData.subtitle}</p>
      <Link href={allData.toWhere}>{allData.lastButtonText}</Link>
    </Home_OurPlatformCarousal_Carousal_DWrapper>
  )
}
