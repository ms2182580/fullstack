export const ORG_isORG = (actualPathname) => {
  return /^\/[ORG]\/$|^\/[ORG]/.test(actualPathname)
}