import { INDEX_Logo } from "@/components/logo"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useFormattingRoute } from "@/utils/useFormattingRoute"
import Head from "next/head"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useMemo } from "react"
import {
  Layout_Signup_Footer,
  Layout_Signup_Footer_Props,
  TextButtonsSecond_Enum,
} from "./Layout_Signup_Footer"
import {
  Layout_Signup_Progress,
  Layout_Signup_Progress_Props,
} from "./Layout_Signup_Progress"
import { Layout_Signup_Wrapper } from "./styles/Layout_Signup_Wrapper"

type TopBottomLayout_Type = {
  shouldNotShowTop: boolean
  shouldNotShowBottom: boolean
  topProgressbarActualStep: Layout_Signup_Progress_Props
}

type WhichDataShouldDisplay_Type = {
  title: string | null
  paragraph: string | null
  progressBar?: Layout_Signup_Progress_Props
  footerData?: Layout_Signup_Footer_Props | null
}

export type StepsMessagess_Type = {
  [Key in keyof typeof ALL_ROUTES.SIGNUP_STEPS]: WhichDataShouldDisplay_Type
}

const stepsMessagessAside: StepsMessagess_Type = {
  SIGNUP: {
    title: "Sign up here for free access to all of our resources",
    paragraph:
      "With a free account, you’ll be able to create your care plan(s) and get full access to resources and providers near you",
    progressBar: null,
    footerData: null,
  },

  WHO_ARE_YOU: {
    title: "Let’s begin the journey by getting to know you!",
    paragraph: "This information helps us customize your dashboard",
    progressBar: 1,
    footerData: null,
  },
  CREATE_PROFILE: {
    title: null,
    paragraph: null,
    progressBar: 2,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["BUILD MANUALLY"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU,
    },
  },
  DEMOGRAPHY: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["NEXT"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.SITUATION,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE,
    },
  },
  SITUATION: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["NEXT"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY,
    },
  },
  TELL_US_YOUR_STORY: {
    title: null,
    paragraph: null,
    progressBar: 3,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["SAVE"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.SITUATION,
    },
  },
  REVIEW_AND_SAVE: {
    title: "Saved profiles",
    paragraph: "Review your profiles or create a new one",
    progressBar: 4,
    footerData: {
      howManyButtons: 1,
      textButtons: {
        second: TextButtonsSecond_Enum["FINISH"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.FINISH,
    },
  },
  FINISH: {
    title: "Almost there...",
    paragraph: "You’re one step away!",
    footerData: null,
  },
}

export const Layout_Signup = ({ children, title }) => {
  const { asPath, isReady } = useRouter()
  const { push } = useNavigation()

  const { actualRoute, formatRouteToTitle, actualRouteIsValid, toTitleText } =
    useFormattingRoute({
      acceptedRoutes: Object.keys(ALL_ROUTES.SIGNUP_STEPS),
      routeToCheck: asPath,
      isReady,
      push,
    })

  const whichDataShouldDisplay = useMemo((): WhichDataShouldDisplay_Type => {
    const objectData = stepsMessagessAside[`${actualRoute}`]

    return {
      title: objectData?.title || null,
      paragraph: objectData?.paragraph || null,
      footerData: objectData?.footerData || null,
    }
  }, [asPath])

  const topBottomLayout = useMemo((): TopBottomLayout_Type => {
    const theRouteFormatted = actualRoute?.toLowerCase()

    const shouldNotShowTop =
      theRouteFormatted === ALL_ROUTES.SIGNUP_STEPS.SIGNUP ||
      theRouteFormatted === ALL_ROUTES.SIGNUP_STEPS.FINISH

    const shouldNotShowBottom =
      theRouteFormatted === ALL_ROUTES.SIGNUP_STEPS.SIGNUP ||
      theRouteFormatted === ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU ||
      theRouteFormatted === ALL_ROUTES.SIGNUP_STEPS.FINISH

    const topProgressbarActualStep: Layout_Signup_Progress_Props =
      stepsMessagessAside[`${theRouteFormatted?.toUpperCase()}`]?.progressBar

    return { shouldNotShowTop, shouldNotShowBottom, topProgressbarActualStep }
  }, [asPath])

  if (formatRouteToTitle === null || actualRouteIsValid === false) return null

  return (
    <>
      <Head>
        <title>
          {title} Signup {toTitleText}
        </title>
        <meta name="description" content="inclusive - website" />
      </Head>

      <Layout_Signup_Wrapper
        asideShouldShow={
          whichDataShouldDisplay.title !== null &&
          whichDataShouldDisplay.paragraph !== null
        }
        shouldShowBackground={
          actualRoute?.toLocaleLowerCase() ===
          ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE
        }
      >
        {whichDataShouldDisplay.title !== null &&
        whichDataShouldDisplay.paragraph !== null ? (
          <aside>
            <INDEX_Logo whichOneShouldDisplay="white" />
            <H3>{whichDataShouldDisplay.title}</H3>
            <P>{whichDataShouldDisplay.paragraph}</P>
          </aside>
        ) : (
          <INDEX_Logo />
        )}

        {topBottomLayout.shouldNotShowTop ? null : (
          <Layout_Signup_Progress
            actualProgress={topBottomLayout.topProgressbarActualStep}
          />
        )}

        <main>{children}</main>

        {topBottomLayout.shouldNotShowBottom ? null : (
          <Layout_Signup_Footer
            howManyButtons={whichDataShouldDisplay.footerData?.howManyButtons}
            textButtons={whichDataShouldDisplay.footerData?.textButtons}
            toWhere={whichDataShouldDisplay.footerData?.toWhere}
            toPrevious={whichDataShouldDisplay.footerData?.toPrevious}
          />
        )}
      </Layout_Signup_Wrapper>
    </>
  )
}
