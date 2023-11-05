import { DownArrowTinySvg, LeftArrowSvg, RightArrowSvg, XSvg } from "@/assets/Icons"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useCheckBreadcrumbs } from "@/utils/ORG/useCheckBreadcrumbs"
import { useOutsideHide } from "@/utils/useOutsideHide"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { LI_Booking, PCMPS_General_D_BookingWrapper, PCMPS_General_D_Booking_CLASS } from "./styles/PCMPS_General_D_BookingWrapper"

const daysOfTheWeek = ["Mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const daysOfTheMonth = Array(31)
  .fill(0)
  .map((x, index) => index + 1)

type DataToModal_Type = {
  numberDayOfTheMonth: number | null
  nameDayOfTheMonth: string | null
} | null

const dataToModal_InitialData: DataToModal_Type = null

export const enum ElementActiveHeight_KEYS {
  DISTANCE_FROM_TOP = "DISTANCE_FROM_TOP",
  HEIGHT_OF_ELEMENT = "HEIGHT_OF_ELEMENT",
}

const modalData = {
  hours: {
    value: "Hours",
    data: "8am - 7pm, please arrive by 7:45am",
  },

  itinerary: {
    value: "Itinerary",
    data: [
      { time: "8 - 10 am", value: "Arts & crafts" },
      { time: "10 - 12 pm", value: "Swimming" },
      { time: "12 - 1 pm", value: "Lunch" },
      { time: "1 - 3 pm", value: "Archery" },
      { time: "3 - 3:30 pm", value: "Snack Time" },
      { time: "3:30 - 5:30  pm", value: "Arts & crafts" },
      { time: "5:30 - 6:45  pm", value: "Tennis" },
      { time: "6:45 - 7  pm", value: "Clean up" },
    ],
  },
}

export const PCMPS_General_D_Booking = () => {
  const [dataToModal, setDataToModal] = useState(dataToModal_InitialData)
  const [shouldShowMoldal, setShouldShowMoldal] = useState(false)
  const [elementActiveHeight, setElementActiveHeight] = useState(null)

  const refModal = useRef(null)
  useOutsideHide(refModal, setShouldShowMoldal)

  let handleGetData = (e, thisDayOfTheMonth: number): void => {
    if (e.type === "click" || e.code === "Enter") {
      const date = new Date(`2023-05-${thisDayOfTheMonth + 1}`)
      const fullNameOfTheDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)

      setDataToModal({ nameDayOfTheMonth: fullNameOfTheDay, numberDayOfTheMonth: thisDayOfTheMonth })
      setShouldShowMoldal(true)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement // Type assertion

          setElementActiveHeight({
            [ElementActiveHeight_KEYS.DISTANCE_FROM_TOP]: targetElement.offsetTop,
            [ElementActiveHeight_KEYS.HEIGHT_OF_ELEMENT]: targetElement.offsetHeight,
          })
        }
      })
    })

    const target = document.querySelector(`.${PCMPS_General_D_Booking_CLASS.IS_SELECTED}`)

    if (target) {
      observer.observe(target)
    }

    return () => {
      observer.disconnect()
    }
  }, [dataToModal])

  let handleCloseModal = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      setShouldShowMoldal(false)
      setElementActiveHeight(null)
    }
  }

  useEffect(() => {
    if (refModal.current) refModal.current.focus()
  }, [dataToModal, shouldShowMoldal, elementActiveHeight])

  useEffect(() => {
    let handleCloseModalEffect = (e) => {
      if (e.code === "Escape") {
        setShouldShowMoldal(false)
        setElementActiveHeight(null)
      }
    }

    window.addEventListener("keydown", handleCloseModalEffect)

    return () => {
      window.removeEventListener("keydown", handleCloseModalEffect)
    }
  }, [])

  const { query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  return (
    <PCMPS_General_D_BookingWrapper
      distanceModal={elementActiveHeight}
      shouldShowMoldal={shouldShowMoldal}>
      <header>
        <H3>Select a date</H3>
      </header>

      <div>
        <span>
          <H4>Session type:</H4>
          <button>
            Group <DownArrowTinySvg />
          </button>
        </span>

        <span>
          <H4>Times displayed in:</H4>
          <button>
            GMT-5:10 Eastern Time (EDT) <DownArrowTinySvg />
          </button>
        </span>
      </div>

      <div>
        <span tabIndex={0}>
          <LeftArrowSvg />
        </span>
        <H4>May 2023</H4>
        <span tabIndex={0}>
          <RightArrowSvg />
        </span>
      </div>

      <div>
        <ul>
          {daysOfTheWeek.map((x) => (
            <li key={x}>
              <H4>{x}</H4>
            </li>
          ))}
        </ul>

        <ul>
          {daysOfTheMonth.map((x, index) => {
            let isDisabled = index % 7 < 4
            let thisDayOfTheMonth = index + 1

            return (
              <li
                className={
                  isDisabled
                    ? PCMPS_General_D_Booking_CLASS.IS_DISABLED
                    : dataToModal !== null && thisDayOfTheMonth === dataToModal.numberDayOfTheMonth
                    ? PCMPS_General_D_Booking_CLASS.IS_SELECTED
                    : ""
                }
                tabIndex={isDisabled ? -1 : 0}
                onClick={(e) => {
                  if (!isDisabled) {
                    handleGetData(e, thisDayOfTheMonth)
                  }
                }}
                onKeyDown={(e) => {
                  if (!isDisabled) {
                    handleGetData(e, thisDayOfTheMonth)
                  }
                }}>
                {x}
              </li>
            )
          })}

          <li
            className={PCMPS_General_D_Booking_CLASS.THE_MODAL}
            tabIndex={0}
            ref={refModal}>
            <header>
              <H3>{titleFormatted}</H3>
              <span>
                <H4>{dataToModal !== null && `${dataToModal.nameDayOfTheMonth}, May ${dataToModal.numberDayOfTheMonth}, 2023`}</H4>
                <span
                  tabIndex={0}
                  onClick={handleCloseModal}
                  onKeyDown={handleCloseModal}>
                  <XSvg />
                </span>
              </span>
            </header>

            <ul>
              <li>
                <H4>Hours:</H4>
                <span>8am - 7pm, please arrive by 7:45am</span>
              </li>
            </ul>

            <ul>
              <li>
                <H4>{modalData.itinerary.value}:</H4>
              </li>
              {modalData.itinerary.data.map((x, index, arr) => {
                let whichSide = index < 4 ? PCMPS_General_D_Booking_CLASS.IS_LEFT : PCMPS_General_D_Booking_CLASS.IS_RIGHT

                return (
                  <LI_Booking
                    isIndex={index}
                    key={`${x.time}_${x.value}`}
                    className={`${whichSide} ${whichSide}_${index} `}>
                    <span>{x.time}</span>
                    <span>{x.value}</span>
                  </LI_Booking>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>

      <button tabIndex={-1}>Next</button>
    </PCMPS_General_D_BookingWrapper>
  )
}
