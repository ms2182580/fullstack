import { trpc } from "@/utils/trpc"
import { NamesCategories_KEY } from "../categories/general/ALL_DATA"

// This «real_subcategories» come from the data that was upload to the database. In this case from this spreadsheet file: https://docs.google.com/spreadsheets/d/1iSR8OjQsdNOPzYV-xnC3q4fBRkyBbxZ7/edit?usp=sharing&ouid=114320986910518042243&rtpof=true&sd=true
const real_subCategories = {
  "Aquatic therapy / Aquatic therapists":
    "Aquatic therapy / Aquatic therapists",
  "Audiological therapy/ Audiologists": "Audiological therapy/ Audiologists",
  "Chelation therapy (Heavy metal removal)":
    "Chelation therapy (Heavy metal removal)",
  "Craniosacral Therapy": "Craniosacral Therapy",
  "Educative Therapy": "Educative Therapy",
  "Equine therapy": "Equine therapy",
  "Hand therapy": "Hand therapy",
  "Horse Physical Therapy": "Horse Physical Therapy",
  Kenesiotherapy: "Kenesiotherapy",
  "Lymphedema therapy (Massages to help circulation)":
    "Lymphedema therapy (Massages to help circulation)",
  "Mesotherapy Treatment": "Mesotherapy Treatment",
  "Music therapy": "Music therapy",
  Myotherapy: "Myotherapy",
  "Occupational Therapy": "Occupational Therapy",
  "Oncology Massage Therapy": "Oncology Massage Therapy",
  "Physical Therapy": "Physical Therapy",
  "Polarity Therapy": "Polarity Therapy",
  "Relaxation Therapy": "Relaxation Therapy",
  "Respiratory Therapy": "Respiratory Therapy",
  "Speech Therapy": "Speech Therapy",
  "TMJ Treatment (Jaw issue, stiffness treatment)":
    "TMJ Treatment (Jaw issue, stiffness treatment)",
  "Vision therapy  ": "Vision therapy  ",
}

type Props = {
  getAllSubcategories?: boolean
  howMuch?: number
}

/* 
!FH0
Make this work for every category
*/
export const getMentalHealth = ({
  getAllSubcategories = false,
  howMuch = 3,
}: Props) => {
  if (!getAllSubcategories) {
    const firstDataFromDatabase = trpc.mentalHealth.getAll.useQuery({
      limit: howMuch,
      filter: {
        recordSubtype:
          real_subCategories["Aquatic therapy / Aquatic therapists"],
      },
    })

    return {
      category: NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"],
      subcategories: [
        {
          subcategoryName:
            real_subCategories["Aquatic therapy / Aquatic therapists"],
          data: firstDataFromDatabase.data,
        },
      ],
    }
  }

  let allSubcategories = Object.values(real_subCategories).map((x) => {
    let getData = trpc.mentalHealth.getAll.useQuery({
      limit: howMuch,
      filter: {
        recordSubtype: x,
      },
    })

    return { subcategoryName: x, data: getData.data }
  })

  return {
    category: NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"],
    subcategories: allSubcategories,
  }
}
