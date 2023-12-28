import csvtojson from 'csvtojson';

const transformData = (item) => ({
    resourceId: item['Resource ID'],
    entryType: item['Entry type'],
    recordName: item['Record Name'],
    recordSubtitle: item['Record Subtitle'],
    listingType: item['Listing Type'],
    recordSubtype: item['Record Subtype'],
    recordSubtypeBreakdown: [
        item['Record Subtype breakdown 1'], 
        item['Record Subtype breakdown 2'], 
        item['Record Subtype breakdown 3'], 
        item['Record Subtype breakdown 4']
    ].filter(Boolean), 
    usageOrServiceSettings: item['Usage or service settings'],
    listingDescription: item['Listing Description'],
    parentCompanyDescription: item['Parent company description'],
    address: {
        street: item['Street'],
        city: item['City'],
        state: item['State'],
        zipcode: item['Zipcode'],
        zipFour: item['Zip four'],
        county: item['County'],
        neighborhood: item['Neighborhood'],
        metroArea: item['Metro Area'],
        country: item['Country'],
    },
    sic: [
        { code: item['SIC Code 1'], description: item['SIC Code Description'] },
        { code: item['SIC Code 2'], description: item['SIC Codes Description 2'] },
    ],
    naics: [
        { code: item['NAICS Code'], description: item['NAICS Code Description'] },
        { code: item['NAICS 2'], description: item['NAICS 2 Description'] },
    ],
    onlinePresence: {
        email: item['Email'],
        website: item['Website'],
        telephoneNumber: item['Telephone Number'],
        twitter: item['Twitter'],
        linkedIn: item['LinkedIn'],
        facebook: item['Facebook'],
        instagram: item['Instagram'],
    },
    pictures: [
        item['Picture 1'], item['Picture 2'], item['Picture 3'], 
        item['Picture 4'], item['Picture 5'], item['Picture 6']
    ].filter(Boolean),
    videos: item['Video'],
    reviews: [
        item['Review 1'], item['Review 2'], item['Review 3'],
        item['Review 4'], item['Review 5'], item['Review 6'],
        item['Review 7'], item['Review 8'], item['Review 9'],
    ].filter(Boolean),
    businessHours: {
        monday: { open: item['Monday Open'], close: item['Monday Close'] },
        tuesday: { open: item['Tuesday Open'], close: item['Tuesday Close'] },
        wednesday: { open: item['Wednesday Open'], close: item['Wednesday Close'] },
        thursday: { open: item['Thursday Open'], close: item['Thursday Close'] },
        friday: { open: item['Friday Open'], close: item['Friday Close'] },
        saturday: { open: item['Saturday Open'], close: item['Saturday Close'] },
        sunday: { open: item['Sunday Open'], close: item['Sunday Close'] },
    },
    languages: item['Languages'] ? item['Languages'].split(',') : [],
    agesServed: item['Ages Served'],
    servicesOffered: item['Services offered'] ? item['Services offered'].split(',') : [],
    diagnosisServed: item['Diagnosis Served'] ? item['Diagnosis Served'].split(',') : [],
    diagnosisNotServed: item['Diagnosis NOT Served'] ? item['Diagnosis NOT Served'].split(',') : [],
    symptomsSupported: item['Symptoms Supported'] ? item['Symptoms Supported'].split(',') : [],
    symptomsNotSupported: item['Symptoms NOT supported'] ? item['Symptoms NOT supported'].split(',') : [],
    supportedDDFunctionality: item['Supported DD Functionality'],
    wheelchairAccessible: item['Wheelchair accessible facility'] === 'Yes',
    linkedListings: item['Linked Listings'],
    singleLocationVsFranchise: item['Single locations vs. franchise'],
    verifiedUnverifiedResource: item['Verified/Unverified Resource']

    
});

export default async (req, res, next) => {
    if (req.is('text/csv')) {
      try {
        const jsonData = await csvtojson().fromString(req.body);

        const transformedData = jsonData.map(transformData)

        req.body = transformedData;
        next();
      } catch (error) {
        console.error('Error converting CSV to JSON:', error);
        res.status(500).send('Error processing CSV data');
      }
    } else {
      next();
    }
  }