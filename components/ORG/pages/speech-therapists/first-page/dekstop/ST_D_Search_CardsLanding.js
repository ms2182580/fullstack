import { useReducer, useState } from "react"
import { H1, H2 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { UnderConstruction } from "../../../../under-construction/UnderConstruction.js"
import { ST_D_Search_LandingThree } from "./ST_D_Search_LandingThree.js"
import { ST_D_Search_ThreeCardsLanding } from "./ST_D_Search_ThreeCardsLanding.js"
import { ST_D_Search_CardsLandingWrapper } from "./styles/ST_D_Search_CardsLandingWrapper.js"
import { ST_D_Search_MustShowResultsWrapper } from "./styles/ST_D_Search_MustShowResultsWrapper.js"

const reducer = (state, action) => {
  switch (action.type) {
    case "get_data": {
      return {
        ...state,
        SpeechTherapists: [...action.payload]
      }
    }
  }
  throw Error("Unknown action: " + action.type)
}

const initialState = {
  SpeechTherapists: []
}

export const ST_D_Search_CardsLanding = () => {
  const [mustShowResults, setMustShowResults] = useState(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ST_D_Search_CardsLandingWrapper>
      <H1 hover>Resources</H1>

      <ST_D_Search_ThreeCardsLanding
        setMustShowResults={setMustShowResults}
        dispatch={dispatch}
        mustShowResults={mustShowResults}
      />

      {mustShowResults === false ? (
        <H2 hover>Select a resource above to view top rated services near you!</H2>
      ) : mustShowResults && state.SpeechTherapists.length === 0 ? (
        <>
          <UnderConstruction />
        </>
      ) : (
        mustShowResults &&
        state.SpeechTherapists.length !== 0 && (
          <ST_D_Search_MustShowResultsWrapper>
            <H2 hover>Top Therapeutic Services</H2>

            <ST_D_Search_LandingThree dataToUse={state.SpeechTherapists[0]} />
          </ST_D_Search_MustShowResultsWrapper>
        )
      )}
    </ST_D_Search_CardsLandingWrapper>
  )
}
