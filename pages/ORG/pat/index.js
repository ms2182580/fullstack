import { useRouter } from "next/router";
import { useEffect } from "react";

export default function INDEX_PAT() {
  const router = useRouter()

  useEffect(() => {
    router.push("/ORG")
  }, [])




}