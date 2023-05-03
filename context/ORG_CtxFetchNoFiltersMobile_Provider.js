import { createContext, useContext, useState } from "react"
import { useFetchNoFilters } from '../utils/ORG_useFetchNoFilters'

const ORG_Ctx_fetchNoFiltersMobile = createContext(null)

export const ORG_CtxFetchNoFiltersMobile_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(4)
  const [shouldFetchMobileNoFilters, setShouldFetchMobileNoFilters] = useState(false)

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters,
    actualSort,
    setActualSort
  } = useFetchNoFilters(pagination, howMuchShow, "FetchNoFiltersMobile", shouldFetchMobileNoFilters)

  return (
    <ORG_Ctx_fetchNoFiltersMobile.Provider
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
        shouldFetchMobileNoFilters,
        setShouldFetchMobileNoFilters
      }}>
      {children}
    </ORG_Ctx_fetchNoFiltersMobile.Provider>
  )
}

export const useORG_Ctx_FetchNoFiltersMobile = () => {
  return useContext(ORG_Ctx_fetchNoFiltersMobile)
}
