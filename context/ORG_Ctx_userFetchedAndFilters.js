import { createContext, useState, useContext } from "react"

const ORG_Ctx_userFetchedAndFilters = createContext(null)

export const ORG_CtxUserFetchedAndFilters_Provider = ({
  children
}) => {
  const [userFetchedDone, setUserFetchedDone] = useState()
  const [filtersUserFetchedDone, setFiltersUserFetchedDone] = useState()
  return (
    <ORG_Ctx_userFetchedAndFilters.Provider
      value={{
        userFetchedDone,
        setUserFetchedDone,
        filtersUserFetchedDone,
        setFiltersUserFetchedDone
      }}
    >
      {children}
    </ORG_Ctx_userFetchedAndFilters.Provider>
  )
}

export const useORG_Ctx_UserFetchedAndFilters = () => {
  return useContext(ORG_Ctx_userFetchedAndFilters)
}
