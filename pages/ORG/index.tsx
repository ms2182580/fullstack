import { DATA_ORG_D } from "@/utils/org/DATA_ORG_D"
import dynamic from "next/dynamic"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const INDEX_D_ORG_Search = dynamic(() => import("../../components/org/home/desktop/INDEX_D_ORG").then((mod) => mod.INDEX_D_ORG), { ssr: false })
const INDEX_M_STSearch_Component = dynamic(() => import("@/components/org/_DEPRECATED/speech-therapists/first-page/mobile/INDEX_M_STSearch").then((mod) => mod.INDEX_M_STSearch), {
  ssr: false,
})

const ORG_INDEX = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ORG_Search dataToDisplay={DATA_ORG_D} />
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
