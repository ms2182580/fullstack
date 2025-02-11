import {
  CategoryReturnType,
  RecordReturnType,
  useGetMongoData,
} from "@/utils/org/use-fetch-data-tanstack"
import { StaticImageData } from "next/image"
import { FC, SVGProps, useEffect, useState } from "react"
import { CardProps } from "./card"
import { ChatLike } from "./chat-like"
import { Default } from "./default"
import { InputSearch } from "./input-search"
import { INDEX_ChatAIWrapper } from "./styles/index-wrapper"

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

export type INDEX_ChatAIFetchedDataType = {
  whenTheUserMadeTheQuery: theDateType
  queryTypedByUser: string
  theData: RecordReturnType[] | CategoryReturnType[]
}

type Props = {
  svgOrImage: FC<SVGProps<SVGSVGElement>> | StaticImageData
  activeCardProp?: CardProps["title"] | null
  whatUserWantToday: "categories" | "resources"
  alt: string
  cardsDataProps?: CardProps[]
}

export const INDEX_ChatAI = ({
  svgOrImage,
  activeCardProp = null,
  whatUserWantToday,
  alt,
  cardsDataProps,
}: Props) => {
  const [dataInputState, setDataInputState] = useState("")
  const [queriesFromUserState, setQueriesFromUserState] = useState<string[]>([])

  const handleOnChange = (e) => {
    setDataInputState(e.target.value)
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick()
      setQueriesFromUserState((prevState) => {
        return [...prevState, dataInputState]
      })

      const randomUUID = crypto.randomUUID()

      history.pushState(null, "", `/${randomUUID}?chat-open=true`)
    }
  }

  const [theDataToUse, setTheDataToUse] = useState<
    INDEX_ChatAIFetchedDataType[]
  >([])

  const { data, isFetching, refetch } = useGetMongoData({
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
        theData: Object.entries(data),
        queryTypedByUser: dataInputState,
        whenTheUserMadeTheQuery: nowDate,
      }
      setTheDataToUse((prevState) => {
        return [...prevState, dataToState]
      })
    }
  }, [data])

  return (
    <INDEX_ChatAIWrapper>
      {!isFetching && theDataToUse.length === 0 ? (
        <Default
          svgOrImage={svgOrImage}
          activeCardProp={activeCardProp}
          whatUserWantToday={whatUserWantToday}
          alt={alt}
          cardsDataProps={cardsDataProps}
        />
      ) : (
        <ChatLike
          theDataToUse={theDataToUse}
          isFetching={isFetching}
          queriesFromUserState={queriesFromUserState}
        />
      )}
      <div>
        <InputSearch
          theOnchange={handleOnChange}
          theOnKeyDown={handleOnKeyDown}
          dataInputState={dataInputState}
        />
      </div>
    </INDEX_ChatAIWrapper>
  )
}

/* 
!FH0
Make the chat work. Expected features:
- chat like UI
- chat input should be always to the bottom as a sticky component
- UI should be like what it's get from the chat AI: the cards and the move to different views

Check this URL to make how it would look like: https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=210-21975&t=MjJcEqyBwCrTMrRN-4
*/
