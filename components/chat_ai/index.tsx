import SvgMagicWand from "@/assets/icons/magic_wand_active.svg"
import SvgMagnifying from "@/assets/icons/magnifying_glass_default.svg"
import ImgLightbulb from "@/assets/images/teams/img-lightbulb.png"
import {
  CategoryReturnType,
  RecordReturnType,
  usePosts,
} from "@/utils/org/use-fetch-data-tanstack"
import Image, { StaticImageData } from "next/image"
import { FC, SVGProps, useEffect, useState } from "react"
import { Card, CardProps } from "./card"
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

type FetchedData = {
  whenTheUserMadeTheQuery: theDateType
  queryTypedByUser: string
  theData: RecordReturnType | CategoryReturnType
}

const cardsData: CardProps[] = [
  {
    svg: ImgLightbulb,
    title: "See Categories",
    listOfOptions: [
      "Categories behavioral health?",
      "10 most popular categories in NYC",
    ],
  },
  {
    svg: SvgMagnifying,
    title: "Get Listing",
    listOfOptions: [
      "Yoga providers in NY, NY 10027",
      "Autism resources in 18302",
    ],
  },
  {
    svg: SvgMagicWand,
    title: "Create Content",
    listOfOptions: [
      "Respond to a FB resource request",
      "Request help from a provider on IG",
    ],
  },
]

type Props = {
  svgOrImage: FC<SVGProps<SVGSVGElement>> | StaticImageData
  activeCardProp?: CardProps["title"] | null
  whatUserWantToday: "categories" | "resources"
  alt: string
  cardsDataProps?: CardProps[]
}

export const INDEX_ChatAI = ({
  svgOrImage: SvgImage,
  activeCardProp = null,
  whatUserWantToday,
  alt,
  cardsDataProps = cardsData,
}: Props) => {
  const [dataInputState, setDataInputState] = useState("")

  const handleOnChange = (e) => {
    setDataInputState(e.target.value)
  }

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter") {
      handleClick()
    }
  }

  const [theDataToUse, setTheDataToUse] = useState<FetchedData[]>([])

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
        whenTheUserMadeTheQuery: nowDate,
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
    <INDEX_ChatAIWrapper>
      {typeof SvgImage === "function" ? (
        <SvgImage />
      ) : (
        <Image src={SvgImage} alt={alt} />
      )}

      <h1>What {whatUserWantToday} do you need today?</h1>
      <ul>
        {cardsDataProps.map(({ svg, title, listOfOptions }, index) => {
          const activeCard =
            activeCardProp === null ? true : activeCardProp === title

          return (
            <Card
              key={title}
              svg={svg}
              title={title}
              listOfOptions={listOfOptions}
              allowFocus={activeCard}
            />
          )
        })}
      </ul>

      <InputSearch
        theOnchange={handleOnChange}
        theOnKeyDown={handleOnKeyDown}
      />
    </INDEX_ChatAIWrapper>
  )
}

/* 
!FH0
Make the chat work. Expected features:
- chat like UI
- UI should be like what it's get from the chat AI: the cards and the move to different views

Check this URL to make how it would look like: https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=210-21975&t=MjJcEqyBwCrTMrRN-4
*/
