import { INDEX_D_StateOffices_Results } from "../../../../components/ORG/pages/private-public-agencies/second-page/ppas-state-offices/desktop/INDEX_D_StateOffices_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_PPAS_StateOffices_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_StateOffices_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}