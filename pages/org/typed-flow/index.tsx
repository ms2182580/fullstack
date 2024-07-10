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
  return <INDEX_TypedFlow_D />
}
