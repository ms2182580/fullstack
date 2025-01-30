import express from "express"
import { mongoData } from "./mongo-data"

const app = express()
app.disable("x-powered-by")

export default function fetchMongoData(req, res) {
  res.status(200).json(mongoData)
}
