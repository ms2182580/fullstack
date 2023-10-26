import { WebsiteSvg } from "@/assets/Icons"
import { ORG_D_Detail_BrandWrapper } from "./styles/ORG_D_Detail_BrandWrapper"

export const ORG_D_Detail_Brand = ({ brand }: { brand?: string }) => {
  return (
    <ORG_D_Detail_BrandWrapper>
      <WebsiteSvg />
      <span>
        <span>Brand: </span>
        <span>{brand}.</span>
      </span>
    </ORG_D_Detail_BrandWrapper>
  )
}
