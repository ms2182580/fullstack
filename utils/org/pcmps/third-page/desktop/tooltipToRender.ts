import { Tooltip_INTERFACE, Tooltip_VALUES, TypeOfTooltipSVG_LIKE } from "@/utils/org/third-page/tooltip"

export const tooltipToRender_PCMPS: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "ABC-Camp",
      paragraphs: [
        "Adventure-based Camp",
        "- Accredited by the American Camp Association (ACA)",
        "Nationally recognized for excellence in outdoor education and team-building activities",
      ],
    },
  },
}
