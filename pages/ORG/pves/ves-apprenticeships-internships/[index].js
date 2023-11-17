import { INDEX_D_VES_AI_Detail } from "@/components/ORG/pages/vocational-employment/third-page/ves-apprenticeships-internships/desktop/INDEX_D_VES_AI_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_VES_OP_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_VES_AI_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
