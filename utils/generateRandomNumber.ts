export type Prop_Number = number

export const generateRandomNumber = (min: Prop_Number = 1, max: Prop_Number = 999) => {
  let random = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(random)
}
