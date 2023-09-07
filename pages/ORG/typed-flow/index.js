import { useRouter } from "next/router"

export default function Page() {

  const router = useRouter()
  console.log('router:', router)


  return (
    <>
      <h1>Typed Flow Here, without []</h1>
    </>
  )
}