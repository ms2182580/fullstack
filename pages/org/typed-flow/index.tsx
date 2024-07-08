// import { INDEX_TypedFlow_D } from "@/components/org/typed-flow/desktop/INDEX_TypedFlow_D"
// import { INDEX_TypedFlow_M } from "@/components/org/typed-flow/mobile/INDEX_TypedFlow_M"
import { useWidthSize } from "@/utils/useWidthSize"
import dynamic from "next/dynamic"

const INDEX_TypedFlow_D = dynamic(
  () =>
    import("@/components/org/typed-flow/desktop/INDEX_TypedFlow_D").then(
      (mod) => mod.INDEX_TypedFlow_D
    ),
  {
    ssr: false,
  }
)
const INDEX_TypedFlow_M = dynamic(
  () =>
    import("@/components/org/typed-flow/mobile/INDEX_TypedFlow_M").then(
      (mod) => mod.INDEX_TypedFlow_M
    ),
  {
    ssr: false,
  }
)
export default function INDEX_TypedFlow_Results_D() {
  // const { isMobile }: any = useCheckUserWidth()
  const { isMobile } = useWidthSize()
  /* 
  - ❔If the user arrive here after completing the welcome path, should be move to pathname/org/ with a focus on the corresponding input to type // What does this mean?
  !FH
  - The only way to enter safetely here after finish the welcome path is by the ORG inputs at second page or navigation bar
  */

  return (
    <>{isMobile ? <>{/* <INDEX_TypedFlow_M /> */}</> : <INDEX_TypedFlow_D />}</>
  )
}
