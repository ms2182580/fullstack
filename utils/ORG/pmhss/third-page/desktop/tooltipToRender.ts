import { Tooltip_INTERFACE, Tooltip_VALUES, TypeOfTooltipSVG_LIKE } from "@/utils/ORG/third-page/tooltip"

export const tooltipToRender_PMHSS: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "XYZ Mental Health Services",
      paragraphs: [
        "Comprehensive mental health services including therapy and counseling",
        "Team of licensed psychologists and psychiatrists with diverse specialties",
        "Affiliated with the National Alliance on Mental Illness (NAMI)",
        "Committed to providing confidential and evidence-based treatment options",
      ],
    },
  },
}
