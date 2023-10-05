import { INDEX_D_CC_AC_Detail } from "../../../../components/ORG/pages/community-classes/third-page/cc-art-classes/desktop/INDEX_D_CC_AC_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_ArtClasses_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_AC_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
