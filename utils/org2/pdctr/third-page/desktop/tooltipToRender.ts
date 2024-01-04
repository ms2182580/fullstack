import { Tooltip_INTERFACE, Tooltip_VALUES, TypeOfTooltipSVG_LIKE } from "@/utils/org/third-page/tooltip"

export const tooltipToRender_PDCTR: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "Dr. John Doe, MD",
      paragraphs: [
        "Board-certified Cardiologist",
        "Specializes in interventional cardiology and prevention",
        "Member of the American College of Cardiology (ACC)",
        "Committed to providing personalized and compassionate care to patients",
      ],
    },
  },
}
