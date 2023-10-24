import { INDEX_D_TFS_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-tools-for-school/desktop/INDEX_D_TFS_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_TFS_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_TFS_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
