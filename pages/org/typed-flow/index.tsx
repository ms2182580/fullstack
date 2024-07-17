import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useFetchData } from "@/utils/org/useFetchData"
import dynamic from "next/dynamic"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
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
  const { pathname } = useRouter()

  const { push } = useNavigation()

  const { setReachTypedFlow, reachTypedFlow, inputTypesByUser }: any =
    useSessionStorage_typedFlow()

  if (inputTypesByUser === "") {
    push(`/${ALL_ROUTES.ORG}`)
    return null
  }

  useEffect(() => {
    setReachTypedFlow(true)
  }, [pathname])

  /*
  useEffect(() => {
    console.log("reachTypedFlow:", reachTypedFlow)
  }, [reachTypedFlow])

  useEffect(() => {
    console.log("reachTypedFlow:", reachTypedFlow)
  }, [])
  */

  const theData = useFetchData()

  return <INDEX_TypedFlow_D allBackendData={theData} />
}
