import {
  Tooltip_INTERFACE,
  Tooltip_VALUES,
  TypeOfTooltipSVG_LIKE,
} from "@/utils/org/third-page/tooltip"

export const tooltipToRender_SchoolsEducational: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "ABC Special Education School",
      paragraphs: [
        "Inclusive education for students with diverse learning needs",
        "Provides specialized programs for students with autism spectrum disorder",
        "Accredited by the National Association of Special Education Teachers (NASET)",
        "Experienced faculty committed to fostering a supportive and inclusive learning environment",
      ],
    },
  },
}
