import { pickJustOne } from "./ORG_FilterdataFunctions_D"

const AboutCollection = [
  "__FULLNAMEHERE__ is deeply committed to providing the highest quality care to their patients. With years of experience and a dedication to ongoing learning, __NAMEHERE__ have developed a wide range of skills and expertise to help their patients achieve optimal health and wellness. In addition to their professional qualifications, __NAMEHERE__ is also known for their compassion and understanding, taking the time to listen to their patients, always striving to provide personalized care that meets their unique needs and goals. __NAMEHERE__ is dedicated to helping their patients live their best lives",

  "__FULLNAMEHERE__ is a speech therapist who is dedicated to helping patients achieve optimal health and well-being. With a strong background in their field and a passion for helping others, __NAMEHERE__ is highly skilled in providing effective treatment and support. Known for their caring and compassionate nature, __NAMEHERE__ takes the time to listen to patients and understand their unique needs and goals. Always striving to provide personalized care that meets patients' specific needs. __NAMEHERE__ is committed to helping patients live their best lives and is always looking for ways to further improve their skills and knowledge in order to better serve their patients",

  "__FULLNAMEHERE__ is a health care provider with a strong commitment to delivering high-quality, patient-centered care. They have skills at adapting to the unique needs and concerns of each individual. In their practice, __NAMEHERE__ focuses on building trusting relationships with their patients and working collaboratively to develop personalized treatment plans. They have a particular interest in preventative care and helping people live their healthiest lives",

  "__FULLNAMEHERE__ is a speech therapist with a passion for helping others. They have a strong background in patient care and are dedicated to providing high-quality services to those in need. __NAMEHERE__ is skilled in a variety of healthcare techniques and is always eager to learn more. They are committed to staying up to date with the latest research and developments in the field. __NAMEHERE__ is a compassionate and understanding individual, and they strive to create a warm and welcoming environment for their patients"
]

export const ORG_ST_About = (name, lastName) => {
  const pickedOne = pickJustOne(AboutCollection)
  const fullName = `${name} ${lastName}`

  let firstChange = pickedOne.replace("__FULLNAMEHERE__", fullName)
  let secondChange = firstChange.replaceAll("__NAMEHERE__", name)

  return secondChange
}
