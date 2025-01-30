import {
  Facebook3Svg,
  Instagram2Svg,
  LinkedinSvg,
  Twitter2Svg,
} from "@/assets/icons/index"
import {
  FetchMongoReturnType,
  usePosts,
} from "@/utils/org/use-fetch-data-tanstack"
import { useEffect, useRef, useState } from "react"
import { RequestInputWrapper } from "./styles/request-input-wrapper"

const socialMediaArray = [
  { name: "Twitter", icon: Twitter2Svg },
  { name: "Facebook", icon: Facebook3Svg },
  { name: "Instagram", icon: Instagram2Svg },
  { name: "Linkedin", icon: LinkedinSvg },
]

type theDateType = {
  day: number
  dayOfTheWeek: number
  hour: number
  milliseconds: number
  minute: number
  month: number
  second: number
  timeZone: string
  year: number
}

type MongoDataUI = {
  whenTheUserMakeTheQuery: theDateType
  queryTypedByUser: string
  theData: FetchMongoReturnType
}

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

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter") {
      handleClick()
    }
  }

  const [theDataToUse, setTheDataToUse] = useState<MongoDataUI[]>([])

  const { data, isFetching, refetch } = usePosts({
    internalKey: `${dataInputState}`,
  })

  const handleClick = () => {
    // manually refetch
    refetch()
  }

  useEffect(() => {
    if (data) {
      const actualDate = new Date()

      const nowDate = {
        year: actualDate.getFullYear(),
        month: actualDate.getMonth() + 1,
        day: actualDate.getDate(),
        hour: actualDate.getHours(),
        minute: actualDate.getMinutes(),
        second: actualDate.getSeconds(),
        milliseconds: actualDate.getMilliseconds(),
        dayOfTheWeek: actualDate.getDay(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }

      const dataToState = {
        theData: data,
        queryTypedByUser: dataInputState,
        whenTheUserMakeTheQuery: nowDate,
      }

      setTheDataToUse((prevState) => {
        return [...prevState, dataToState]
      })
    }
  }, [data])

  useEffect(() => {
    // console.log("theDataToUse, data:", theDataToUse, data, )
    // console.log("theDataToUse", theDataToUse, theDataToUse.at(-1))
  }, [theDataToUse, data])

  useEffect(() => {
    // console.log("isFetching:", isFetching)
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
            onKeyDown={handleOnKeyDown}
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
