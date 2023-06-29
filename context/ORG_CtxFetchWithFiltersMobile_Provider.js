import { createContext, useContext, useState } from "react"
import { useFetchWithFiltersMobile } from "../utils/useFetchWithFiltersMobile.js"
import { useORG_Ctx_FetchNoFiltersMobile } from "./ORG_CtxFetchNoFiltersMobile_Provider"

const ORG_Ctx_fetchWithFiltersMobile = createContext(null)

export const ORG_CtxFetchWithFiltersMobile_Provider = ({ children }) => {
  const [howMuchShow, setHowMuchShow] = useState(4)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersMobile()
  const [shouldFetchMobileWitFilters, setShouldFetchMobileWithFilters] = useState(false)

  const {
    actualSortF: actualSort,
    dataF: userFetched,
    filtersF: filtersST,
    setActualSortF: setActualSort,
    setDataF: setUserFetched,
    setFiltersF: setFiltersST
  } = useFetchWithFiltersMobile(pagination, howMuchShow, "FetchWithFiltersMobile", shouldFetchMobileWitFilters)

  return (
    <ORG_Ctx_fetchWithFiltersMobile.Provider
      value={{
        actualSort,
        filtersST,
        howMuchShow,
        pagination,
        setActualSort,
        setFiltersST,
        setHowMuchShow,
        setPagination,
        setShouldFetchMobileWithFilters,
        setUserFetched,
        shouldFetchMobileWitFilters,
        userFetched
      }}>
      {children}
    </ORG_Ctx_fetchWithFiltersMobile.Provider>
  )
}

export const useORG_Ctx_FetchWithFiltersMobile = () => {
  return useContext(ORG_Ctx_fetchWithFiltersMobile)
}
