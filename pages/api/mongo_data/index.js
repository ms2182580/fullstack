import express from "express"
import { mongoData } from "./mongo-data"

const app = express()
app.disable("x-powered-by")

/* 
!FH0
Create random keys for the records from the API
*/

export default function fetchMongoData(req, res) {
  res.status(200).json(mongoData)
}
