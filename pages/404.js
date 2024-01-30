import { Custom404_Component } from "@/components/error-page/error-page"

const Custom404 = () => {
  // const router = useRouter()
  // const [checkSomePath, setCheckSomePath] = useState(null)

  // useEffect(() => {
  //   const routeToMatch = router.asPath.match(/(?<=\/)\w*/)[0]
  //   const checkSomePath = DATA_ORG_CheckPaths_Search_D.filter(
  //     (x) => x === routeToMatch
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
  //             DATA_ORG_D[thisIndex].componentName,
  //         },
  //       },
  //       `/${ALL_ROUTES.ORG}`
  //     )
  //   } else {
  //     setCheckSomePath(true)
  //   }
  // }, [])

  return (
    <>
      <Custom404_Component />

      {/* {checkSomePath !== null && (
        <Custom404Wrapper Custom404Wrapper>
          <span>
            <LinkNoStyle href={router.query.toWhere || "/"}>
              <BackArrow /> <P semibold>Back</P>
            </LinkNoStyle>
          </span>
          <UnderConstruction />
        </Custom404Wrapper>
      )} */}
    </>
  )
}

export default Custom404
