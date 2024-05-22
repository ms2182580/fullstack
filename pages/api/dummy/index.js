import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import express from "express"
import { dummy_data } from "./dummy_data"

const app = express()
app.disable("x-powered-by")

export default function handler(req, res) {
  res.status(200).json({
    [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]: dummy_data,
  })
}
