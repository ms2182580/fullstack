import { useEffect, useState } from "react"
import { HyperlinkM } from "../../components/ui/hyperlink/HyperlinkFonts"
import ORGFirstTime from "./[ORGUpdateGeolocation]"
import { useORG_KeywordsCtx } from "../../context/ORG_Keywords"

const ORG = () => {
  const [geolocationLocalStorage, setGeolocationLocalStorage] = useState(null)
  const { setKeywordsToSearch } = useORG_KeywordsCtx()

  useEffect(() => {
    if (localStorage.getItem("INCLUSIVE_GEOLOCATION") !== null) {
      setGeolocationLocalStorage("Have geolocation")
    } else {
      setGeolocationLocalStorage(null)
    }
  }, [geolocationLocalStorage])

  const handleKeywords = (e) => {
    setKeywordsToSearch(e.target.value)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);

      // console.log(`http://getnearbycities.geobytes.com/GetNearbyCities?radius=500&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&limit=500`)

      // const fetchNearbyCity = fetch(`http://getnearbycities.geobytes.com/GetNearbyCities?radius=500&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&limit=500`)
      // const toJson = fetchNearbyCity.json()
      // console.log('toJson:', toJson)

    //   fetch(
    //     `http://getnearbycities.geobytes.com/GetNearbyCities?radius=500&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&limit=5`
    //   )
    //     .then((x) => x.json())
    //     .then((x) => console.log(x))
    //     .catch((err) => console.log(err))
    // })
      // fetch(
      //   `http://gd2.geobytes.com/GetNearbyCities?radius=100&Latitude=${position.coords.latitude}&Longitude=${position.coords.longitude}&limit=5`
      // )
      //   .then((x) => x.json())
      //   .then((x) => console.log(x))
      //   .catch((err) => console.log(err))
      
      
      
      // ? This works but... not very well.
      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': '44afef096cmshe66ed7bc69592b3p18d5acjsn94eb5f04312a',
      //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      //   }
      // };
      
      // fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${position.coords.latitude}${position.coords.longitude}/nearbyCities?radius=100&limit=10`, options)
      //   .then(response => response.json())
      //   .then(response => console.log(response))
      //   .catch(err => console.error(err));
      
        
        
        
        
    })
  }, [])

  return (
    <>
      <h1>ORG Father component</h1>

      <input type="text" onChange={handleKeywords} />

      {geolocationLocalStorage === null ? (
        <HyperlinkM
          href={"/ORG/UpdateGeolocation"}
          name="To next phase (not have geolocation)"
        />
      ) : (
        <button>
          <HyperlinkM
            href={"/ORGSpeechTherapiests"}
            name="To next phase (have geolocation)"
          />
        </button>
      )}
    </>
  )
}

export default ORG


