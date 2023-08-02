import { useCheckUserWidth } from "../../../context/CheckUserWidth"
const SPDetail = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* <INDEX_D_STDetail /> */}
        </>
      ) : (
        <>
          {/* <INDEX_M_STDetail /> */}
        </>
      )}
    </>
  )
}

export default SPDetail
