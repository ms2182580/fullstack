import { INDEX_D_VES_HR_Detail } from "@/components/ORG/pages/vocational-employment/third-page/ves-highly-reviewed-companies/desktop/INDEX_D_VES_HR_Detail"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_VES_OP_Detail() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_VES_HR_Detail />
        </>
      ) : (
        <>{/* Mobile */}</>
      )}
    </>
  )
}
