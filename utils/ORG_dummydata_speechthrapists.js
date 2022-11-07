import { useEffect, useState } from "react"

export const useFetch = (url, pagination) => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`${url}${pagination}`)
      .then((x) => x.json())
      .then((x) => {
        setData({
          actualPage: x.info.page,
          allData: x.results
        })
      })
  }, [url, pagination])


  return {data}
}
