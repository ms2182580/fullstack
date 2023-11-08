import { Tooltip_INTERFACE, Tooltip_VALUES, TypeOfTooltipSVG_LIKE } from "@/utils/ORG/third-page/tooltip"

export const tooltipToRender_PCC: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "XYZ-Community Classes",
      paragraphs: [
        "Variety of educational and recreational classes for all age groups",
        "Taught by experienced instructors with relevant certifications",
        "Affiliated with local universities and community organizations",
      ],
    },
  },
}
