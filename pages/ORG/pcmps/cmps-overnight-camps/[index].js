import { INDEX_D_CMPS_OVN_Detail } from "../../../../components/ORG/pages/camps/third-page/cmps-overnight-camps/desktop/INDEX_D_CMPS_DAY_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CMPS_OVN_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CMPS_OVN_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
