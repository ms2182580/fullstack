import { useState } from "react"

export const useORGShouldFetch = () => {
  const [shouldFetch, setShouldFetch] = useState(false)

  return { shouldFetch, setShouldFetch }
}
