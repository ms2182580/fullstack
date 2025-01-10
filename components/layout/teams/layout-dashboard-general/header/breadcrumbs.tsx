import { CodeHighlighted } from "@/components/code_highlight"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  ButtonDisplayFeaturesExpected,
  ExpectedFeatures,
} from "@/components/ui/expected_features"
import { BreadcrumbsWrapper } from "./styles/breadcrumbs-wrapper"

export const Breadcrumbs = () => {
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
      <BreadcrumbsWrapper style={{ position: "relative" }}>
        <h2>Breadcrumbs</h2>

        <ButtonDisplayFeaturesExpected
          openDialog={openDialog}
          checkModalIsOpen={checkModalIsOpen}
        />
      </BreadcrumbsWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ExpectedFeatures
          forWhichPage={titleForFeatures}
          figmaFileURL="https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=374-182624&t=kz5SBPVajWEwXiYR-4"
          expectedFeatures={expectedFeatures}
          routeOfComponent={
            "@/components/layout/teams/layout-dashboard-general/header/breadcrumbs.tsx"
          }
        />
      </Dialog_D>
    </>
  )
}

const titleForFeatures = (
  <>
    Expected features for <strong>Breadcrumbs</strong> component
  </>
)

const expectedFeatures = [
  <>
    <b>Breadcrumbs</b> component will be displayed always when the user is in
    the route:
    <ul>
      <li>
        <b>/teams/new-search</b> or
      </li>
      <li>
        <b>/teams/new-search/[whatever]</b>
      </li>
    </ul>{" "}
  </>,
  <>
    The breadcrumbs will display the route of the user allowing to move the view
    if it make sense. For example, for the route: <code>/teams/new-search</code>
    doesn't make sense to allow the user to move to <code>/teams</code> because
    that will lead to an <code>auth</code> page but it make sense on{" "}
    <code>/teams/new-search/categories</code>
    to move the view to <code>/teams/new-search</code>. If this is too
    complicated make the breadcrumbs without interaction and only display the
    correct breadcrumb based on the URL
  </>,
  <>
    Breadcrumbs have a <code>{"<<"} Go Back</code>, this should move the view of
    the user to the previous route. The <code>nextjs</code> hook{" "}
    <code>useRouter</code> from <code>"next/router"</code> should allow to use
    this feature with a simple <code>useRouter().back()</code>. In the code it
    should look like this:
    <CodeHighlighted
      code={`
      import { useRouter } from "next/router"
  
      export const SomeComponent = () => {
        const { back } = useRouter()
        return <button onClick={back}>Go Back page</button>  
      }`}
    />
  </>,
]
