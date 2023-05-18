import { createContext, useContext, useState } from "react"
import { ORG_SortByDefault } from "../utils/ORG_SortByData"

const ORG_Ctx_FiltersApply = createContext(null)

export const ORG_CtxFiltersApply_Provider = ({ children }) => {
  const [filterAreApply, setFilterAreApply] = useState(false)
  const [filtersAppliedNewFilters, setFiltersAppliedNewFilters] = useState(false)
  const [defaultWord, setDefaultWord] = useState(ORG_SortByDefault)

  return (
    <ORG_Ctx_FiltersApply.Provider
      value={{
        filterAreApply,
        setFilterAreApply,
        filtersAppliedNewFilters,
        setFiltersAppliedNewFilters,
        defaultWord,
        setDefaultWord
      }}>
      {children}
    </ORG_Ctx_FiltersApply.Provider>
  )
}

export const useORG_Ctx_FiltersApply = () => {
  return useContext(ORG_Ctx_FiltersApply)
}
