export const ORG_FILTERS_DATA = Object.freeze({
  agesServed: [
    "0-18 months",
    "2-3 years",
    "4-5 years",
    "6-11 years",
    "12-21 years",
    "22-40 years",
    "41-64 years",
    "65+ years"
  ],
  distance: ["0-5", "5-10", "10-20", "20+"],
  diagnosis: ["Autism (ASD)", "ADHD", "Down Syndrome", "Cerebral Palsy", "Fragile X", "Other"],
  viewOnly: ["Accepting new patients", "Conducts evaluations"],
  insurance: ["Medicaid", "Insurance", "Private Pay", "DOE approved", "BCBS", "Aetna"],
  meetingFormat: ["Virtual", "In-Person"],
  serviceSetting: ["Clinic", "Home", "School", "Community"],
  sessionType: ["Individual", "Group"],
  languages: ["English", "Spanish", "Chinese", "Tagalog", "French"],
  providerType: ["Independent", "Agency-based", "Traveling"]
})

export const ORG_FILTERS_KEYS = Object.freeze({
  agesServed: { titleToShow: "Ages Served", updateState: "agesServed" },
  diagnosis: { titleToShow: "Diagnosis", updateState: "diagnosis" },
  distance: { titleToShow: "Distance", updateState: "distance" },
  insurance: { titleToShow: "Insurance", updateState: "insurance" },
  language: { titleToShow: "Language", updateState: "language" },
  meetingFormat: { titleToShow: "Meeting Format", updateState: "meetingFormat" },
  providerType: { titleToShow: "Provider Type", updateState: "providerType" },
  rating: { titleToShow: "Rating", updateState: "rating" },
  reviews: { titleToShow: "Reviews", updateState: "reviews" },
  serviceSetting: { titleToShow: "Service Setting", updateState: "serviceSetting" },
  sessionType: { titleToShow: "Session Type", updateState: "sessionType" },
  viewOnly: { titleToShow: "View Only", updateState: "viewOnly" },
  yearsOfPractice: { titleToShow: "Years Of Practice", updateState: "yearsOfPractice" }
})
