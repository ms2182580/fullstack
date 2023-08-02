import { useCheckUserWidth } from "../../../context/CheckUserWidth"

const ORG_SPEECHTHERAPISTS_INDEX = () => {
  const { isMobile } = useCheckUserWidth()
  return (
    <>
      {isMobile === false ? (
        <>
          {/* <INDEX_D_STResults /> */}
        </>
      ) : (
        <>
          {/* <INDEX_M_STResults /> */}
        </>
      )}
    </>
  )
}

export default ORG_SPEECHTHERAPISTS_INDEX
