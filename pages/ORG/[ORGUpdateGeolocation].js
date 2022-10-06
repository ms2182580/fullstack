import { useEffect } from "react"
import { useRouter } from "next/router"

const ORGUpdateGeolocation = (props) => {
  const router = useRouter()

  useEffect(() => {
    // console.log("props:", props)
    
    const {city, country} = props.data
    // console.log('city, country:', city, country)
    const newObj = {city, country}
    // console.log('newObj:', JSON.stringify(newObj))

    localStorage.setItem("INCLUSIVE_GEOLOCATION", JSON.stringify(newObj))

    router.push("/ORG")
  }, [])

  // return (
  //   <div>
  //     <div>⌛</div>
  //   </div>
  // )
}

export default ORGUpdateGeolocation

export async function getServerSideProps() {
  // try {
  //   const res = await fetch(`https://ipinfo.io/json?token=${process.env.API_KEY}`)
  //   const data = await res.json()
  //   // console.log('data:', data)
  //   // localStorage.setItem("INCLUSIVE_GEOLOCATION", )

  // } catch (error) {
  //   console.log("error:", error)
  //   setErrorCity(`The error is "${error}"`)
  // }

  // const res = await fetch(`https://ipinfo.io/json?token=${process.env.API_KEY}`)
  // const data = await res.json()
  // const data = "Work"

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
      }
    }
  }
}
