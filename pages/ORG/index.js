import { IndexDesktop_ST_Search } from "../../components/ORG/speech-therapists/first-page/dekstop/IndexDesktop_ST_Search"
import { IndexMobile_ST_Search } from "../../components/ORG/speech-therapists/first-page/mobile/IndexMobile_ST_Search"
import { useCheckUserWidth } from "../../context/CheckUserWidth"

const ORGIndex = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <IndexDesktop_ST_Search />
        </>
      ) : (
        <>
          <IndexMobile_ST_Search />
        </>
      )}
    </>
  )
}

export default ORGIndex

