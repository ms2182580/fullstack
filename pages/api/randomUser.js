import fetch from "node-fetch"

export default async function handler(req, res) {
  const { results = 3, pagination = 1 } = req.query

  try {
    const url = `https://randomuser.me/api/?results=${results}&nat=us&page=${pagination}`
    const response = await fetch(url)
    const data = await response.json()

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}
