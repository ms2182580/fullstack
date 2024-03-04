import { NEUTRALS } from "@/assets/Colors"
import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
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

type HowIsData = {
  title: string | null
  paragraph: string | null
  progressBar?: Layout_Signup_Progress_Props
  footerData?: Layout_Signup_Footer_Props | null
}

export type StepsMessagess_Type = {
  [Key in keyof typeof ALL_ROUTES.SIGNUP_STEPS]: HowIsData
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
      toWhere: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE1,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU,
    },
  },
  CREATE_PROFILE1: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["NEXT"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE2,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE,
    },
  },
  CREATE_PROFILE2: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["NEXT"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE1,
    },
  },
  TELL_US_YOUR_STORY: {
    title: null,
    paragraph: null,
    footerData: {
      howManyButtons: 2,
      textButtons: {
        second: TextButtonsSecond_Enum["SAVE"],
      },
      toWhere: ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE,
      toPrevious: ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE2,
    },
  },
  REVIEW_AND_SAVE: {
    title: "Saved profiles",
    paragraph: "Review your profiles or create a new one",
    progressBar: 3,
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
    progressBar: 4,
    footerData: null,
  },
}

export const footerData = {}

const formattingRoute = ({ routeToCheck }) => {
  const actualRoute = routeToCheck.split("/").at(-1)?.toUpperCase()
  return actualRoute
}

export const Layout_Signup = ({ children }) => {
  const { asPath } = useRouter()

  const whichDataShouldDisplay = useMemo((): HowIsData => {
    let formatRoute = formattingRoute({ routeToCheck: asPath })

    let objectData = stepsMessagessAside[`${formatRoute}`]

    return {
      title: objectData?.title || null,
      paragraph: objectData?.paragraph || null,
      footerData: objectData?.footerData || null,
    }
  }, [asPath])

  const topBottomLayout = useMemo(() => {
    let formatRoute = formattingRoute({ routeToCheck: asPath }).toLowerCase()

    let shouldNotShowTop =
      formatRoute === ALL_ROUTES.SIGNUP_STEPS.SIGNUP ||
      formatRoute === ALL_ROUTES.SIGNUP_STEPS.FINISH

    let shouldNotShowBottom =
      formatRoute === ALL_ROUTES.SIGNUP_STEPS.SIGNUP ||
      formatRoute === ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU ||
      formatRoute === ALL_ROUTES.SIGNUP_STEPS.FINISH

    let topProgressbarActualStep: Layout_Signup_Progress_Props =
      stepsMessagessAside[`${formatRoute.toUpperCase()}`]?.progressBar

    return { shouldNotShowTop, shouldNotShowBottom, topProgressbarActualStep }
  }, [asPath])

  return (
    <Layout_Signup_Wrapper
      asideShouldShow={
        whichDataShouldDisplay.title !== null &&
        whichDataShouldDisplay.paragraph !== null
      }
    >
      {whichDataShouldDisplay.title !== null &&
      whichDataShouldDisplay.paragraph !== null ? (
        <>
          <aside>
            <INDEX_Logo logoColor={NEUTRALS.OFF_WHITE} />
            <H3>{whichDataShouldDisplay.title}</H3>
            <P>{whichDataShouldDisplay.paragraph}</P>
          </aside>
        </>
      ) : (
        <INDEX_Logo />
      )}

      {topBottomLayout.shouldNotShowTop ? null : (
        <Layout_Signup_Progress
          actualProgress={topBottomLayout.topProgressbarActualStep}
        />
      )}

      <div>{children}</div>

      {topBottomLayout.shouldNotShowBottom ? null : (
        <Layout_Signup_Footer
          howManyButtons={whichDataShouldDisplay.footerData?.howManyButtons}
          textButtons={whichDataShouldDisplay.footerData?.textButtons}
          toWhere={whichDataShouldDisplay.footerData?.toWhere}
          toPrevious={whichDataShouldDisplay.footerData?.toPrevious}
        />
      )}
    </Layout_Signup_Wrapper>
  )
}
