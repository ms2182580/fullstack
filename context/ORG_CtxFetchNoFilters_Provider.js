import { createContext, useContext, useState } from "react"
import { useFetch } from "../utils/ORG_dummydata_speechtherapists"
import { useORGShouldFetch } from '../utils/ORG_shouldFetch'


const ORG_Ctx_fetchNoFilters = createContext(null)

export const ORG_CtxFetchNoFilters_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(10)
  const { shouldFetch, setShouldFetch } = useORGShouldFetch()

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters,
    actualSort,
    setActualSort
  } = useFetch(pagination, howMuchShow, "noFilteredHere → 5", shouldFetch)

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
        shouldFetch,
        setShouldFetch
      }}>
      {children}
    </ORG_Ctx_fetchNoFilters.Provider>
  )
}

export const useORG_Ctx_FetchNoFilters = () => {
  return useContext(ORG_Ctx_fetchNoFilters)
}
