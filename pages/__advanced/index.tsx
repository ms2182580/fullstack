import Link from "next/link"
import { useRouter } from "next/router"

export default function Index_ADVANCED() {
  const { pathname } = useRouter()

  return (
    <div style={{ padding: "5vw" }}>
      <h1>Advanced features here</h1>

      <ul style={{ fontSize: "3rem" }}>
        <li>
          <Link href={`${pathname}/editor`}>editor</Link>
        </li>
      </ul>
    </div>
  )
}
