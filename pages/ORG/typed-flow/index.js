// import { INDEX_TypedFlow_D } from "../../../components/org/pages/typed-flow/desktop/INDEX_TypedFlow_D"
import { INDEX_TypedFlow_D } from "@/components/org/typed-flow/desktop/INDEX_TypedFlow_D"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"

export default function INDEX_TypedFlow_Results_D() {
  const { isMobile } = useCheckUserWidth()
  /* 
  - ❔If the user arrive here after completing the welcome path, should be move to pathname/org/ with a focus on the corresponding input to type // What does this mean?
  !FH
  - The only way to enter safetely here after finish the welcome path is by the ORG inputs at second page or navigation bar
  */

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_TypedFlow_D />
        </>
      ) : (
        <>{/* Mobile version here! */}</>
      )}
    </>
  )
}
