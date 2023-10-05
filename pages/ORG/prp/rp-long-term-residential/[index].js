import { INDEX_D_RP_LT_Detail } from "../../../../components/ORG/pages/residential-programs/third-page/rp-long-term-residential/desktop/INDEX_D_RP_LT_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_RP_LongTerm_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_RP_LT_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
