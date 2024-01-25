import {
  Tooltip_INTERFACE,
  Tooltip_VALUES,
  TypeOfTooltipSVG_LIKE,
} from "@/utils/org/third-page/tooltip"

export const tooltipToRender_Agencies: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.CUSTOM,
  CUSTOM_DATA: {
    SVG: TypeOfTooltipSVG_LIKE.OTHER,
    TEXT: {
      title: "ABC Agency for Social Services",
      paragraphs: [
        "Dedicated to providing social services and support to individuals and families",
        "Accredited by the Council on Accreditation (COA)",
        "Committed to promoting social justice and advocating for marginalized communities",
      ],
    },
  },
}
