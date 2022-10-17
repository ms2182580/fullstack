import { useEffect } from "react"
import { useORG_KeywordsCtx } from "../../../context/ORG_Keywords"
import { supabase } from "../../../utils/supabaseClient"

// const getData = async () => {
//   let { data: first_250, error } = await supabase
//     .from("first_250")
//     .select("*")
//     .range(0, 9)

//   return {first_250, error}
// }

const ORGSpeechTherapiestsDeepest = () => {
  const { keywordsToSearch } = useORG_KeywordsCtx()
  // console.log('keywordsToSearch:', keywordsToSearch)

  // const dataSupabase = getData().then(x => console.log(x))
  // console.log("dataSupabase:", dataSupabase)
  useEffect(() => {
    const databaseSupabase = async () => {
      // const retrieveData = await getData()
      // console.log('retrieveData:', retrieveData)

      let { data: first_250, error } = await supabase
        .from("first_250")
        .select("*")
        .range(0, 9)
       console.log(first_250, error)
        
    }
    databaseSupabase()
  }, [])

  return <div>ORGSpeechTherapiestsDeepest</div>
}

export default ORGSpeechTherapiestsDeepest
