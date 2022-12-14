import { createContext, useState, useContext } from "react"
import { FetchFiltered } from "../utils/ORG_dummydataFiltered_speechtherapists"
import { useORG_Ctx_FetchNoFilters } from "./ORG_CtxFetchNoFilters_Provider"
const ORG_Ctx_fetchWithFilters = createContext(null)

export const ORG_CtxFetchWithFilters_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(10)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  const {
    dataF,
    setDataF,
    filtersF,
    setFiltersF,
    actualSortF,
    setActualSortF
  } = FetchFiltered(
    `https://randomuser.me/api/?results=${howMuchShow}&nat=us&page=${pagination}`,
    pagination
  )

  return (
    <ORG_Ctx_fetchWithFilters.Provider
      value={{
        pagination,
        setPagination,
        howMuchShow,
        setHowMuchShow,
        dataF,
        setDataF,
        filtersF,
        setFiltersF,
        actualSortF,
        setActualSortF
      }}>
      {children}
    </ORG_Ctx_fetchWithFilters.Provider>
  )
}

export const useORG_Ctx_FetchWithFilters = () => {
  return useContext(ORG_Ctx_fetchWithFilters)
}
