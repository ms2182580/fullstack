type ORG_Sortby_Desktop_Props = {
  data: string[]
  default: string
}

export const ORG_Sortby_Desktop: ORG_Sortby_Desktop_Props = {
  data: ["Distance", "Rating", "Review count"],
  default: "Most Relevant",
}

export const ORG_Sortby_Mobile = {
  data: ["Nearest", "Highest Rating", "Review count"],
  default: "Nearest",
}
