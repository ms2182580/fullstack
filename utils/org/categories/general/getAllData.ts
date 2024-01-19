import { ALL_DATA, NamesCategories_KEY } from "./ALL_DATA"

type GetAllData_Type = {
  whoToFound: NamesCategories_KEY | string
}

export const getAllData = ({ whoToFound }: GetAllData_Type) => {
  const searching = ALL_DATA[whoToFound] ?? null
  return searching
}
