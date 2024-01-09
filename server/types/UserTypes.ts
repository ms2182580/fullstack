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

const Schedule = z.object({
  monday: DayHours.optional(),
  tuesday: DayHours.optional(),
  wednesday: DayHours.optional(),
  thursday: DayHours.optional(),
  friday: DayHours.optional(),
  saturday: DayHours.optional(),
  sunday: DayHours.optional(),
});

const HealthInformation = z.object({
  primaryDiagnosis: z.string().optional(),
  secondaryDiagnosis: z.string().optional(),
  comorbidConditions: z.string().optional(),
  verbal: z.string().optional(),
  deafHardOfHearing: z.string().optional(),
  communicationDevices: z.string().optional(),
  signLanguage: z.string().optional(),
  blindVisionImpaired: z.string().optional(),
  physicalImpairments: z.string().optional(),
  ambulation: z.string().optional(),
  mobilityDeviceType: z.string().optional(),
  developmentalDisability: z.string().optional(),
  intellectualDisability: z.string().optional(),
  cognitiveIntellectualImpairments: z.string().optional(),
  emotionalImpairments: z.string().optional(),
  adverseDisruptiveBehaviors: z.string().optional(),
  selfInjuriousBehaviors: z.string().optional(),
  violentTendencies: z.string().optional(),
  mentalHealthConditions: z.string().optional(),
  additionalSupportsRequired: z.string().optional(),
})

const ProductsAndServicesReceived = z.object({
  name: z.string().optional(),
  providerName: z.string().optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  reason: z.string().optional(),
  goalDomain: z.string().optional(),
  goal: z.string().optional(),
  objective: z.string().optional(),
  notes: z.string().optional(),
  contactPerson: z.string().optional(),
  street: z.string().optional(),
  zipcode: z.string().optional(),
  city: z.string().optional(),
  delivery: z.string().optional(),
  ratings: z.string().optional(),
  frequency: z.string().optional(),
  serviceSettings: z.string().optional(),
  scost: z.string().optional(),
  paymentMethod: z.string().optional(),
});

const Apperance = z.object({
  frontPicture: z.string().optional(),
  Degree45Left: z.string().optional(),
  Degree45Right: z.string().optional(),
  Degree90Left: z.string().optional(),
  Degree90Right: z.string().optional(),
  reel: z.string().optional(),
  video: z.string().optional(),
  voice: z.string().optional(),
});

const Individuals = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  age: z.string().optional(),
  gender: z.string().optional(),
  livesWith: z.string().optional(),
  supportedBy: z.string().optional(),
  careCircle: z.string().optional(),
  culturalIdentification: z.string().optional(),
  languagesSpoken: z.string().optional(),
  languagesUnderstood: z.string().optional(),
  address: Address.optional(),
  healthInformation: HealthInformation.optional(),
  productsAndServicesReceived: ProductsAndServicesReceived.optional(),
  schedule: Schedule.optional(),
  apperance: Apperance.optional(),
  interests: z.string().optional(),
  likes: z.string().optional(),
  dislikes: z.string().optional(),
  onlinePresence: OnlinePresence.optional(),
})

export default z.object({
  userType: z.string().optional(),
  userName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  zipcode: z.string().optional(),
  individuals: z.array(Individuals).optional(),
});
