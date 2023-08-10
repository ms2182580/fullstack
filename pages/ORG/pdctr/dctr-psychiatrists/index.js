import { INDEX_D_Psychiatrists_Results } from "../../../../components/ORG/pages/doctors/second-page/dctr-psychiatrists/desktop/INDEX_D_Psychiatrists_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_DCTR_Psychiatrists_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_Psychiatrists_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )

}