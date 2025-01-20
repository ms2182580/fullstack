import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  ButtonDisplayFeaturesExpected,
  ExpectedFeatures,
} from "@/components/ui/expected_features"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { OrgSecondWrapper } from "./styles/org-second-wrapper"

// const rootRoute = `${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.NEW_SEARCH}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}`

type Props = {
  theRootRoute?: string
}

export const OrgSecond = ({ theRootRoute }: Props) => {
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
      <OrgSecondWrapper style={{ position: "relative" }}>
        <h1>Org Second Component</h1>{" "}
        <Link
          href={`/${theRootRoute}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.FIRST}`}
        >
          To First page, search
        </Link>
        <Link
          href={`/${theRootRoute}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.THIRD}`}
        >
          To Third page, details
        </Link>
        <ButtonDisplayFeaturesExpected
          openDialog={openDialog}
          checkModalIsOpen={checkModalIsOpen}
        />
      </OrgSecondWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ExpectedFeatures
          forWhichPage={titleForFeatures}
          figmaFileURL="https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=374-191210&t=kz5SBPVajWEwXiYR-4"
          expectedFeatures={expectedFeatures}
          routeOfComponent={
            "@/components/teams/new-search/resources/org/01-second/index.tsx"
          }
        />
      </Dialog_D>
    </>
  )
}

const titleForFeatures = (
  <>
    Expected features for <strong>OrgSecond</strong> component
  </>
)

const expectedFeatures = [
  <>
    This component is almost the same as the <b>ORG 2° page: Results</b> but
    with some small changes on the width
  </>,
  <>
    In order to re use the component already coded on{" "}
    <b>ORG 2° page: Results</b> you should check how the data is pass from the{" "}
    <b>ORG 1° page</b> to the second page. The data of this is in the component{" "}
    <b>org-cards-first.tsx</b> which route is{" "}
    <code>@/components/org/flow/first-page/desktop/org-cards-first.tsx</code>{" "}
    using the function <code>handleMoveToSecondPage_Backend</code> to move to
    the second page and with <code>handleMoveToThirdPage_Backend</code> to move
    to the third page. There you can check which data is expected to receive and
    how to pass it
  </>,
  <>The filters are are also the same</>,
]
