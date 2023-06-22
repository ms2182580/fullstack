import { INDEX_Desktop_STSearch } from "../../components/ORG/speech-therapists/first-page/dekstop/INDEX_Desktop_STSearch"
import { INDEX_Mobile_STSearch } from "../../components/ORG/speech-therapists/first-page/mobile/INDEX_Mobile_STSearch"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const ORGIndex = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_Desktop_STSearch />
        </>
      ) : (

        <>
          <INDEX_Mobile_STSearch />
        </>
      )}
    </>
  )
}

export default ORGIndex

