import { useEffect } from "react"
import HeroImage from "./HeroImage.js"
import Main from "./Main.js"

import styled from "styled-components"

const MaincontentProvisional = styled.h2`
  height: 100vh;
  border: 3px crimson solid;
  display: grid;
  place-items: center;
`

/* 

!FH0
Create the new landing, start by navbar

*/



export default function HomeIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroImage />

      <Main />
    </>
  )
}




