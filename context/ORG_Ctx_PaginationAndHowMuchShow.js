import { createContext, useState, useContext } from "react"

const ORG_Ctx_Pagination = createContext(null)

export const ORG_CtxIndividualPaginationAndHowMuchShow_Provider = ({
  children
}) => {
  const [pagination, setPagination] = useState(1)
  const [howMuchShow, setHowMuchShow] = useState(4)

  return (
    <ORG_Ctx_Pagination.Provider
      value={{
        pagination,
        setPagination,
        howMuchShow,
        setHowMuchShow
      }}
    >
      {children}
    </ORG_Ctx_Pagination.Provider>
  )
}

export const useORG_Ctx_PaginationAndHowMuchShow = () => {
  return useContext(ORG_Ctx_Pagination)
}
