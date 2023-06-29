export const ORG_FILTERS_DATA_D = Object.freeze({
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
  diagnosis: ["Autism (ASD)", "ADHD", "Down Syndrome", "Cerebral Palsy", "Fragile X", "Other"],
  distance: ["0-5", "5-10", "10-20", "+20"],
  insurance: ["Medicaid", "Insurance", "Private Pay", "DOE approved", "BCBS", "Aetna", "Contract"],
  languages: ["English", "Spanish", "Chinese", "Tagalog", "French"],
  meetingFormat: ["Virtual", "In-Person"],
  providerType: ["Independent", "Agency-based", "Traveling"],
  serviceSetting: ["Clinic", "Home", "School", "Community"],
  sessionType: ["Individual", "Group"],
  viewOnly: ["Accepting new patients", "Conducts evaluations"],
  yearsOfPractice: ["1+ Years", "3+ Years", "5+ Years", "7+ Years", "10+ Years"]
})

export const ORG_FILTERS_KEYS_D = Object.freeze({
  agesServed: { titleToShow: "Ages Served", updateState: "agesServed" },
  diagnosis: { titleToShow: "Diagnosis", updateState: "diagnosis", titleToShowCard: "Practice areas" },
  distance: { titleToShow: "Distance", updateState: "distance" },
  insurance: { titleToShow: "Insurance", updateState: "insurance", titleToShowCard: "Payment options" },
  language: { titleToShow: "Language", updateState: "language" },
  meetingFormat: { titleToShow: "Meeting Format", updateState: "meetingFormat" },
  providerType: { titleToShow: "Provider Type", updateState: "providerType" },
  rating: { titleToShow: "Rating", updateState: "rating" },
  reviews: { titleToShow: "Reviews", updateState: "reviews" },
  serviceSetting: { titleToShow: "Setting", updateState: "serviceSetting" },
  sessionType: { titleToShow: "Session Type", updateState: "sessionType" },
  viewOnly: { titleToShow: "View Only", updateState: "viewOnly" },
  yearsOfPractice: {
    titleToShow: "Years Of Practice",
    updateState: "yearsOfPractice",
    titleToShowCard: "Practicing since"
  }
})


export const ORG_FILTERS_DATA_M = Object.freeze({
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

  diagnosis: ["Autism (ASD)", "ADHD", "Down Syndrome", "Cerebral Palsy", "Fragile X", "Other"],
  distance: ["0-5", "5-10", "10-20", "+20"],
  insurance: ["Medicaid", "Insurance", "Private Pay", "DOE approved", "BCBS", "Aetna", "Contract"],
  languages: ["English", "Spanish", "Chinese", "Tagalog", "French"],
  meetingFormat: ["Virtual", "In-Person"],
  providerType: ["Independent", "Agency-based", "Traveling"],
  rating: ["1", "2", "3", "4", "5"],
  serviceSetting: ["Clinic", "Home", "School", "Community"],
  sessionType: ["Individual", "Group"],
  transportation: ["Near Metro", "Near Bus", "Meter Parking", "Street Parking", "Parking lot"],
  viewOnly: ["Accepting new patients", "Conducts evaluations"],
  yearsOfPractice: ["1+ Years", "3+ Years", "5+ Years", "7+ Years", "10+ Years"],

})

export const ORG_FILTERS_KEYS_M = Object.freeze({
  agesServed: { titleToShow: "Ages Served", updateState: "agesServed" },
  diagnosis: { titleToShow: "Diagnosis", updateState: "diagnosis", titleToShowCard: "Practice areas" },
  distance: { titleToShow: "Distance", updateState: "distance" },
  insurance: { titleToShow: "Insurance", updateState: "insurance", titleToShowCard: "Payment options" },
  language: { titleToShow: "Language", updateState: "language" },
  meetingFormat: { titleToShow: "Meeting Format", updateState: "meetingFormat" },
  providerType: { titleToShow: "Provider Type", updateState: "providerType" },
  rating: { titleToShow: "Rating", updateState: "rating" },
  reviews: { titleToShow: "Reviews", updateState: "reviews" },
  serviceSetting: { titleToShow: "Setting", updateState: "serviceSetting" },
  sessionType: { titleToShow: "Session Type", updateState: "sessionType" },
  transportation: { titleToShow: "Transportation", updateState: "transportation" },
  viewOnly: { titleToShow: "View Only", updateState: "viewOnly" },
  yearsOfPractice: {
    titleToShow: "Years Of Practice",
    updateState: "yearsOfPractice",
    titleToShowCard: "Practicing since"
  }
})
