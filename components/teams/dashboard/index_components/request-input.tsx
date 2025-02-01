import {
  Facebook3Svg,
  Instagram2Svg,
  LinkedinSvg,
  Twitter2Svg,
} from "@/assets/icons/index"
import { useRef, useState } from "react"
import { RequestInputWrapper } from "./styles/request-input-wrapper"

const socialMediaArray = [
  { name: "Twitter", icon: Twitter2Svg },
  { name: "Facebook", icon: Facebook3Svg },
  { name: "Instagram", icon: Instagram2Svg },
  { name: "Linkedin", icon: LinkedinSvg },
]

export const RequestInput = () => {
  const refInput = useRef<HTMLInputElement>(null)

  const handleFocusOnInput = (e) => {
    if (e.type === "click" && refInput?.current) {
      refInput?.current.focus()
    }
  }

  const [dataInputState, setDataInputState] = useState("")

  const handleOnChange = (e) => {
    setDataInputState(e.target.value)
  }

  return (
    <RequestInputWrapper shouldHidePlaceholder={dataInputState !== ""}>
      <ul>
        {socialMediaArray.map(({ name, icon: SVG }, index) => {
          return (
            <li key={name} tabIndex={0}>
              <SVG />
            </li>
          )
        })}
      </ul>
      <label>
        Paste a family’s request from a social media platform:
        <div onClick={handleFocusOnInput}>
          <input
            placeholder={`E.g.: “Hi, all, I’m having problems with my son’s school...”`}
            ref={refInput}
            onChange={handleOnChange}
          />
          <span>
            E.g.: <i>“Hi, all, I’m having problems with my son’s school...”</i>
          </span>
        </div>
      </label>
      <div>
        <button>Find resources</button>

        <button>Discover help options</button>
      </div>
    </RequestInputWrapper>
  )
}
