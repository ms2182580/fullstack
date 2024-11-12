export const RGBAfn = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
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
