import { INDEX_D_AT_IHT_Detail } from "../../../../components/ORG/pages/assistive-technology/third-page/at-innovative-hi-tech/desktop/INDEX_D_AT_IHT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_IHT_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_AT_IHT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
