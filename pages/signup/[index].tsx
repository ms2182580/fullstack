import { Signup_D_Steps } from "@/components/signup/desktop/Signup_D_Steps"
import { INDEX_M_Signup } from "@/components/signup/mobile/INDEX_M_Signup"
import { useWidthSize } from "@/utils/useWidthSize"

export default function Index_Signup_Steps() {
  const { isMobile } = useWidthSize()

  if (isMobile === undefined) return null

  return (
    <>
      {isMobile ? (
        <>
          <INDEX_M_Signup />
        </>
      ) : (
        <>
          <Signup_D_Steps />
        </>
      )}
    </>
  )
}
