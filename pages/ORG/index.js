import { useWidthWindow } from "../../utils/useWidthWindow.js"
import SearchpageORG from "./SearchpageORG.js"

const ORGLanding = () => {
  const { widthWindow } = useWidthWindow()
  

  return (
    <>
      <SearchpageORG windowSize={widthWindow} />
    </>
  )
}

export default ORGLanding
