import { INDEX_D_CC_Soccer_Detail } from "../../../../../components/ORG/pages/community-classes/third-page/cc-community-classes/soccer/desktop/INDEX_D_CC_Soccer_Detail"
import { useCheckUserWidth } from "../../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_Soccer_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_Soccer_Detail />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
