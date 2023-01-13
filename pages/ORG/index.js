import { useEffect, useState } from "react"
import SearchpageORG from "./SearchpageORG.js"

const ORGLanding = () => {
  const [widthWindow, setWidthWindow] = useState()
  // console.log('widthWindow:', widthWindow)
  
  const [imInClient, setImInClient] = useState(() => {
    if (typeof window === "object") {
      return true
    }
  })
  useEffect(() => {
    window.onresize = () => {
      setWidthWindow(window.innerWidth)
    }

    if (imInClient) {
      setWidthWindow(window.innerWidth)
    }
  }, [])
  
  useEffect(() => {
    if (typeof window === "object"){
      setImInClient(true)
    } else {
      setImInClient(false)
    }
    
  }, [widthWindow])

  return (
    <>
      {widthWindow ? (
        <SearchpageORG windowSize={widthWindow} />
      ) : (
        <SearchpageORG windowSize={widthWindow} />
      )}
    </>
  )
}

export default ORGLanding
