import { INDEX_D_CC_CmaInclusiveArt_Detail } from "../../../../../components/ORG/pages/community-classes/third-page/cc-community-classes/cma-inclusive-art/desktop/INDEX_D_CC_CmaInclusiveArt_Detail"
import { useCheckUserWidth } from "../../../../../context/CheckUserWidth"

export default function ORG_INDEX_CC_CmaInclusiveArt_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CC_CmaInclusiveArt_Detail />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}
