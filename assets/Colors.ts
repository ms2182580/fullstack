export const PRIMARY = {
  PRIMARY_LOGO: "#A461BB" /* Only for INCLUSIVE logo */,
  // PRIMARY_CTA: "#6E3A82" /* Primary CTA (default state) */,
  PRIMARY_CTA: "#006886" /* New Color Scheme Primary CTA (default state) */,
  PRIMARY_HOVER: "#4B348B" /* Primary CTA (hover state) */,
  PRIMARY_BACKGROUND: "#F1E7F5",
  DARK_MAROON: "#312138",
  LIGHT_MAROON: "#746779",
}

export const SECONDARY_SNT = {
  MINT: "#A9F0BD",
  YELLOW: "#FFE662",
  ASH_BLUE: "#65A6D6",
  PINK: "#FFC2A5",
}

/* Background for small items (like ORG’s “friendly tags” & Reviews) */
export const SECONDARY_ORG_PLUS = {
  MINT: "#DCFFF0",
  YELLOW: "#FBFBA4",
  ASH_BLUE: "#C4E7FD",
  PINK: "#FEE0D3",
  PINK_2: "#FFE7DB",
}

/* Background on big blocks of text (like landing page, SNT etc) */
export const SECONDARY_BG_BIGBLOCKS_TEXT = {
  MINT: "#F8FFFC",
  YELLOW: "#FEFEED",
  ASH_BLUE: "#F3FAFF",
  PINK: "#FFF3ED",
}

export const NEUTRALS = {
  BLACK: "#00080B" /* Standard text */,
  BLACK_2: "#1d1a1e" /* Standard text */,
  DARK_GREY: "#6C6C6C" /* Informational text */,
  DARK_GREY_2: "#3A343C" /* Informational text alternative 2 */,
  DARK_GREY_3: "#908395" /* Informational text alternative 3 */,
  LIGHT_GREY: "#D3D6D7" /* Disabled color */,
  LIGHT_GREY2: "#E9E6EA80" /* Disabled color */,
  LIGHT_GREY3: "#979797" /* New Color Scheme Disabled color */,
  OFF_WHITE: "#FCFDFE" /* Overall Background */,
  OFF_WHITE_2: "#F3F1F3" /* Overall Background alternative 2 */,
  BORDER: "#D3CED5",
}

export const SEMANTICS = {
  SUCCESS_STATE: "#026600" /* Only for success text */,
  ERROR_STATE: "#D50000" /* Only for error state */,
  HYPERLINK_NORMAL: "#3366CC" /* Only for hyperlinked text */,
  HYPERLINK_VISITED: "#884488" /* Only for visited hyperlinked text */,
  NAVIGATION_ACTIVE: "#E3D1EB",
  NAVIGATION_HOVER_FOCUS: "hsl(281.5, 39.4%, 77.1%)",
  FOCUS_RING: "#64AFFB" /* Focus state ring around components */,
}

type HexLetter = "a" | "b" | "c" | "d" | "e" | "f"
type HexDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type HexPart = HexLetter | HexDigit

/** Length: 3 */
type HexCodeShort = `#${HexPart}${HexPart}${HexPart}`

/** Length: 6 */
/* 
* The type «HexCodeLong» will not work because is beyond the capabilities of TypeScript
type HexCodeLong = `#${HexPart}${HexPart}${HexPart}${HexPart}${HexPart}${HexPart}`
*/

type HexCodeLong_Pseudo_Type = `#${string}`

export const validateHexCodeLong_Pseudo_Type = (
  input: HexCodeLong_Pseudo_Type
): HexCodeLong_Pseudo_Type | false => {
  const regexToCheck = /^#[0-9a-f]{6}$/i

  return regexToCheck.test(input) ? input : false
}

type HSLCode_Type = `hsl(${number}, ${number}%, ${number}%)`
type HSLACode_Type = `hsla(${number}, ${number}%, ${number}%, ${number})`

type HSL_Or_HSLA_Type = HSLCode_Type | HSLACode_Type

// Validation function for HSL and HSLA color codes
export const validateHSL_Or_HSLA_Type = (
  input: HSL_Or_HSLA_Type
): HSL_Or_HSLA_Type | false => {
  const regexToCheck =
    /^(hsl|hsla)\(\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?%)\s*,\s*(-?\d+(\.\d+)?%)(,\s*(0(\.\d+)?|1(\.0+)?|0?\.\d+)?)?\s*\)$/

  return regexToCheck.test(input) ? input : false
}

export type COLORS_TYPE = {
  HEX: HexCodeShort | HexCodeLong_Pseudo_Type
  HSL: HSL_Or_HSLA_Type
}
