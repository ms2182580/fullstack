/* 
This hook will not work because it trigger a hook inside another hook
*/

/* import { useEffect, useState } from "react"
import { trpc } from "../trpc"

let allListingTypes = ["agency", "camp", "class"]

let theMethods = {
  addMany: "addMany",
  addOne: "addOne",
  getAll: "getAll",
  getOne: "getOne",
}

type ALL_DATA_TYPE = {
  category: string
  subcategories: string[]
}[]

export const ALL_DATA: ALL_DATA_TYPE = [
  {
    category: "legal",
    subcategories: [""],
  },
  {
    category: "mentalHealth",
    subcategories: [""],
  },
]

type Props = {
  askEveryone?: boolean
}

let getQuery = "useQuery"

export const useGetAllDataFromTRPC = ({ askEveryone = true }: Props) => {
  const [allData, setAllData] = useState(null)

  useEffect(() => {
    let all_tRPC: any = []

    for (const inside_ALL_Data of ALL_DATA) {
      let theCategory = inside_ALL_Data.category

      if (!askEveryone) {
        for (const subcategories of inside_ALL_Data.subcategories) {
          let getEveryDataFromtRPC = trpc[theCategory][theMethods.getAll][
            getQuery
          ]({ limite: 3, filter: { listingType: subcategories } })

          all_tRPC.push(getEveryDataFromtRPC)
        }
      }

      let getEveryCategoryFromtRPC = trpc[theCategory][theMethods.getAll][
        getQuery
      ]({ limit: 3 })

      all_tRPC.push(getEveryCategoryFromtRPC)
    }

    setAllData(all_tRPC)
  }, [])

  return allData
}
 */

export {}
