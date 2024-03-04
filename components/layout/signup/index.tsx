import { NEUTRALS } from "@/assets/Colors"
import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { useMemo } from "react"
import {
  Layout_Signup_Progress,
  Layout_Signup_Progress_Props,
} from "./Layout_Signup_Progress"
import { Layout_Signup_Wrapper } from "./styles/Layout_Signup_Wrapper"

type HowIsData = {
  title: string | null
  paragraph: string | null
  progressBar?: Layout_Signup_Progress_Props
}

export type StepsMessagess_Type = {
  [Key in keyof typeof ALL_ROUTES.SIGNUP_STEPS]: HowIsData
}

const stepsMessagess: StepsMessagess_Type = {
  SIGNUP: {
    title: "Sign up here for free access to all of our resources",
    paragraph:
      "With a free account, you’ll be able to create your care plan(s) and get full access to resources and providers near you",
    progressBar: null,
  },

  WHO_ARE_YOU: {
    title: "Let’s begin the journey by getting to know you!",
    paragraph: "This information helps us customize your dashboard",
    progressBar: 1,
  },
  CREATE_PROFILE: { title: null, paragraph: null, progressBar: 2 },
  CREATE_PROFILE1: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
  },
  CREATE_PROFILE2: {
    title: "Add profile information",
    paragraph: "Creating a profile helps us find what you need faster",
    progressBar: 2,
  },
  TELL_US_YOUR_STORY: {
    title: null,
    paragraph: null,
  },
  REVIEW_AND_SAVE: {
    title: "Saved profiles",
    paragraph: "Review your profiles or create a new one",
    progressBar: 3,
  },
  FINISH: {
    title: "Almost there...",
    paragraph: "You’re one step away!",
    progressBar: 4,
  },
}

const formattingRoute = ({ routeToCheck }) => {
  const actualRoute = routeToCheck.split("/").at(-1)?.toUpperCase()
  return actualRoute
}

export const Layout_Signup = ({ children }) => {
  const { asPath } = useRouter()

  const whichDataShouldDisplay = useMemo((): HowIsData => {
    let formatRoute = formattingRoute({ routeToCheck: asPath })

    let objectData = stepsMessagess[`${formatRoute}`]

    return {
      title: objectData?.title || "no title",
      paragraph: objectData?.paragraph || "no paragraph",
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
      stepsMessagess[`${formatRoute.toUpperCase()}`]?.progressBar

    return { shouldNotShowTop, shouldNotShowBottom, topProgressbarActualStep }
  }, [asPath])

  return (
    <Layout_Signup_Wrapper>
      <aside>
        <INDEX_Logo logoColor={NEUTRALS.OFF_WHITE} />
        <H3>{whichDataShouldDisplay.title}</H3>
        <P>{whichDataShouldDisplay.paragraph}</P>
      </aside>

      {topBottomLayout.shouldNotShowTop ? null : (
        <Layout_Signup_Progress
          actualProgress={topBottomLayout.topProgressbarActualStep}
        />
      )}

      <div>{children}</div>

      {topBottomLayout.shouldNotShowBottom ? null : (
        <footer>
          <button>BUttons</button>
        </footer>
      )}
    </Layout_Signup_Wrapper>
  )
}
