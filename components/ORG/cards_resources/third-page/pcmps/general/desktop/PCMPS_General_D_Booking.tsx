import { DownArrowTinySvg, LeftArrowSvg, RightArrowSvg } from "@/assets/Icons"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { PCMPS_General_D_BookingWrapper, PCMPS_General_D_Booking_CLASS } from "./styles/PCMPS_General_D_BookingWrapper"

const daysOfTheWeek = ["Mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const daysOfTheMonth = Array(31)
  .fill(0)
  .map((x, index) => index + 1)

export const PCMPS_General_D_Booking = () => {
  return (
    <PCMPS_General_D_BookingWrapper>
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

            return (
              <li
                className={isDisabled ? PCMPS_General_D_Booking_CLASS.IS_DISABLED : ""}
                tabIndex={isDisabled ? -1 : 0}>
                {x}
              </li>
            )
          })}
        </ul>
      </div>

      <button tabIndex={-1}>Next</button>
    </PCMPS_General_D_BookingWrapper>
  )
}
