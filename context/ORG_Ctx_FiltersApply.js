import { createContext, useContext, useState } from "react"

const ORG_Ctx_FiltersApply = createContext(null)

export const ORG_CtxFiltersApply_Provider = ({ children }) => {
  const [filterAreApply, setFilterAreApply] = useState(false)

  return (
    <ORG_Ctx_FiltersApply.Provider
      value={{
        filterAreApply,
        setFilterAreApply
      }}>
      {children}
    </ORG_Ctx_FiltersApply.Provider>
  )
}

export const useORG_Ctx_FiltersApply = () => {
  return useContext(ORG_Ctx_FiltersApply)
}
