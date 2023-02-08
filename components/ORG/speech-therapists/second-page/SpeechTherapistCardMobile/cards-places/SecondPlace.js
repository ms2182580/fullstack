import TherapistInfoSecondPage from "../../../TherapistInfoSecondPage"

export const SecondPlace = ({
  handlePointerEvent,
  cardStyle,
  agesServed,
  languages,
  yearsOfPractice,
  serviceSetting,
  insurance
}) => {
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card SecondPlace`}>
        <TherapistInfoSecondPage
          title="Ages Served"
          dataToShow={agesServed}
          isMobile={true}
        />
        <TherapistInfoSecondPage
          title="Languages"
          dataToShow={languages}
          isMobile={true}
        />
        <TherapistInfoSecondPage
          title="Years of Practice"
          dataToShow={yearsOfPractice}
          isMobile={true}
        />
        <TherapistInfoSecondPage
          title="Practice Setting"
          dataToShow={serviceSetting}
          isMobile={true}
        />
        <TherapistInfoSecondPage
          title="Insurance"
          dataToShow={insurance}
          isMobile={true}
        />
      </div>
    </article>
  )
}

