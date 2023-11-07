import { Tooltip_INTERFACE, Tooltip_VALUES, TypeOfTooltipSVG_LIKE } from "@/utils/ORG/third-page/tooltip"

export const tooltipToRender_PAA: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.ATTORNEY,
    TEXT: {
      title: "J.D.-CC",
      paragraphs: ["Attorney and Advocate Credential", "- Nationally recognized professional certification from the American Bar Association (ABA)"],
    },
  },
}
