import { filterThirdPageDataOnObject } from "./filterThirdPageDataOnObject"

export const formatDataToThirdPage = (dataCard, dataCardLeft, rightPart, fullName) => {
  let getFilterThirdPageDataOnObject = filterThirdPageDataOnObject(rightPart.thirdPageData)

  let allDataToThirdPage = {
    card: {
      leftPart: {
        photo: dataCard.imageToUse,
        title: dataCard.title,
        subtitle: dataCard.subtitle,
        city: dataCard.city,
        rating: dataCard.rating,
        reviews: dataCard.reviews,
        phone: dataCardLeft.phone,
        email: dataCardLeft.email,
        website: dataCardLeft.web,
        location: dataCardLeft.location,
      },
      rightPart: rightPart,

    },
    fullName,
    other: getFilterThirdPageDataOnObject,
  }

  return allDataToThirdPage
}
