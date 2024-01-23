import { BackArrow } from "@/assets/icons"
import { UnderConstruction } from "@/components/under-construction/UnderConstruction"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { Custom404Wrapper } from "./styles/Custom404Wrapper"

export const Custom404_Component = () => {
  // const router = useRouter()
  // const [checkSomePath, setCheckSomePath] = useState<boolean | null>(null)

  // useEffect(() => {
  //   const routeToMatch = router?.asPath?.match(/(?<=\/)\w*/) ?? ""
  //   const checkSomePath = DATA_ORG_CheckPaths_Search_D.filter(
  //     (x) => x === routeToMatch[0]
  //   )

  //   if (checkSomePath.length !== 0) {
  //     let thisIndex = DATA_ORG_D.findIndex(
  //       (x) => x.acronym === checkSomePath[0]
  //     )

  //     router.push(
  //       {
  //         pathname: `/${ALL_ROUTES.ORG}`,
  //         query: {
  //           [ROUTER_PUSH_SEARCH.nameJSX]: DATA_ORG_D[thisIndex].nameJSX,
  //           [ROUTER_PUSH_SEARCH.componentName]:
  //             "COMPONENT_NAME_DOESN'T_EXIST_ANYMORE",
  //         },
  //       },
  //       `/${ALL_ROUTES.ORG}`
  //     )
  //   } else {
  //     setCheckSomePath(true)
  //   }
  // }, [])

  // const toHref = "/"

  return (
    <>
      {/* {checkSomePath !== null && (
        <Custom404Wrapper>
          <span>
            <Link href={toHref}>
              <BackArrow /> <P semibold>Back</P>
            </Link>
          </span>
          <UnderConstruction />
        </Custom404Wrapper>
      )} */}

      <Custom404Wrapper>
        <span>
          <Link href={`${ALL_ROUTES.HOME}`}>
            <BackArrow /> <P semibold>Back</P>
          </Link>
        </span>
        <UnderConstruction />
      </Custom404Wrapper>
    </>
  )
}
