import { ThirdPlaceWrapper } from "./styles/thirdPlaceWrapper"

export const ThirdPlace = ({ handlePointerEvent, cardStyle, phone }) => {
  return (
    <article
      className={cardStyle}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}>
      <div className={`card ThirdPlace`}>
        <p>ThirdPlace</p>
        <p>{phone}</p>
      </div>
    </article>
  )
}
