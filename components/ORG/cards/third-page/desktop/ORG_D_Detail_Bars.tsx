import Tooltip from "@/assets/Icons/tooltip.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image, { StaticImageData } from "next/image"
import { ORG_D_Detail_BarsWrapper } from "./styles/ORG_D_Detail_BarsWrapper"

export type CategoriesToDisplay_Data = {
  category: string
  whichGraphic?: StaticImageData
}[]

export type ORG_D_Detail_Bars_Props = {
  title: string
  subtitle: string
  shouldDisplayTooltip?: boolean
  categoriesToDisplay: CategoriesToDisplay_Data
}

export const ORG_D_Detail_Bars = ({ title, subtitle, shouldDisplayTooltip = false, categoriesToDisplay }: ORG_D_Detail_Bars_Props) => {
  return (
    <ORG_D_Detail_BarsWrapper>
      <div>
        <H4>{title}</H4>
        <P>{subtitle}</P>
        {shouldDisplayTooltip ? (
          <>
            <Tooltip />
          </>
        ) : null}
      </div>

      <ul>
        {categoriesToDisplay.map((x) => {
          return (
            <li key={`${x.category}`}>
              <P>{x.category}</P>
              {x.whichGraphic ? (
                <>
                  <Image
                    src={x.whichGraphic}
                    alt={`Image with graphic for ${x.category}`}
                  />
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </ORG_D_Detail_BarsWrapper>
  )
}
