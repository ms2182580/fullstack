import { createContext, useContext, useState } from "react"
import { useFetch } from "../utils/ORG_dummydata_speechtherapists"

const ORG_Ctx_fetchNoFiltersMobile = createContext(null)

export const ORG_CtxFetchNoFiltersMobile_Provider = ({ children }) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(4)

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters,
    actualSort,
    setActualSort
  } = useFetch(pagination, howMuchShow, "mobileHere → 4")

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
        setActualSort
      }}>
      {children}
    </ORG_Ctx_fetchNoFiltersMobile.Provider>
  )
}

export const useORG_Ctx_FetchNoFiltersMobile = () => {
  return useContext(ORG_Ctx_fetchNoFiltersMobile)
}
