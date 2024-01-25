import csvtojson from "csvtojson"

const transformData = (item) => ({
  resourceId: item["Resource ID"],
  entryType: item["Entry type"],
  recordName: item["Record Name"],
  recordSubtitle: item["Record Subtitle"],
  /* 
  const filteredData = trpc.camp.getAll.useQuery({ limit: 3, filter: {listingType: "Day Camp"} })
  * The magic string "Day Camp" is the subcategory
  * Every subcategory is listed inside ALL_DATA object → "@/utils/org/categories/general/ALL_DATA"
  
   */
  listingType: item["Listing Type"],
  recordSubtype: item["Record Subtype"],
  recordSubtypeBreakdown: [
    item["Record Subtype breakdown 1"],
    item["Record Subtype breakdown 2"],
    item["Record Subtype breakdown 3"],
    item["Record Subtype breakdown 4"],
  ].filter(Boolean),
  usageOrServiceSettings: item["Usage or service settings"],

  /* 
  const filteredData = trpc.camp.getAll.useQuery({ limit: 3, filter: {address: {state: "NY"} }) 
  
  * Get only resources in the state of New York 
 
  */

  address: [
    {
      street: item["Street 1"],
      city: item["City 1"],
      state: item["State 1"],
      zipcode: item["Zipcode 1"],
      zipFour: item["Zip four 1"],
      county: item["County 1"],
      neighborhood: item["Neighborhood 1"],
      metroArea: item["Metro Area 1"],
      country: item["Country 1"],
    },
    {
      street: item["Street 2"],
      city: item["City 2"],
      state: item["State 2"],
      zipcode: item["Zipcode 2"],
      zipFour: item["Zip four 2"],
      county: item["County 2"],
      neighborhood: item["Neighborhood 2"],
      metroArea: item["Metro Area 2"],
      country: item["Country 2"],
    },
  ],

  verifiedUnverifiedResource: item["Verified/Unverified Resource"],
  price: item["Price"],
  listingDescription: item["Listing Description"],
  parentCompanyDescription: item["Parent company description"],

  sic: [
    { code: item["SIC Code 1"], description: item["SIC Code Description"] },
    { code: item["SIC Code 2"], description: item["SIC Codes Description 2"] },
  ],
  naics: [
    { code: item["NAICS Code"], description: item["NAICS Code Description"] },
    { code: item["NAICS 2"], description: item["NAICS 2 Description"] },
  ],

  onlinePresence: {
    email: item["Email"],
    telephoneNumber: item["Telephone Number"],
    website: item["Website"],
    twitter: item["Twitter"],
    linkedIn: item["LinkedIn"],
    facebook: item["Facebook"],
    instagram: item["Instagram"],
  },

  contactPerson: item["Contact Person"],
  languages: item["Languages"] ? item["Languages"].split(",") : [],
  agesServed: item["Ages Served"],
  servicesOffered: item["Services offered"]
    ? item["Services offered"].split(",")
    : [],
  diagnosisServed: item["Diagnosis Served"]
    ? item["Diagnosis Served"].split(",")
    : [],
  diagnosisNotServed: item["Diagnosis NOT Served"]
    ? item["Diagnosis NOT Served"].split(",")
    : [],
  symptomsSupported: item["Symptoms Supported"]
    ? item["Symptoms Supported"].split(",")
    : [],
  symptomsNotSupported: item["Symptoms NOT supported"]
    ? item["Symptoms NOT supported"].split(",")
    : [],
  supportedDDFunctionality: item["Supported DD Functionality"],
  wheelchairAccessible: item["Wheelchair accessible facility"] === "Yes",
  businessHours: {
    monday: { open: item["Monday Open"], close: item["Monday Close"] },
    tuesday: { open: item["Tuesday Open"], close: item["Tuesday Close"] },
    wednesday: { open: item["Wednesday Open"], close: item["Wednesday Close"] },
    thursday: { open: item["Thursday Open"], close: item["Thursday Close"] },
    friday: { open: item["Friday Open"], close: item["Friday Close"] },
    saturday: { open: item["Saturday Open"], close: item["Saturday Close"] },
    sunday: { open: item["Sunday Open"], close: item["Sunday Close"] },
  },
  pictures: [
    { url: item["Picture 1"], description: item["Picture 1 Description"] },
    { url: item["Picture 2"], description: item["Picture 2 Description"] },
    { url: item["Picture 3"], description: item["Picture 3 Description"] },
    { url: item["Picture 4"], description: item["Picture 4 Description"] },
    { url: item["Picture 5"], description: item["Picture 5 Description"] },
  ].filter((picture) => picture.url),
  videos: { url: item["Video"], description: item["Video Description"] },
  reviews: [
    item["Review 1"],
    item["Review 2"],
    item["Review 3"],
    item["Review 4"],
    item["Review 5"],
    item["Review 6"],
    item["Review 7"],
    item["Review 8"],
    item["Review 9"],
  ].filter(Boolean),
  reviewTags: item["Review Tags"] ? item["Review Tags"].split(",") : [],
  ratings: [
    {
      value: item["Rating Value 1"],
      description: item["Rating Description 1"],
    },
    {
      value: item["Rating Value 2"],
      description: item["Rating Description 2"],
    },
    {
      value: item["Rating Value 3"],
      description: item["Rating Description 3"],
    },
    {
      value: item["Rating Value 4"],
      description: item["Rating Description 4"],
    },
    {
      value: item["Rating Value 5"],
      description: item["Rating Description 5"],
    },
  ],
  faqs: [
    { question: item["FAQ Question 1"], answer: item["FAQ Answer 1"] },
    { question: item["FAQ Question 2"], answer: item["FAQ Answer 2"] },
    { question: item["FAQ Question 3"], answer: item["FAQ Answer 3"] },
    { question: item["FAQ Question 4"], answer: item["FAQ Answer 4"] },
    { question: item["FAQ Question 5"], answer: item["FAQ Answer 5"] },
  ],
  questionTags: item["Question Tags"] ? item["Question Tags"].split(",") : [],
  answerTags: item["Answer Tags"] ? item["Answer Tags"].split(",") : [],
  linkedListings: item["Linked Listings"],
  singleLocationVsFranchise: item["Single locations vs. franchise"],

  paymentOptions: item["Payment Options"],
  governmentAffiliation: item["Government Affiliation"],
  goals: item["Goals"] ? item["Goals"].split(",") : [],
  directServices: item["Direct Services"],
  administrativeServices: item["Administrative Services"],
  oneClickIntake: item["One Click Intake"],
  acceptNewClients: item["Accept New Clients"] === "Yes",
  evaluations: item["Evaluations"] === "Yes",
  providesAdditional: item["Provides Additional"],
  knownFor: item["Known For"] ? item["Known For"].split(",") : [],
  tags: item["Tags"] ? item["Tags"].split(",") : [],
})

export default async (req, res, next) => {
  if (req.is("text/csv")) {
    try {
      const jsonData = await csvtojson().fromString(req.body)

      const transformedData = jsonData.map(transformData)

      console.log(transformedData)

      req.body = transformedData
      next()
    } catch (error) {
      console.error("Error converting CSV to JSON:", error)
      res.status(500).send("Error processing CSV data")
    }
  } else {
    next()
  }
}
