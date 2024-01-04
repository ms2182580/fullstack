import X_Svg from "@/assets/icons/X_Svg.svg"
import Tooltip from "@/assets/icons/tooltip.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image, { StaticImageData } from "next/image"
import { ORG_D_Detail_BarsWrapper } from "./styles/ORG_D_Detail_BarsWrapper"

export type CategoriesToDisplay_Data = {
  category: string
  whichGraphic: StaticImageData
}[]

export type shouldDisplayTooltip = { shouldDisplayTooltip?: boolean }

export type ORG_D_Detail_Bars_Props = {
  title: string
  subtitle: string
  categoriesToDisplay: CategoriesToDisplay_Data
} & shouldDisplayTooltip

export const ORG_D_Detail_Bars = ({ title, subtitle, shouldDisplayTooltip = false, categoriesToDisplay = X_Svg }: ORG_D_Detail_Bars_Props) => {
  return (
    <ORG_D_Detail_BarsWrapper shouldDisplayTooltip={shouldDisplayTooltip}>
      <div>
        <span>
          <H4>{title}</H4>
          {shouldDisplayTooltip ? (
            <>
              <Tooltip />
            </>
          ) : null}
        </span>
        <H3>{subtitle}</H3>
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
              ) : (
                <>
                  <X_Svg />
                </>
              )}
            </li>
          )
        })}
      </ul>
    </ORG_D_Detail_BarsWrapper>
  )
}
