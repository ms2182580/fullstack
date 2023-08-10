import { INDEX_D_Associations_Results } from "../../../../components/ORG/pages/private-public-agencies/second-page/ppas-associations/desktop/INDEX_D_Associations_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_PPAS_Associations_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_Associations_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}