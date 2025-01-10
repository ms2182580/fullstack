import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  ButtonDisplayFeaturesExpected,
  ExpectedFeatures,
} from "@/components/ui/expected_features"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { INDEX_NewsearchWrapper } from "./styles/index-wrapper"

export const INDEX_Newsearch = () => {
  const { asPath } = useRouter()

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
      <INDEX_NewsearchWrapper style={{ position: "relative" }}>
        <h1>INDEX_Newsearch</h1>
        <div>
          <Link
            href={`${asPath}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND}`}
          >
            Search Resources
          </Link>
          <Link
            href={`${asPath}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.CATEGORIES}`}
          >
            Search Categories
          </Link>
        </div>

        <ButtonDisplayFeaturesExpected
          openDialog={openDialog}
          checkModalIsOpen={checkModalIsOpen}
        />
      </INDEX_NewsearchWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ExpectedFeatures
          forWhichPage={featuresForThisPage}
          figmaFileURL="https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=374-180030&t=kz5SBPVajWEwXiYR-4"
          expectedFeatures={[
            "All the expected features are in the UI on the figma file. Please check the provided figma URL",
          ]}
          routeOfComponent={"@/components/teams/new-search/index.tsx"}
        />
      </Dialog_D>
    </>
  )
}

const featuresForThisPage = (
  <>
    Expected features for <strong>New Search</strong> component
  </>
)
