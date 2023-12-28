import { z } from 'zod';

const Address = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
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

const Business = z.object({
  id: z.string().optional(), 
  resourceId: z.string().optional(),
  entryType: z.string().optional(),
  recordName: z.string(),
  recordSubtitle: z.string().optional(),
  listingType: z.string(),
  recordSubtype: z.string().optional(),
  recordSubtypeBreakdown: z.array(z.string()).optional(),
  usageOrServiceSettings: z.string().optional(),
  address: Address.optional(),
  listingDescription: z.string().optional(),
  parentCompanyDescription: z.string().optional(),
  sic: z.array(Classification).optional(),
  naics: z.array(Classification).optional(),
  onlinePresence: OnlinePresence.optional(),
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
  pictures: z.array(z.string()).optional(),
  videos: z.string().optional(),
  reviews: z.array(z.string()).optional(),
  linkedListings: z.string().optional(),
  singleLocationVsFranchise: z.string().optional(),
  verifiedUnverifiedResource: z.string().optional(),
});

export default Business;
