import { Signup_FileSvg, Signup_MicSvg, Signup_StartsSvg } from "@/assets/icons"
import { Tooltip } from "@/components/tooltip/Tooltip"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Signup_D_Steps_TellUs_CardsWrapper } from "./styles/Signup_D_Steps_TellUs_CardsWrapper"

export type Signup_D_Steps_TellUs_Input_Props = {
  titleText: string
  placeholder: string
}

export const Signup_D_Steps_TellUs_Input = ({
  titleText,
  placeholder,
}: Signup_D_Steps_TellUs_Input_Props) => {
  return (
    <Signup_D_Steps_TellUs_CardsWrapper>
      <P>{titleText}</P>
      <div>
        <textarea placeholder={placeholder} />
        <ul>
          <li data-testid="li-tooltip">
            <Tooltip
              triggerTheTooltip={<Signup_MicSvg />}
              dataOnTooltip="Record audio"
              whichAriaLabel="record audio"
            />
          </li>
          <li data-testid="li-tooltip">
            <Tooltip
              triggerTheTooltip={<Signup_FileSvg />}
              dataOnTooltip="Attach file"
              whichAriaLabel="Attach file"
            />
          </li>
          <li data-testid="li-tooltip">
            <Tooltip
              triggerTheTooltip={<Signup_StartsSvg />}
              dataOnTooltip={"Summarize with AI"}
              whichAriaLabel="Summarize with AI"
            />
          </li>
        </ul>
      </div>
    </Signup_D_Steps_TellUs_CardsWrapper>
  )
}
