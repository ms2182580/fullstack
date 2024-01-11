import { ALL_CATEGORY_KEYS, ALL_DATA } from "./ALL_DATA"

type GetAllData_Type = {
  whoToFound: ALL_CATEGORY_KEYS | string
}

export const getAllData = ({
  whoToFound,
}: GetAllData_Type) => {
  const searching = ALL_DATA[whoToFound] ?? null
  return searching
}
