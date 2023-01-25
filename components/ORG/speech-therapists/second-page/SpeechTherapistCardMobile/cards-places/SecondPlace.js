import { SecondPlaceWrapper } from "./styles/secondPlaceWrapper"

export const SecondPlace = ({ handlePointerEvent, cardStyle, languages }) => {
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card SecondPlace`}>
        <p>SecondPlace</p>
        <p>{languages}</p>
      </div>
    </article>
  )
}
