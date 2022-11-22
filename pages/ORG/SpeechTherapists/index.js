import Customdropdown from "../../../components/ORG/dropdown/CustomDropdown"
import { OptionsWrapper } from "../../../components/ORG/dropdown/styles/Customdropdown"
import CustomInput from "../../../components/ORG/inputs/CustomInput"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import SpeechTherapistWraper from "./styles/SpeechTherapistWrapper"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import { BackArrow } from "../../../assets/Icons"
import Breadcrumbs from "../../../components/ui/breadcrumbs/Breadcrumbs"
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles"
import { useFetch } from "../../../utils/ORG_dummydata_speechtherapists"
import LoadingSpeechTherapists from "../../../components/ORG/speech-therapists/LoadingSpeechTherapists"
import STFiltersTherapistsButtons from "../../../components/ORG/speech-therapists/AllSpeechtherapists"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"
import { useState } from "react"

const ORGSpeechTherapists = () => {
  const {
    keywordsContext,
    citiesContext,
    setKeywordsContext,
    setCitiesContext
  } = useORG_InputCtx()

  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]
  const suggestionDropdownSSA = []
  const suggestionDropdownCC = []

  const { pagination, howMuchShow, setPagination } = useORG_Ctx_PaginationAndHowMuchShow()

  const { data: userFetched, filters: filtersST} = useFetch(
    `https://randomuser.me/api/?results=${howMuchShow}&nat=us&page=${pagination}`
  )
  
  
  if (userFetched === undefined) {
    return <LoadingSpeechTherapists />
  }

  return (
    <>
      {userFetched !== undefined && (
        <>
          <SpeechTherapistWraper>
            <div>
              {" "}
              <span>
                <LinkNoStyle href="/ORG">
                  <BackArrow /> Back
                </LinkNoStyle>
              </span>{" "}
            </div>

            <Breadcrumbs
              whichDisplay={[
                ["Resource Directory", "ORG"],
                ["Speech Therapist", ""]
              ]}
            />

            <CustomInput
              setKeywordsContext={setKeywordsContext}
              setCitiesContext={setCitiesContext}
              keywordValueContext={keywordsContext}
              citiesValueContext={citiesContext}
            />

            <OptionsWrapper>
              <Customdropdown
                icon={ORG_LANDING_TP}
                title="Therapeutic Providers"
                suggestions={suggestionDropdownTP}
              />
              <Customdropdown
                icon={ORG_LANDING_SSA}
                title="Social Service Agencies"
                suggestions={suggestionDropdownSSA}
              />
              <Customdropdown
                icon={ORG_LANDING_CC}
                title="Community Classes"
                suggestions={suggestionDropdownCC}
              />
            </OptionsWrapper>
          </SpeechTherapistWraper>

          <STFiltersTherapistsButtons
            userFetched={userFetched}
            filtersST={filtersST}
            pagination={pagination}
            setPagination={setPagination}
          />
        </>
      )}
    </>
  )
}

export default ORGSpeechTherapists
