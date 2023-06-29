let allDataFAQS = {
  votes: [10, 9, 3, 10, 5],
  question: [
    "Can I book an appointment with __FULL_NAME__ online?",
    "How can I schedule a consult call with __FULL_NAME__?",
    "Does __FULL_NAME__ offer weekend visits?",
    "Is __FULL_NAME__ accepting new patients?",
    "Where is __FULL_NAME__'s office located?"
  ],
  answers: [
    "To make an appointment you can call the number listed or fill out the contact form and someone will reach out to get you scheduled. You do NOT need a referral to book an appointment with __FULL_NAME__.",
    "",
    "To make an appointment you can call the number listed or fill out the contact form and someone will reach out to get you scheduled. You do NOT need a referral to book an appointment with __FULL_NAME__.",
    "__FULL_NAME__ generally accepts new patients. You can fill out the contact form or call to schedule an appointment",
    "__FULL_NAME__'s office is located in __FULL_LOCATION__"
  ]
}

export const ORG_ST_FAQS = (name, lastName, locationCity, locationStreetNumber, locationStreetName, locationState) => {
  let nameToChange = `${name} ${lastName}`
  let questionsFormatted = allDataFAQS.question.map(x => x.replace("__FULL_NAME__", nameToChange))

  let fullLocation = `${locationState} ${locationCity} Speech Therapy ${locationStreetNumber} ${locationStreetName}`
  let answersFormatted = allDataFAQS.answers.map(x => {
    let changeName = x.replace("__FULL_NAME__", nameToChange)
    let changeLocation = changeName.replace("__FULL_LOCATION__", fullLocation)
    return changeLocation

  })

  return {
    votes: allDataFAQS.votes,
    questions: questionsFormatted,
    answers: answersFormatted
  }
}
