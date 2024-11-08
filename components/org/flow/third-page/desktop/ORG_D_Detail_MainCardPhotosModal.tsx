import { LeftArrowSvg, RightArrowSvg } from "@/assets/icons/index"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ORG_D_Detail_MainCardLeftPhotosModalWrapper } from "./styles/ORG_D_Detail_MainCardLeftPhotosModalWrapper"

const imagesToShow = [0, 1, 2, 3, 4, 5]

export const ORG_D_Detail_MainCardPhotosModal = ({ photo, name, lastName }) => {
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
      setCurrentIndex(
        (prevState) =>
          (prevState - 1 + imagesToShow.length) % imagesToShow.length
      )
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
    <ORG_D_Detail_MainCardLeftPhotosModalWrapper>
      <H4>
        {currentIndex + 1} of {imagesToShow.length}
      </H4>
      <div>
        {imagesToShow.map((x, i) => {
          return (
            <div
              key={`${x}_${i}`}
              className={
                imagesToShow.indexOf(imagesToShow[currentIndex]) === i
                  ? "fade"
                  : "slide fade"
              }
            >
              <div>
                <Image
                  src={photo}
                  objectFit="fill"
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
          onDoubleClick={() => handlePrev(true)}
          onKeyDown={(e) => e.key === "Enter" && handlePrev()}
          tabIndex={0}
        >
          <LeftArrowSvg />
        </span>
        <span
          onClick={() => handleNext()}
          onDoubleClick={() => handleNext(true)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          tabIndex={0}
        >
          <RightArrowSvg />
        </span>
      </div>

      <div className="thumbnails">
        {imagesToShow.map((x, i) => {
          return (
            <span
              key={`${x}_${i}`}
              className={
                imagesToShow.indexOf(imagesToShow[currentIndex]) === i
                  ? "styling active"
                  : "styling"
              }
              onClick={() => setCurrentIndex(imagesToShow.indexOf(i))}
              onKeyDown={(e) =>
                e.key === "Enter" && setCurrentIndex(imagesToShow.indexOf(i))
              }
              tabIndex={0}
            >
              <div>
                <Image
                  src={photo}
                  alt={`Photo of speech therapist: ${name} ${lastName} number ${i}`}
                />
              </div>

              <P>{i + 1}</P>
            </span>
          )
        })}
      </div>
    </ORG_D_Detail_MainCardLeftPhotosModalWrapper>
  )
}
