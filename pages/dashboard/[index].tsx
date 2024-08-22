import { useRouter } from "next/router"

export default function Index_Dashboard_Sections() {
  const { asPath } = useRouter()

  return <div>Index_Signup_Steps - {asPath}</div>
}
