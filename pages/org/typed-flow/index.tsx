import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useFetchData } from "@/utils/org/useFetchData"
import dynamic from "next/dynamic"
import { useEffect } from "react"

const INDEX_TypedFlow_D = dynamic(
  () =>
    import("@/components/org/typed-flow/desktop/INDEX_TypedFlow_D").then(
      (mod) => mod.INDEX_TypedFlow_D
    ),
  {
    ssr: false,
  }
)
// const INDEX_TypedFlow_M = dynamic(
//   () =>
//     import("@/components/org/typed-flow/mobile/INDEX_TypedFlow_M").then(
//       (mod) => mod.INDEX_TypedFlow_M
//     ),
//   {
//     ssr: false,
//   }
// )
export default function INDEX_TypedFlow_Results_D() {
  const { setReachTypedFlow }: any = useSessionStorage_typedFlow()

  useEffect(() => {
    setReachTypedFlow(true)
  }, [])

  const theData = useFetchData()

  return <INDEX_TypedFlow_D allBackendData={theData} />
}
