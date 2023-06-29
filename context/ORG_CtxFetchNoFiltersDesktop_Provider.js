import { createContext, useContext, useState } from "react"
import { useFetchNoFiltersDesktop } from "../utils/useFetchNoFiltersDesktop"

const ORG_Ctx_fetchNoFilters = createContext(null)

export const ORG_CtxFetchNoFiltersDesktop_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(10)
  const [shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters] = useState(false)

  const {
    actualSort,
    data: userFetched,
    filters: filtersST,
    setActualSort,
    setData: setUserFetched,
    setFilters: setFiltersST,
  } = useFetchNoFiltersDesktop(pagination, howMuchShow, "FetchNoFiltersDesktop", shouldFetchDesktopNoFilters)

  return (
    <ORG_Ctx_fetchNoFilters.Provider
      value={{
        actualSort,
        filtersST,
        howMuchShow,
        pagination,
        setActualSort,
        setUserFetched,
        setFiltersST,
        setHowMuchShow,
        setPagination,
        setShouldFetchDesktopNoFilters,
        shouldFetchDesktopNoFilters,
        userFetched,
      }}>
      {children}
    </ORG_Ctx_fetchNoFilters.Provider>
  )
}

export const useORG_Ctx_FetchNoFiltersDesktop = () => {
  return useContext(ORG_Ctx_fetchNoFilters)
}
