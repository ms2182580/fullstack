import { ReactElement } from "react"
import { ExpectedFeaturesWrapper } from "./styles/index-wrapper"

type Props = {
  expectedFeatures?: (string | ReactElement)[] | null
  forWhichPage?: string | ReactElement
  figmaFileURL?: string | null
  routeOfComponent?: string | null
}

export const ExpectedFeatures = ({
  expectedFeatures = null,
  forWhichPage = "unknown page for",
  figmaFileURL = null,
  routeOfComponent = null,
}: Props) => {
  return (
    <ExpectedFeaturesWrapper>
      <fieldset>
        <legend>{forWhichPage}</legend>

        <fieldset>
          <legend>Features expected</legend>
          {expectedFeatures ? (
            <ol>
              {expectedFeatures.map((x, index) => {
                return <li key={`${x}_${index}`}>{x}</li>
              })}
            </ol>
          ) : (
            <p>Not expected features provided</p>
          )}
        </fieldset>

        <fieldset>
          <legend>URL for figma file</legend>

          {figmaFileURL ? (
            <p>
              <a href={figmaFileURL} target="_blank" rel="noreferrer">
                URL
              </a>
            </p>
          ) : (
            <p>Figma file URL not provided</p>
          )}
        </fieldset>

        <fieldset>
          <legend>Route of component on source code</legend>
          {routeOfComponent ? (
            <p>
              <code>{routeOfComponent}</code>
            </p>
          ) : (
            <p>Route of component not provided</p>
          )}
        </fieldset>
      </fieldset>

      <h2>
        <span>This component</span>, <span>the dialog</span> and the{" "}
        <span>button</span> to display it should be <span>deleted</span> or{" "}
        <span>commented</span> when the job is done
      </h2>
    </ExpectedFeaturesWrapper>
  )
}

import { ButtonDisplayFeaturesExpectedWrapper } from "./styles/button-display-features-expected-wrapper"

export const ButtonDisplayFeaturesExpected = ({
  openDialog,
  checkModalIsOpen,
}) => {
  return (
    <ButtonDisplayFeaturesExpectedWrapper
      onClick={openDialog}
      onKeyDown={openDialog}
      tabIndex={0}
      checkModalIsOpen={checkModalIsOpen}
    >
      i
    </ButtonDisplayFeaturesExpectedWrapper>
  )
}
