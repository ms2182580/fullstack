import { createContext, useContext, useState } from "react"
import { useFetchWithFiltersDesktop } from "../utils/useFetchWithFiltersDesktop"
import { useORG_Ctx_FetchNoFiltersDesktop } from "./ORG_CtxFetchNoFiltersDesktop_Provider"

const ORG_Ctx_fetchWithFilters = createContext(null)

export const ORG_CtxFetchWithFiltersDesktop_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(10)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const [shouldFetchDesktopFilters, setShouldFetchDesktopFilters] = useState(false)

  const { dataF, setDataF, filtersF, setFiltersF, actualSortF, setActualSortF } = useFetchWithFiltersDesktop(
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

export const useORG_Ctx_FetchWithFiltersDesktop = () => {
  return useContext(ORG_Ctx_fetchWithFilters)
}
