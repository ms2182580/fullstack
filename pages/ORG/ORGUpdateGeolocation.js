import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const ORGUpdateGeolocation = (props) => {
  
  const router = useRouter()

  useEffect(() => {
    // const getLocalStorage = localStorage.getItem("INCLUSIVE")
    // const {isLogged, matchRegex} = checkIfAnyLogged()
    // console.log('isLogged, matchRegex:', isLogged, matchRegex)
    
    // *This work
    // const actualCity = props.actualLocation.city
    // const nearbyCities = props.nearbyCities.map(x => x.city)
    
    // console.log('isLogged, matchRegex:', isLogged, matchRegex)
    
    // if(isLogged){
    //   // const getLocalStorage = localStorage.getItem(matchRegex[0])
    //   // const addedLocations = JSON.parse(getLocalStorage)
      
    //   // addedLocations.actualLocation = actualCity
      
    //   // addedLocations.nearbyCities = nearbyCities
      
    //   // localStorage.setItem(matchRegex, JSON.stringify(addedLocations))
    //   // router.push("/ORGSpeechTherapiests")
    // }
    
    // const browserLocation = JSON.stringify([{actualLocation:actualCity, nearbyCities:nearbyCities}])
    
    // localStorage.setItem("INCLUSIVE_BROWSER_LOCATION", browserLocation)
    
    
    
    
    
    
    
    // console.log("props:", props)
    // const {city, country} = props.data
    // console.log('city, country:', city, country)
    // const newObj = {city, country}
    // console.log('newObj:', JSON.stringify(newObj))
    // localStorage.setItem("INCLUSIVE_GEOLOCATION", JSON.stringify(newObj))
    
  }, [])

  return (
    <>
      <h1>It looks like no one is logged. Visit <Link href="/signup">login (signup for now really)</Link></h1>
      
    </>
  )
}

export default ORGUpdateGeolocation

// export async function getServerSideProps() {
//   /* 50.000 CALLS PER MONTH */
//   // *Get actual city [START]
//   // let actualLocation
//   // try {
//   //   const res = await fetch(`${process.env.ENDOPOINT_CURRENT_LOCATION}${process.env.API_KEY}`)
//   //   actualLocation = await res.json()
//   // } catch (error) {
//   //   console.log("error:", error)
//   //   actualLocation = `actualLocation has an error,"${error}" `
//   // }
//   // *Get actual city [END]

//   /* 1.000 CALLS A DAY */
//   // *Cities arround the actual location [START]
//   // const cityToSearch = actualLocation.city
//   //   .split(" ")
//   //   .map((x) => x[0].toUpperCase() + x.slice(1))
//   //   .join("_")
//   // console.log("cityToSearch:", cityToSearch)

//   // const wikibaseName = await fetch(
//   //   `${process.env.ENDPOINT_WIKI_ID}${cityToSearch}`
//   // )
//   // const wikibaseToJson = await wikibaseName.json()
//   // const wikibaseCode =
//   //   wikibaseToJson.query.pages[Object.keys(wikibaseToJson.query.pages)[0]]
//   //     .pageprops.wikibase_item

//   // const options = {
//   //   method: "GET",
//   //   headers: {
//   //     "X-RapidAPI-Key": `${process.env.HEADERS_X_RAPIDAPI_KEY}`,
//   //     "X-RapidAPI-Host": `${process.env.HEADERS_X_RAPIDAPI_HOST}`
//   //   }
//   // }

//   // let nearbyCities
//   // try {
//   //   const fetchNearbyCities = await fetch(
//   //     `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikibaseCode}/nearbyCities?radius=100`,
//   //     options
//   //   )
//   //   nearbyCities = await fetchNearbyCities.json()
//   // } catch (error) {
//   //   nearbyCities = `has an error, "${error}"`
//   // }
//   // *Cities arround the actual location [END]

//   // return {
//   //   props: {
//   //     actualLocation: {
//   //       ip: "152.172.21.252",
//   //       city: "Antofagasta",
//   //       region: "Antofagasta",
//   //       country: "CL",
//   //       loc: "-23.6524,-70.3954",
//   //       org: "AS7418 TELEFÓNICA CHILE S.A.",
//   //       postal: "1240000",
//   //       timezone: "America/Santiago"
//   //     },
//   //     nearbyCities: [
//   //       {
//   //         id: 3063700,
//   //         wikiDataId: "Q1264951",
//   //         type: "CITY",
//   //         city: "Dumbo",
//   //         name: "Dumbo",
//   //         country: "United States of America",
//   //         countryCode: "US",
//   //         region: "New York",
//   //         regionCode: "NY",
//   //         latitude: 40.70257,
//   //         longitude: -73.99045,
//   //         population: 1139,
//   //         distance: 0.53
//   //       },
//   //       {
//   //         id: 3305350,
//   //         wikiDataId: "Q4722594",
//   //         type: "CITY",
//   //         city: "Alfred E. Smith Houses",
//   //         name: "Alfred E. Smith Houses",
//   //         country: "United States of America",
//   //         countryCode: "US",
//   //         region: "New York",
//   //         regionCode: "NY",
//   //         latitude: 40.711,
//   //         longitude: -73.999,
//   //         population: 0,
//   //         distance: 0.76
//   //       },
//   //       {
//   //         id: 3447536,
//   //         wikiDataId: "Q1574299",
//   //         type: "CITY",
//   //         city: "Two Bridges",
//   //         name: "Two Bridges",
//   //         country: "United States of America",
//   //         countryCode: "US",
//   //         region: "New York",
//   //         regionCode: "NY",
//   //         latitude: 40.7108,
//   //         longitude: -73.9969,
//   //         population: 0,
//   //         distance: 0.76
//   //       },
//   //       {
//   //         id: 3313496,
//   //         wikiDataId: "Q6422069",
//   //         type: "CITY",
//   //         city: "Knickerbocker Village",
//   //         name: "Knickerbocker Village",
//   //         country: "United States of America",
//   //         countryCode: "US",
//   //         region: "New York",
//   //         regionCode: "NY",
//   //         latitude: 40.7115,
//   //         longitude: -73.9944,
//   //         population: 0,
//   //         distance: 0.85
//   //       },
//   //       {
//   //         id: 3097578,
//   //         wikiDataId: "Q2900913",
//   //         type: "CITY",
//   //         city: "Downtown Brooklyn",
//   //         name: "Downtown Brooklyn",
//   //         country: "United States of America",
//   //         countryCode: "US",
//   //         region: "New York",
//   //         regionCode: "NY",
//   //         latitude: 40.6937,
//   //         longitude: -73.9859,
//   //         population: 7053,
//   //         distance: 0.86
//   //       }
//   //     ]
//   //   }
//   // }
// }
