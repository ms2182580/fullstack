import { useEffect, useState } from "react"

export const useFetchData = () => {
  const [data, setData] = useState<null | object[]>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/dummy")
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return data
}
