import { INDEX_D_Signup } from "@/components/signup/desktop/INDEX_D_Signup"
import { INDEX_M_Signup } from "@/components/signup/mobile/INDEX_M_Signup"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"

const Signup = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <>
      {isMobile ? (
        <>
          <INDEX_M_Signup />
        </>
      ) : (
        <>
          <INDEX_D_Signup />
        </>
      )}
    </>
  )
}

export default Signup
