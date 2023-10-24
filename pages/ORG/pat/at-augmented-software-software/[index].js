import { INDEX_D_AT_ASS_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-augmented-software-software/desktop/INDEX_D_AT_ASS_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_ASS_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_ASS_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
