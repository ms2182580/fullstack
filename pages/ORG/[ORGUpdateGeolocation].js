import { useEffect } from "react"
import { useRouter } from "next/router"

const ORGUpdateGeolocation = (props) => {
  const router = useRouter()

  console.log("props:", props)

  useEffect(() => {
    // console.log("props:", props)
    // const {city, country} = props.data
    // console.log('city, country:', city, country)
    // const newObj = {city, country}
    // console.log('newObj:', JSON.stringify(newObj))
    // localStorage.setItem("INCLUSIVE_GEOLOCATION", JSON.stringify(newObj))
    // router.push("/ORG")
  }, [])

  // return (
  //   <div>
  //     <div>⌛</div>
  //   </div>
  // )
}

export default ORGUpdateGeolocation

export async function getServerSideProps() {  
  /* 50.000 CALLS PER MONTH */
  // *Get actual city [START]
  // const res = await fetch(`${process.env.ENDOPOINT_CURRENT_LOCATION}${process.env.API_KEY}`)
  // const data = await res.json()
  // *Get actual city [END]

  /* 1.000 CALLS A DAY */
  // *Cities arround the actual location [START]
  // const cityToSearch = data.city
  //   .split(" ")
  //   .map((x) => x[0].toUpperCase() + x.slice(1))
  //   .join("_")
  // console.log("cityToSearch:", cityToSearch)

  // const wikibaseName = await fetch(
  //   `${process.env.ENDPOINT_WIKI_ID}${cityToSearch}`
  // )
  // const wikibaseToJson = await wikibaseName.json()
  // const wikibaseCode =
  //   wikibaseToJson.query.pages[Object.keys(wikibaseToJson.query.pages)[0]]
  //     .pageprops.wikibase_item

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": `${process.env.HEADERS_X_RAPIDAPI_KEY}`,
  //     "X-RapidAPI-Host": `${process.env.HEADERS_X_RAPIDAPI_HOST}`
  //   }
  // }

  // let nearbyCities
  // try {
  //   const fetchNearbyCities = await fetch(
  //     `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikibaseCode}/nearbyCities?radius=100`,
  //     options
  //   )
  //   nearbyCities = await fetchNearbyCities.json()
  // } catch (error) {
  //   nearbyCities = `has an error, "${error}"`
  // }
  // *Cities arround the actual location [END]

  return {
    props: {
      data: {
        ip: "152.172.21.252",
        city: "Antofagasta",
        region: "Antofagasta",
        country: "CL",
        loc: "-23.6524,-70.3954",
        org: "AS7418 TELEFÓNICA CHILE S.A.",
        postal: "1240000",
        timezone: "America/Santiago"
      },
      nearbyCities:["someObbj"]
    }
  }
}

