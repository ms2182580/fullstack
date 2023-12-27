import { cloneElement, Fragment, useState } from "react"
import { BookmarkSaveSTMobileSvg } from "../../../../../../../assets/icons2"
import { DataArray } from "./cards-places/DataArray"
import { ST_M_Results_CardNoFilters_Paginator } from "./ST_M_Results_CardNoFilters_Paginator"
import { ST_M_Results_CardNoFilters_ThreeCardsComponentsWrapper } from "./styles/ST_M_Results_CardNoFilters_ThreeCardsComponentsWrapper.js"

export const ST_M_Results_CardNoFilters_ThreeCardsComponents = ({ ...props }) => {
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1)
    }
  }

  const slideRight = () => {
    if (index + 1 <= DataArray.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePageChange = (page) => {
    let n = page - index
    setIndex(index + n)
  }

  const handlePointerEvent = (eP) => {
    /* check which type of event we have, 
    and set a flag variable */
    let isTouchEvent = eP.type === "touchstart" ? true : false

    /* this is our card we will move */
    let card = eP.target
    /* to keep track of the value to offset the card left */
    let offset = 0
    /* keeps the initial mouse click x value */
    let initialX = isTouchEvent ? eP.touches[0].clientX : eP.clientX

    /* mouse events */
    /* set the documents onmousemove event to use this function */
    document.onmousemove = onPointerMove
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onPointerEnd

    /* touch events */
    /* set the documents ontouchmove to this function */
    document.ontouchmove = onPointerMove
    /* set the documents ontouchend to this function */
    document.ontouchend = onPointerEnd

    /* when the mouse moves we handle the event here */
    function onPointerMove(e) {
      /* set offset to the current position of the cursor,
      minus the initial starting position  */
      offset = (isTouchEvent ? e?.touches[0].clientX : e?.clientX) - initialX
      if (offset <= -100) {
        slideRight()
        /* if we're at the last card, snap back to center */
        if (index === DataArray.length - 1) {
          card.style.left = 0
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0
          }, 1000)
        }
        return
      }
      if (offset >= 100) {
        slideLeft()
        /* if we're at the first card, snap back to center */
        if (index === 0) {
          card.style.left = 0
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0
          }, 1000)
        }
        return
      }
      /* set the left style property of the card to the offset value */
      card.style.left = offset + "px"
    }

    function onPointerEnd(e) {
      /* if user releases mouse early,
      card needs to snap back */
      if (offset < 0 && offset > -100) {
        card.style.left = 0
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0
      }
      /* remove functions from event listeners
      (stop tracking pointer movements) */
      document.onmousemove = null
      document.onmouseup = null

      document.ontouchmove = null
      document.ontouchend = null
    }
  }

  return (
    <ST_M_Results_CardNoFilters_ThreeCardsComponentsWrapper>
      <div className="card-container">
        <BookmarkSaveSTMobileSvg tabIndex={0} />
        <ST_M_Results_CardNoFilters_Paginator
          dataLength={DataArray.length}
          activeIndex={index}
          handlePageChange={handlePageChange}
        />

        {DataArray.map((person, n) => {
          let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard"

          return (
            <Fragment key={`${person.key}${n}`}>
              {cloneElement(person, {
                cardStyle: position,
                handlePointerEvent: handlePointerEvent,
                image: props.image,
                alt: props.alt,
                firstName: props.firstName,
                lastName: props.lastName,
                howFar: props.howFar,
                rating: props.rating,
                reviews: props.reviews,
                diagnosis: props.diagnosis,
                agesServed: props.agesServed,
                languages: props.language,
                yearsOfPractice: props.yearsOfPractice,
                serviceSetting: props.serviceSetting,
                insurance: props.insurance,
                phone: props.phoneNumber,
                email: props.email,
                locationCity: props.location.city,
                locationStreetName: props.location.street.name,
                locationStreetNumber: props.location.street.number,
                locationState: props.location.state,
              })}
            </Fragment>
          )
        })}
      </div>
    </ST_M_Results_CardNoFilters_ThreeCardsComponentsWrapper>
  )
}
