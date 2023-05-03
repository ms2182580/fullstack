import { createContext, useContext, useState } from "react"
import { useFetchWithFilters } from "../utils/ORG_useFetchWithFilters"
import { useORG_Ctx_FetchNoFilters } from "./ORG_CtxFetchNoFilters_Provider"

const ORG_Ctx_fetchWithFilters = createContext(null)

export const ORG_CtxFetchWithFilters_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(10)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  const [shouldFetchDesktopFilters, setShouldFetchDesktopFilters] = useState(false)

  const { dataF, setDataF, filtersF, setFiltersF, actualSortF, setActualSortF } = useFetchWithFilters(
    pagination,
    howMuchShow,
    "FetchWithFiltersDesktop",
    shouldFetchDesktopFilters
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
        setActualSortF,
        shouldFetchDesktopFilters,
        setShouldFetchDesktopFilters
      }}>
      {children}
    </ORG_Ctx_fetchWithFilters.Provider>
  )
}

export const useORG_Ctx_FetchWithFilters = () => {
  return useContext(ORG_Ctx_fetchWithFilters)
}
