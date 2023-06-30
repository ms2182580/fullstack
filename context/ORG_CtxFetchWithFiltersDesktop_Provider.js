import { createContext, useContext, useState } from "react"
import { useFetchWithFiltersDesktop } from "../utils/useFetchWithFiltersDesktop"
import { useORG_Ctx_FetchNoFiltersDesktop } from "./ORG_CtxFetchNoFiltersDesktop_Provider"

const ORG_Ctx_fetchWithFilters = createContext(null)

export const ORG_CtxFetchWithFiltersDesktop_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(10)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const [shouldFetchDesktopFilters, setShouldFetchDesktopFilters] = useState(false)

  const {
    actualSortF: actualSort,
    dataF: userFetched,
    filtersF: filtersST,
    setActualSortF: setActualSort,
    setDataF: setUserFetched,
    setFiltersF: setFiltersST,
  } = useFetchWithFiltersDesktop(pagination, howMuchShow, "FetchWithFiltersDesktop", shouldFetchDesktopFilters)

  /* 
  !FH0
  The data inside the filters should have a different name from the fetch with no filters, maybe something like this:
  
  No filters → userFetched
  With filters → userFetchedF
  
  */

  return (
    <ORG_Ctx_fetchWithFilters.Provider
      value={{
        actualSort,
        filtersST,
        howMuchShow,
        pagination,
        setActualSort,
        setFiltersST,
        setHowMuchShow,
        setPagination,
        setShouldFetchDesktopFilters,
        setUserFetched,
        shouldFetchDesktopFilters,
        userFetched,
      }}>
      {children}
    </ORG_Ctx_fetchWithFilters.Provider>
  )
}

export const useORG_Ctx_FetchWithFiltersDesktop = () => {
  return useContext(ORG_Ctx_fetchWithFilters)
}
