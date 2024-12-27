import { INDEX_Logo, INDEX_LogoType } from "@/components/logo"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { UseFormattingRouteReturn } from "@/utils/useFormattingRoute"
import { useRouter } from "next/router"
import { ReactElement, ReactNode, useMemo } from "react"
import { LayoutAuthWrapper } from "./styles/layout-auth-wrapper"

/* 
!FH0
- Work on this component
- Keep on sign in and signup for teams

*/

type AsideDataShape = {
  title?: string
  paragraph?: (string | ReactElement)[]
  checkText?: string
  howIsLogo?: INDEX_LogoType["whichOneShouldDisplay"]
}

type AsideDataType = {
  [key in keyof typeof ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS]: AsideDataShape
}

const AsideData: AsideDataType = {
  TELL_US_ABOUT_YOU: {
    title: "Welcome to Oddy’s partner portal !",
    paragraph: [
      "At Oddy, we’re on a mission to connect families with developmental disabilities to the resources they need to thrive—whether it’s legal aid, housing, education, mental health support, or assistive technology.  Since 2012, we’ve been empowering families and amplifying the impact of incredible resources like yours.",
      <>
        The <strong>Partner Portal</strong> is your space to make a difference:
        Here, you can update listings, share feedback, and help us grow the
        world’s largest directory of developmental disability resources.
      </>,
      "Together, we’re tearing down barriers and building connections that change lives. Your dedication is what drives this mission forward, and we couldn’t do it without you. Thank you for being a vital part of the Oddy family—let’s keep making a real impact, one connection at a time!",
    ],
    checkText:
      "By proceeding, you acknowledge that accessing this portal without written consent from Oddy Tech, Inc. violates intellectual property laws and/or HIPAA regulations.",
    howIsLogo: "dark-beta",
  },
  SIGNIN: {
    title: "Welcome back to Oddy!",
    paragraph: [
      "Sign in to access your search history, saved resources, and bookmarked listings.",
    ],
    howIsLogo: "white-beta",
  },
  SIGNUP: {
    paragraph: [
      "With a free account, you’ll get access to saved posts, and bookmarked resource  listings.",
    ],
    howIsLogo: "white-beta",
  },
}

type Props = {
  children: ReactNode
} & Pick<UseFormattingRouteReturn, "actualRoute">

export const LayoutAuth = ({ children, actualRoute }: Props) => {
  const { asPath } = useRouter()

  const whichDataShouldDisplay = useMemo((): AsideDataShape => {
    const objectData = AsideData[`${actualRoute}`]

    return {
      title: objectData?.title || null,
      paragraph: objectData?.paragraph || null,
      checkText: objectData?.checkText || null,
      howIsLogo: objectData?.howIsLogo,
    }
  }, [asPath])

  return (
    <LayoutAuthWrapper actualRoute={actualRoute}>
      <aside>
        <INDEX_Logo whichOneShouldDisplay={whichDataShouldDisplay.howIsLogo} />

        <header>
          {whichDataShouldDisplay.title !== null && (
            <h1>{whichDataShouldDisplay.title}</h1>
          )}
        </header>

        <div>
          {whichDataShouldDisplay.paragraph &&
            whichDataShouldDisplay.paragraph.map((xData, index) => {
              return <p key={`${xData}_${index}`}>{xData}</p>
            })}
        </div>

        {whichDataShouldDisplay.checkText !== null && (
          <label>
            <input type="checkbox" />
            <p>
              {whichDataShouldDisplay.checkText}
              <span>*</span>
            </p>
          </label>
        )}
      </aside>
      <main>{children}</main>
    </LayoutAuthWrapper>
  )
}
