/* @/pages/api/mongo_data/index.js */
import express from "express"
import { categoryData, recordData } from "./mongo-data"

const app = express()
app.disable("x-powered-by")

// export const fetchRecordData = (req, res) => {
//   res.status(200).json(recordData)
// }

// export const fetchCategoryData = (req, res) => {
//   res.status(200).json(categoryData)
// }

app.get("/api/mongo_data/record", (req, res) => {
  res.status(200).json(recordData)
})

app.get("/api/mongo_data/category", (req, res) => {
  res.status(200).json(categoryData)
})

export default function handler(req, res) {
  const { type } = req.query

  if (type === "record") {
    return res.status(200).json(recordData)
  } else if (type === "category") {
    return res.status(200).json(categoryData)
  }

  return res.status(400).json({ error: "Invalid type parameter" })
}
