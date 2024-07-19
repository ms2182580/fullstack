import { Signup_N_InfoSvg } from "@/assets/icons"
import { ReactElement, useEffect, useState } from "react"

type Tooltip_Props = {
  triggerTheTooltip?: ReactElement | string | null
  otherStateToHideTooltip?: Function[]
  otherStateToShowTooltip?: boolean[]
  dataOnTooltip?: ReactElement | string
  whichAriaLabel?: string
}

export const Tooltip = ({
  triggerTheTooltip = <Signup_N_InfoSvg />,
  otherStateToHideTooltip,
  otherStateToShowTooltip = [false],
  dataOnTooltip = "Data inside the tooltip itself",
  whichAriaLabel = "tooltip showing data",
}: Tooltip_Props) => {
  const fromOutsideAnyStateShouldShowTooltip = otherStateToShowTooltip.some(
    (x) => x === true
  )

  const [tooltipState, setTooltipState] = useState(false)

  const handleShowTooltip = () => {
    setTooltipState(true)
  }

  const handleHideTooltip = (e) => {
    if (
      e.type === "mouseleave" ||
      e.type === "blur" ||
      (e.type === "keydown" && e.key === "Escape")
    ) {
      setTooltipState(false)

      if (otherStateToHideTooltip) {
        otherStateToHideTooltip.forEach((element: any) => {
          element(false)
        })
        setTooltipState(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleHideTooltip)

    return () => {
      window.removeEventListener("keydown", handleHideTooltip)
    }
  }, [])

  return (
    <div
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
      onFocus={handleShowTooltip}
      onBlur={handleHideTooltip}
      tabIndex={0}
      aria-label={whichAriaLabel}
    >
      {triggerTheTooltip && triggerTheTooltip}

      {(tooltipState || fromOutsideAnyStateShouldShowTooltip) && (
        <div role="tooltip">{dataOnTooltip}</div>
      )}
    </div>
  )
}
