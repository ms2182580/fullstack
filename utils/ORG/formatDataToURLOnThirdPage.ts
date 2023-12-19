type Props = {
  stringToFormat: string
  whichCharacterToReplace?: "_" | "-" | string
}

/* formatDataToURLOnThirdPage function behavior:
 * 1. Remove all special character on a string, leaving only the character in lower and uppercase, blank spaces and number
 * 2. Put and special character in all the blank spaces. By default is an underscore "_"
 */

export const formatDataToURLOnThirdPage = ({ stringToFormat = "No String Provide", whichCharacterToReplace = "_" }: Props): string => {
  return stringToFormat
    .match(/[a-zA-Z]|\s|[0-9]/g)
    .join("")
    .replace(/\s+/g, `${whichCharacterToReplace}`)
}
