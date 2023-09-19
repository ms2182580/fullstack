import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import { LeftArrowSvg, RightArrowSvg, XSvg } from "../../../../../../assets/Icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_MainCardLeftPhotosModalWrapper } from "./styles/ST_D_Detail_MainCardLeftPhotosModalWrapper.js"

const imagesToShow = [0, 1, 2, 3, 4, 5]

export const ST_D_Detail_MainCardLeftPhotosModal = ({ showModal, handleHideModal, photo, name, lastName }) => {
  const componentRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = (ctrlKey = false) => {
    if (ctrlKey === false) {
      setCurrentIndex((prevState) => (prevState + 1) % imagesToShow.length)
    } else {
      setCurrentIndex(imagesToShow.length - 1)
    }
  }

  const handlePrev = (ctrlKey = false) => {
    if (ctrlKey === false) {
      setCurrentIndex((prevState) => (prevState - 1 + imagesToShow.length) % imagesToShow.length)
    } else {
      setCurrentIndex(0)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37 && !event.ctrlKey) {
        handlePrev()
      } else if (event.keyCode === 37 && event.ctrlKey) {
        handlePrev(true)
      } else if (event.keyCode === 39 && !event.ctrlKey) {
        handleNext()
      } else if (event.keyCode === 39 && event.ctrlKey) {
        handleNext(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <ST_D_Detail_MainCardLeftPhotosModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={handleHideModal}>
        <XSvg />
      </span>
      <H4 hover>
        {currentIndex + 1} of {imagesToShow.length}
      </H4>
      <div>
        {imagesToShow.map((x, i) => {
          return (
            <div
              key={`${x}_${i}`}
              className={imagesToShow.indexOf(imagesToShow[currentIndex]) === i ? "fade" : "slide fade"}>
              <div>
                <Image
                  src={photo}
                  layout="fill"
                  width={1}
                  height={1}
                  alt={`Photo of speech therapist: ${name} ${lastName} number ${i}`}
                />
              </div>

              <P>{i + 1}</P>
            </div>
          )
        })}
      </div>

      <div>
        <span
          onClick={() => handlePrev()}
          onDoubleClick={() => handlePrev(true)}>
          <LeftArrowSvg />
        </span>
        <span
          onClick={() => handleNext()}
          onDoubleClick={() => handleNext(true)}>
          <RightArrowSvg />
        </span>
      </div>

      <div className="thumbnails">
        {imagesToShow.map((x, i) => {
          return (
            <span
              key={`${x}_${i}`}
              className={imagesToShow.indexOf(imagesToShow[currentIndex]) === i ? "styling active" : "styling"}
              onClick={() => setCurrentIndex(imagesToShow.indexOf(i))}>
              <div>
                <Image
                  src={photo}
                  layout="fill"
                  alt={`Photo of speech therapist: ${name} ${lastName} number ${i}`}
                />
              </div>

              <P>{i + 1}</P>
            </span>
          )
        })}
      </div>
    </ST_D_Detail_MainCardLeftPhotosModalWrapper>
  )
}
