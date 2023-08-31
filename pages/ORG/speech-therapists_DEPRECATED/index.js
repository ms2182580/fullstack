import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ORG_SpeechTherapists_INDEX() {
  const { push } = useRouter()
  useEffect(() => {
    push("/404")
  }, [])

  return (<></>)

}

