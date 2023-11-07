export const enum Tooltip_KEYS {
  WHAT_DISPLAY = "WHAT_DISPLAY",
  CUSTOM_DATA = "CUSTOM_DATA",
  SVG = "SVG",
  TEXT = "TEXT",
}

export const enum Tooltip_VALUES {
  DEFAULT = "DEFAULT",
  NO_DISPLAY = "NO_DISPLAY",
  CUSTOM = "CUSTOM",
}

export const enum TypeOfTooltipSVG_LIKE {
  ATTORNEY = "ATTORNEY",
  OTHER = "OTHER",
}

export type Tooltip_INTERFACE = {
  [Tooltip_KEYS.WHAT_DISPLAY]: Tooltip_VALUES
  [Tooltip_KEYS.CUSTOM_DATA]?: {
    [Tooltip_KEYS.SVG]?: TypeOfTooltipSVG_LIKE
    [Tooltip_KEYS.TEXT]?: {
      title: string
      paragraphs: string[]
    }
  }
}

export const TooltipDefault: Tooltip_INTERFACE = {
  WHAT_DISPLAY: Tooltip_VALUES.DEFAULT,
}
