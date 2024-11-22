export const preferFirstDefaultSecondFn = (preferredFunc, defaultFunc) => {
  return preferredFunc ? preferredFunc : defaultFunc
}
