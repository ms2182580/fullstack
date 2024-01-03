import { z } from 'zod';

const Address = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipcode: z.string().optional(),
  zipFour: z.string().optional(),
  county: z.string().optional(),
  neighborhood: z.string().optional(),
  metroArea: z.string().optional(),
  country: z.string(),
});

const Classification = z.object({
  code: z.string().optional(),
  description: z.string().optional(),
});

const OnlinePresence = z.object({
  email: z.string().optional(),
  telephoneNumber: z.string().optional(),
  website: z.string().optional(),
  twitter: z.string().optional(),
  linkedIn: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
});

const DayHours = z.object({
  open: z.string().optional(),
  close: z.string().optional(),
});

const BusinessHours = z.object({
  monday: DayHours.optional(),
  tuesday: DayHours.optional(),
  wednesday: DayHours.optional(),
  thursday: DayHours.optional(),
  friday: DayHours.optional(),
  saturday: DayHours.optional(),
  sunday: DayHours.optional(),
});

const Media = z.object({
  url: z.string().optional(),
  description: z.string().optional(),
});

const Rating = z.object({
  value: z.string().optional(),
  description: z.string().optional(),
});

const FAQ = z.object({
  question: z.string().optional(),
  answer: z.string().optional(),
});

export default z.object({
  resourceId: z.string().optional(),
  entryType: z.string().optional(),
  recordName: z.string(),
  recordSubtitle: z.string().optional(),
  listingType: z.string().optional(),
  recordSubtype: z.string().optional(),
  recordSubtypeBreakdown: z.array(z.string()).optional(),
  usageOrServiceSettings: z.string().optional(),
  address: z.array(Address).optional(),
  listingDescription: z.string().optional(),
  parentCompanyDescription: z.string().optional(),
  sic: z.array(Classification).optional(),
  naics: z.array(Classification).optional(),
  onlinePresence: OnlinePresence.optional(),
  contactPerson: z.string().optional(),
  languages: z.array(z.string()).optional(),
  agesServed: z.string().optional(),
  servicesOffered: z.array(z.string()).optional(),
  diagnosisServed: z.array(z.string()).optional(),
  diagnosisNotServed: z.array(z.string()).optional(),
  symptomsSupported: z.array(z.string()).optional(),
  symptomsNotSupported: z.array(z.string()).optional(),
  supportedDDFunctionality: z.string().optional(),
  wheelchairAccessible: z.boolean().optional(),
  businessHours: BusinessHours.optional(),
  pictures: z.array(Media).optional(),
  videos: Media.optional(),
  reviews: z.array(z.string()).optional(),
  reviewTags: z.array(z.string()).optional(),
  ratings: z.array(Rating).optional(),
  faqs: z.array(FAQ).optional(),
  questionTags: z.array(z.string()).optional(),
  answerTags: z.array(z.string()).optional(),
  linkedListings: z.string().optional(),
  singleLocationVsFranchise: z.string().optional(),
  verifiedUnverifiedResource: z.string().optional(),
  price: z.string().optional(),
  paymentOptions: z.string().optional(),
  governmentAffiliation: z.string().optional(),
  goals: z.array(z.string()).optional(),
  directServices: z.string().optional(),
  administrativeServices: z.string().optional(),
  oneClickIntake: z.string().optional(),
  acceptNewClients: z.boolean().optional(),
  evaluations: z.boolean().optional(),
  providesAdditional: z.string().optional(),
  knownFor: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
});
