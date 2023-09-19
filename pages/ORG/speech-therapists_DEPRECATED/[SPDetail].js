import { useCheckUserWidth } from "../../../context/CheckUserWidth"

export default function SPDetail() {
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
