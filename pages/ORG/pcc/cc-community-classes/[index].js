import { INDEX_D_CC_CC_Detail } from "../../../../components/ORG/pages/community-classes/third-page/cc-community-classes/desktop/INDEX_D_CC_CC_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_CommunityClasses_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_CC_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
