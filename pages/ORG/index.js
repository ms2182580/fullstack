import { INDEX_D_STSearch } from "../../components/ORG/speech-therapists/first-page/dekstop/INDEX_D_STSearch"
import { INDEX_M_STSearch } from "../../components/ORG/speech-therapists/first-page/mobile/INDEX_M_STSearch"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const ORG_INDEX = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_STSearch />
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

