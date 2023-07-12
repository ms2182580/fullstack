import { INDEX_D_ORG } from "../../components/ORG/home/desktop/INDEX_D_ORG"
import { INDEX_M_STSearch } from "../../components/ORG/speech-therapists/first-page/mobile/INDEX_M_STSearch"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const ORG_INDEX = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ORG />


        </>
      ) : (
        <>
          <INDEX_M_STSearch />
        </>
      )}
    </>
  )
}

export default ORG_INDEX
