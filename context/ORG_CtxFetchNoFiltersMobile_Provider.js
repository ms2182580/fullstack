import { createContext, useContext, useState } from "react"
import { useFetchNoFiltersMobile } from '../utils/useFetchNoFiltersMobile.js'

const ORG_Ctx_fetchNoFiltersMobile = createContext(null)

export const ORG_CtxFetchNoFiltersMobile_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(4)
  const [shouldFetchMobileNoFilters, setShouldFetchMobileNoFilters] = useState(false)

  const {
    actualSort: actualSort,
    data: userFetched,
    filters: filtersST,
    setActualSort,
    setData: setUserFetched,
    setFilters: setFiltersST,
  } = useFetchNoFiltersMobile(pagination, howMuchShow, "FetchNoFiltersMobile", shouldFetchMobileNoFilters)

  return (
    <ORG_Ctx_fetchNoFiltersMobile.Provider
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
        setShouldFetchMobileNoFilters,
        shouldFetchMobileNoFilters,
        userFetched,
      }}>
      {children}
    </ORG_Ctx_fetchNoFiltersMobile.Provider>
  )
}

export const useORG_Ctx_FetchNoFiltersMobile = () => {
  return useContext(ORG_Ctx_fetchNoFiltersMobile)
}
