import { useEffect, useState } from "react"
import {
  ORG_Filterdata_Distance,
  ORG_Filterdata_Rating
} from "./ORG_Filterdata"

export const useFetch = (url, pagination) => {
  const [data, setData] = useState({})
  const [shouldRetrieveFilters, setShouldRetrieveFilters] = useState(false)
  const [dataFilter, setDataFilter] = useState([])
  const [shouldAddFilters, setShouldAddFilters] = useState(false)
  useEffect(() => {
    fetch(`${url}${pagination}`)
      .then((x) => x.json())
      .then((x) => {
        setData({
          actualPage: x.info.page,
          allData: x.results
        })
        setShouldRetrieveFilters(true)
      })
  }, [url, pagination])

  // console.log("data:", data)

  useEffect(() => {
    if (shouldRetrieveFilters) {
      let howMuchGet = data.allData.length
      for (let index = 0; index < howMuchGet; index++) {
        const distance = ORG_Filterdata_Distance()
        const rating = ORG_Filterdata_Rating()
        // setDataFilter({ [indexData]: { distance: distance, rating: rating } })
        setDataFilter((prevState) => [
          ...prevState,
          { distance: distance, rating: rating }
        ])
      }
      // console.log("data:", data)
      // console.log("dataFilter:", dataFilter)
      // console.log("✨ FINISH")
    }
    // console.log("data:", data)
    // console.log("dataFilter:", dataFilter)
    // console.log("✨ FINISH")
  }, [shouldRetrieveFilters])

  useEffect(() => {
    // console.log("dataFilter:", dataFilter)
    //   console.log("💖FINAL data:", data)
    // console.log("shouldAddFilters:", shouldAddFilters)
    if (dataFilter.length !== 0) {
      // console.log("Combine all!")
      // console.log("dataFilter:", dataFilter)
      // console.log("💖FINAL data:", data)
      setData((prevState) => ({
        ...prevState,
        dataFilter
      }))
    }
  }, [dataFilter])

  // console.log("dataFilter:", dataFilter)

  // console.log("💖FINAL data:", data)
  
  
  useEffect(() => {
    // console.log('data:', data)
  
  }, [data])
  
  return { data }
}
