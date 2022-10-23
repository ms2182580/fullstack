import { useEffect } from "react"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { supabase } from "../../../utils/supabaseClient"

// const getData = async () => {
//   let { data: first_250, error } = await supabase
//     .from("first_250")
//     .select("*")
//     .range(0, 9)

//   return {first_250, error}
// }

const ORGSpeechTherapistsDeepest = () => {
  const { keywordsContext, citiesContext } = useORG_InputCtx()
  console.log('keywordsContext, citiesContext:', keywordsContext, citiesContext)
  // console.log('keywordsToSearch:', keywordsToSearch)

  // const dataSupabase = getData().then(x => console.log(x))
  // console.log("dataSupabase:", dataSupabase)
  // useEffect(() => {
  //   const databaseSupabase = async () => {
  //     // const retrieveData = await getData()
  //     // console.log('retrieveData:', retrieveData)

  //     let { data: first_250, error } = await supabase
  //       .from("first_250")
  //       .select("*")
  //       .range(0, 9)
  //      console.log(first_250, error)
        
  //   }
  //   databaseSupabase()
  // }, [])

  return <div>ORGSpeechTherapistsDeepest</div>
}

export default ORGSpeechTherapistsDeepest
