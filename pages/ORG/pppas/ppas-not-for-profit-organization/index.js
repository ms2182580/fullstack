import { INDEX_D_NotForProfitOrganization_Results } from "../../../../components/ORG/pages/private-public-agencies/second-page/ppas-not-for-profit-organization/desktop/INDEX_D_NotForProfitOrganization_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_PPAS_NotForProfitOrganization_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_NotForProfitOrganization_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}