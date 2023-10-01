import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BackArrow } from "../assets/Icons"
import { P } from "../components/ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../components/ui/hyperlink/HyperlinkNoStyles"
import { UnderConstruction } from "../components/under-construction/UnderConstruction"
import { DATA_ORG_CheckPaths_Search_D, ROUTER_PUSH_SEARCH } from "../utils/ORG/DATA_ORG_CheckPaths_Search_D"
import { DATA_ORG_D } from "../utils/ORG/DATA_ORG_D"
import Custom404Wrapper from "./styles/Custom404Wrapper.js"

const Custom404 = () => {
  const router = useRouter()
  const [checkSomePath, setCheckSomePath] = useState(null)

  useEffect(() => {
    const routeToMatch = router.asPath.match(/(?<=\/)\w*/)[0]
    const checkSomePath = DATA_ORG_CheckPaths_Search_D.filter((x) => x === routeToMatch)

    if (checkSomePath.length !== 0) {
      let thisIndex = DATA_ORG_D.findIndex((x) => x.acronym === checkSomePath[0])

      router.push(
        {
          pathname: `/ORG`,
          query: { [ROUTER_PUSH_SEARCH.nameJSX]: DATA_ORG_D[thisIndex].nameJSX, [ROUTER_PUSH_SEARCH.componentName]: DATA_ORG_D[thisIndex].componentName },
        },
        `/ORG`,
      )
    } else {
      setCheckSomePath(true)
    }
  }, [])

  return (
    <>
      {checkSomePath !== null && (
        <Custom404Wrapper Custom404Wrapper>
          <span>
            <LinkNoStyle href={router.query.toWhere || "/"}>
              <BackArrow /> <P semibold>Back</P>
            </LinkNoStyle>
          </span>
          <UnderConstruction />
        </Custom404Wrapper>
      )}
    </>
  )
}

export default Custom404
