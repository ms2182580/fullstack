import { INDEX_D_FamilyMedicine_Results } from "../../../../components/ORG/pages/doctors/second-page/dctr-family-medicine/desktop/INDEX_D_FamilyMedicine_Results";
import { useCheckUserWidth } from "../../../../context/CheckUserWidth";

export default function ORG_INDEX_DCTR_FamilyMedicine_Results() {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_FamilyMedicine_Results />

        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}