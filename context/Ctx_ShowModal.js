import { createContext, useContext, useState } from "react"

const Ctx_ShowModal = createContext(null)

export const Ctx_ShowModal_Provider = ({ children }) => {
  const [modalShowedCtx, setModalShowedCtx] = useState(false)

  return (
    <Ctx_ShowModal.Provider
      value={{
        modalShowedCtx,
        setModalShowedCtx,
      }}>
      {children}
    </Ctx_ShowModal.Provider>
  )
}

export const useCtx_ShowModal = () => {
  return useContext(Ctx_ShowModal)
}
