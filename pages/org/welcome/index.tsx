import { INDEX_Welcome_D } from "@/components/org/welcome/desktop/INDEX_Welcome_D"
import { trpc } from "@/utils/trpc"

export default function INDEX_Welcome_D_Page() {
  const test = trpc.camp.getAll.useQuery()
  // console.log("🟥", test, typeof test)

  if (test.data) {
    test?.data.map((x) => console.log(x))
    console.log(test.data, test.status, test.trpc)
    console.log("test:", test)
  }

  if (!test.data) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <INDEX_Welcome_D />
      </>
    )
  }
}
