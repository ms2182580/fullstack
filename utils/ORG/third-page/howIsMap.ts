export const enum MapProperties_KEYS {
  HEIGHT = "HEIGHT",
  HOW_MANY = "HOW_MANY",
}

export type MapProperties = {
  [MapProperties_KEYS.HEIGHT]?: 231 | 450
  [MapProperties_KEYS.HOW_MANY]: null | 1 | 2
}
