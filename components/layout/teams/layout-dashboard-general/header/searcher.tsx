import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  ButtonDisplayFeaturesExpected,
  ExpectedFeatures,
} from "@/components/ui/expected_features"
import { SearcherWrapper } from "./styles/searcher-wrapper"

export const Searcher = () => {
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
      <SearcherWrapper>
        <h2>Searcher</h2>
        <ButtonDisplayFeaturesExpected
          openDialog={openDialog}
          checkModalIsOpen={checkModalIsOpen}
        />
      </SearcherWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={closeDialog}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ExpectedFeatures
          forWhichPage={featuresForThisPage}
          figmaFileURL="https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=374-191207&t=kz5SBPVajWEwXiYR-4"
          expectedFeatures={expectedFeatures}
          routeOfComponent={
            "@/components/components/layout/teams/layout-dashboard-general/header/searcher.tsx"
          }
        />
      </Dialog_D>
    </>
  )
}

const featuresForThisPage = (
  <>
    Expected features for <strong>{Searcher.name}</strong> component
  </>
)

const expectedFeatures = [
  <>
    This component should be on all the screens for the route{" "}
    <b>/teams/new-search</b> but not in <b>/teams/new-search</b> and{" "}
    <b>teams/new-search/resources/first</b>. Nonetheless, the route{" "}
    <b>teams/new-search/resources/first</b> can be access only with chatAI, in
    the moment I write this words, the chatAI component is not created
  </>,
]
