import { INDEX_D_OcuppationalTherapists_Results } from "../../../../components/ORG/pages/speech-therapists/second-page/st-ocuppational-therapists/desktop/INDEX_D_OcuppationalTherapists_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_ST_OcuppationalTherapists_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_OcuppationalTherapists_Results />
        </>
      ) : (
        <>{/* Mobile component. We dont have design for this in this path */}</>
      )}
    </>
  )
}