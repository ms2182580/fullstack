import {
  Facebook3Svg,
  Instagram2Svg,
  LinkedinSvg,
  Twitter2Svg,
} from "@/assets/icons/index"
import { usePosts } from "@/utils/org/use-fetch-data-tanstack"
import { useEffect, useRef, useState } from "react"
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
  console.log("dataInputState:", dataInputState)

  useEffect(() => {
    /*_codeHere_*/
    console.log("dataInputState:", dataInputState)
  }, [dataInputState])

  const handleOnChange = (e) => {
    setDataInputState(e.target.value)
  }

  const [theDataToUse, setTheDataToUse] = useState<any[]>([])

  const { data, isFetching, refetch } = usePosts({
    internalKey: `${dataInputState}`,
  })

  const handleClick = () => {
    // manually refetch
    refetch()
  }

  useEffect(() => {
    if (data) {
      console.log("💫data:", data)
      setTheDataToUse((prevState) => {
        if (prevState.length === 0) {
          console.log("🔰prevState:", prevState, 0)
          return [...prevState, data]
        } else {
          console.log("🚝prevState:", prevState, 1)
          return [...prevState, data]
        }
      })
    }
  }, [data])

  useEffect(() => {
    console.log("theDataToUse, data:", theDataToUse, data)
  }, [theDataToUse, data])

  useEffect(() => {
    console.log("isFetching:", isFetching)
  }, [isFetching])

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
        <button onClick={handleClick}>Find resources</button>

        <button>Discover help options</button>
      </div>
    </RequestInputWrapper>
  )
}
