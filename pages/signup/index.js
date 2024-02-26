import { INDEX_D_Signup_Form } from "@/components/signup/desktop/INDEX_D_Signup_Form"
import { INDEX_M_Signup } from "@/components/signup/mobile/INDEX_M_Signup"
import { useCheckUserWidth } from "@/context/CheckUserWidth"

const Signup = () => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      {isMobile ? (
        <>
          <INDEX_M_Signup />
        </>
      ) : (
        <>
          <INDEX_D_Signup_Form />
        </>
      )}
    </>
  )
}

export default Signup
