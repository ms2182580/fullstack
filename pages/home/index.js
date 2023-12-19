// import { INDEX_Home } from "../../components/home/desktop/INDEX_Home.js"
import { INDEX_Home } from "@/components/home/desktop/INDEX_Home.js"
import { useCheckUserWidth } from "../../context/CheckUserWidth.js"

export default function HOME_INDEX() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_Home />
        </>
      ) : (
        <>{/* There is no mobile version right now */}</>
      )}
    </>
  )
}
