export default async function handler(req, res) {
  const { results = 7, pagination = 1, whichOne } = req.query

  try {
    const url = `https://randomuser.me/api/?results=${results}&nat=us&page=${pagination}`
    const response = await fetch(url)
    // console.log('🟩response:', response)
    const data = await response.json()
    // console.log('🟩data:', data)

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.status(200).json(data)
  } catch (error) {
    console.error("error, whichOne:", error, whichOne)
    res.status(500).json({ message: `Internal server error ❌, ${whichOne}` })
  }
}



/* 

3 → ORG Landing page | useFetch
4 → Mobile           | useFetch
5 → No Filters       | useFetch
7 → From api         | fetch → native
6 → Filters          | FetchFiltered

*/