import { Signup_N_Form } from "@/components/signup/desktop/Signup_N_Form"
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
          <Signup_N_Form />
        </>
      )}
    </>
  )
}

export default Signup
