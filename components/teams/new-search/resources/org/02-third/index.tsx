import { CodeHighlighted } from "@/components/code_highlight"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  ButtonDisplayFeaturesExpected,
  ExpectedFeatures,
} from "@/components/ui/expected_features"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { OrgThirdWrapper } from "./styles/org-third-wrapper"

type Props = {
  theRootRoute?: string
}

export const OrgThird = ({ theRootRoute }: Props) => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    setCheckModalIsOpen,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <OrgThirdWrapper style={{ position: "relative" }}>
        <h1>Org Third Component</h1>

        <Link
          href={`/${theRootRoute}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND}`}
        >
          To Second screen, results
        </Link>

        <ButtonDisplayFeaturesExpected
          openDialog={openDialog}
          checkModalIsOpen={checkModalIsOpen}
        />
      </OrgThirdWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ExpectedFeatures
          forWhichPage={titleForFeatures}
          figmaFileURL="https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=296-161712&t=kz5SBPVajWEwXiYR-4"
          expectedFeatures={expectedFeatures}
          routeOfComponent={
            "@/components/teams/new-search/resources/org/02-third/index.tsx"
          }
        />
      </Dialog_D>
    </>
  )
}

const titleForFeatures = (
  <>
    Expected features for <strong>OrgThird</strong> component
  </>
)

const expectedFeatures = [
  "This is a totally new page. It works only here on teams, so, new UI should be created",
  "Plese, read all the indications on the figma file, whereas be comments or post it",
  <>
    This component have a "tab" behavior. So far we have that behavior on the
    component <code>tabs-content.tsx</code> which route is:{" "}
    <code>@/components/dashboard/desktop/care_plan/tabs/tabs-content.tsx</code>.
    The main point is to use this pattern:
    <CodeHighlighted
      code={`
            export const SomeComponent = () => {
              return (
                {someArrayOfComponent.map(({ theComponent }, index) => {
                    const isVisible = index === checkIfIsTabActive 
                    /* This variable can come from outside, from props 
                    or context. The idea with this is to keep the state 
                    only displaying the active tab by CSS and not 
                    using a 'display: none;' */
                    
                    /* Another way to do it is like this:
                    if (index !== actualComponentShowed) return null 
                    With this you display only the active tab removing
                    the other components. This doesn't keep the state
                    */
                    /* 
                    The 'Fragment', 'isValidElement' and 'cloneElement' can 
                    be imported from React. This pattern is used despite 
                    if you are going to use the "isVisible" or the 
                    "return null" approach. 
                    As you can see, the "isVisible" pass as prop 
                    to the corresponding component
                    */
                    return (
                      <Fragment key={index} isVisible={isVisible}>
                        {isValidElement(component) &&
                          cloneElement(component, propsToComponent)}
                      </Fragment>
                )})}
              )
            }`}
    />
  </>,
  <>
    Please, try to use the context to pass props to the third page (
    <code>handleMoveToThirdPage_Backend</code> function). If is too complicated
    I understand, only display static data instead
  </>,
]
