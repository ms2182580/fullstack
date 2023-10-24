import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import Link from "next/link"
import { ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper } from "./styles/ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper"

export const enum Section_KEYS {
  IMAGE_SOURCE = "IMAGE_SOURCE",
  AMOUNT_OF_MONEY = "AMOUNT_OF_MONEY",
  PRODUCT_SPECIFICATIONS = "PRODUCT_SPECIFICATIONS",
  LINK_TO_VISIT = "LINK_TO_VISIT",
}

export type Section_Props = {
  imageSource?: string
  amountOfMoney?: number
  productSpecifications?: string[]
  linkToVisit?: string
}

export const ORG_D_Detail_AT_WCMD_WhereToBuy_Section = ({ imageSource = "", amountOfMoney = 999, productSpecifications, linkToVisit = "#" }: Section_Props) => {
  let amountOfMoneyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amountOfMoney)

  return (
    <ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper>
      <span>
        <Image
          src={imageSource}
          layout="fixed"
          width={250}
          height={100}
          objectFit="contain"
        />
      </span>
      <span>
        <H3>{amountOfMoneyFormat}</H3>

        <ul>
          {productSpecifications.map((x, index) => (
            <li key={`${x}_${index}`}>
              <button tabIndex={-1}>{x}</button>
            </li>
          ))}
        </ul>

        <Link href={`${linkToVisit}`}>Visit Site</Link>
      </span>
    </ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper>
  )
}
