import { INDEX_D_AT_WCMD_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-wheelchair-mobility-devices/desktop/INDEX_D_AT_WCMD_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_WCMD_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_WCMD_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
