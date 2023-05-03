import { createContext, useContext, useState } from "react"
import { useFetchNoFilters } from "../utils/ORG_useFetchNoFilters"

const ORG_Ctx_fetchNoFilters = createContext(null)

export const ORG_CtxFetchNoFilters_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(10)
  const [shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters] = useState(false)

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters,
    actualSort,
    setActualSort
  } = useFetchNoFilters(pagination, howMuchShow, "FetchNoFiltersDesktop", shouldFetchDesktopNoFilters)

  return (
    <ORG_Ctx_fetchNoFilters.Provider
      value={{
        pagination,
        setPagination,
        howMuchShow,
        setHowMuchShow,
        userFetched,
        setData,
        filtersST,
        setFilters,
        actualSort,
        setActualSort,
        shouldFetchDesktopNoFilters,
        setShouldFetchDesktopNoFilters
      }}>
      {children}
    </ORG_Ctx_fetchNoFilters.Provider>
  )
}

export const useORG_Ctx_FetchNoFilters = () => {
  return useContext(ORG_Ctx_fetchNoFilters)
}
