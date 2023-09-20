import { createContext, useContext, useState } from "react"

const NavbarHomeHeight = createContext(null)

export const NavbarHomeHeight_Provider = ({ children }) => {
  const [height, setHeight] = useState(null)

  return (
    <NavbarHomeHeight.Provider
      value={{
        height,
        setHeight,
      }}>
      {children}
    </NavbarHomeHeight.Provider>
  )
}

export const useNavbarHomeHeight = () => {
  return useContext(NavbarHomeHeight)
}
