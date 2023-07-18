import dynamic from "next/dynamic"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const INDEX_D_ORG_Component = dynamic(() => import("../../components/ORG/home/desktop/INDEX_D_ORG").then((mod) => mod.INDEX_D_ORG), { ssr: false })
const INDEX_M_STSearch_Component = dynamic(() => import("../../components/ORG/speech-therapists/first-page/mobile/INDEX_M_STSearch").then((mod) => mod.INDEX_M_STSearch), { ssr: false })

const ORG_INDEX = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ORG_Component />
        </>
      ) : (
        <>
          <INDEX_M_STSearch_Component />
        </>
      )}
    </>
  )
}

export default ORG_INDEX
