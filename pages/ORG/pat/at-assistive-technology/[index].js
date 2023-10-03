import { INDEX_D_AT_AT_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-assistive-technology/desktop/INDEX_D_AT_SAT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_AssistiveTechnology_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_AT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
