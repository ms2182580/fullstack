import { useState } from "react"
import {
  Model_Success_Wrapper,
  Model_Wrapper,
  SaveResource_Card,
  SaveResource_Filter,
  SaveResource_MainWrapper,
  SaveResource_SearchDiv,
} from "./styles/MainWrapper"
import { ButtonSmall } from "../ui/buttons/general"
import { Checkbox } from "../common/checkbox"
import {
  Agencies_Icon_SVG,
  Close_Icon_SVG,
  Edutcation_Icon_SVG,
  File_Icon_SVG,
  Filter_Icon_SVG,
  Legal_Icon_SVG,
  Madical_Icon_SVG,
  Search_Icon_SVG,
  Single_Man_Icon_SVG,
  VerifiedTicket2Svg,
} from "@/assets/icons"
import { H2, H3, H4 } from "../ui/heading_body_text/HeaderFonts"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"

export const INDEX_SaveResources = () => {
  const [openFilterPopup, setOpenFilterPopup] = useState(false)
  const [openAddCarePopup, setOpenAddCarePopup] = useState(false)
  const [openViewCarePopup, setOpenViewCarePopup] = useState(false)

  return (
    <SaveResource_MainWrapper>
      <H3 lineHeight="48px" dark_maroon>
        Saved Resources
      </H3>
      <P>View the resources that you have previously saved </P>
      <div className="search-content">
        <SaveResource_SearchDiv>
          <div>
            <Search_Icon_SVG />
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Search plans "
          />
        </SaveResource_SearchDiv>
        <SaveResource_Filter>
          <div
            className="filter-menu"
            onClick={() => setOpenFilterPopup(!openFilterPopup)}
          >
            <div>
              <Filter_Icon_SVG />
            </div>
            <div className="text">Filters</div>
          </div>
          {openFilterPopup && (
            <div className="filter-box">
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <Madical_Icon_SVG />
                  </div>
                  <div>Medical</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <Edutcation_Icon_SVG />
                  </div>
                  <div>Education</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <Single_Man_Icon_SVG />
                  </div>
                  <div>Programs</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <Legal_Icon_SVG />
                  </div>
                  <div>Legal Services</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <Agencies_Icon_SVG />
                  </div>
                  <div>Agencies</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-buttons">
                <div onClick={() => setOpenFilterPopup(false)}>
                  <ButtonSmall>
                    <span>Apply</span>
                  </ButtonSmall>
                </div>
                <div onClick={() => setOpenFilterPopup(false)}>
                  <ButtonSmall secondary>
                    <span>Cancel</span>
                  </ButtonSmall>
                </div>
              </div>
            </div>
          )}
        </SaveResource_Filter>
      </div>
      <div className="body-content">
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/karate.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Karate Group Class</div>
              <div className="description">Kicking the Spectrum</div>
            </div>
            <div className="country">New York, NY</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/permobil.png" alt="karate" />
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Permobil F5 Corpus VS</div>
              <div className="description">
                Power wheelchair with standing power
              </div>
            </div>
            <div className="country">Online</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/belcore.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Belcore Day Camp Facility</div>
              <div className="description">Day camp</div>
            </div>
            <div className="country">Brooklyn, NY</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/housing.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">
                Housing Advocacy for People with Disabilities
              </div>
              <div className="description">Housing agency</div>
            </div>
            <div className="country">Brooklyn, NY</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/nyl.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">NYL William O’Conner Middle School</div>
              <div className="description">Early childhood education</div>
            </div>
            <div className="country">City, State</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/dr.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Dr. Clara Fernandez-Perez, PhD, MD</div>
              <div className="description">Psychiatrist</div>
            </div>
            <div className="country">Chelsea, New York</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/denis.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Denise N. Truong-MacGill, JD</div>
              <div className="description">Attorney</div>
            </div>
            <div className="country">New York, NY</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/kris.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <VerifiedTicket2Svg />
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Dr. Kristie Leung, LMHC</div>
              <div className="description">Psychotherapist</div>
            </div>
            <div className="country">City, State</div>
            <div className="card-footer">
              <div onClick={() => setOpenAddCarePopup(true)}>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
      </div>
      {openAddCarePopup && (
        <Model_Wrapper>
          <div className="header">
            <div className="text">
              Which care plan would you like to add this resource to?
            </div>
            <div onClick={() => setOpenAddCarePopup(false)}>
              <Close_Icon_SVG />
            </div>
          </div>
          <div className="content_container">
            <div className="item">
              <Checkbox />
              <div className="text">
                {" "}
                <File_Icon_SVG /> John's Care Plan
              </div>
            </div>
            <div className="item">
              <Checkbox />
              <div className="text">
                {" "}
                <File_Icon_SVG /> John's Care Plan
              </div>
            </div>
          </div>
          <div className="footer">
            <div
              onClick={() => {
                setOpenAddCarePopup(false)
                setOpenViewCarePopup(true)
              }}
            >
              <ButtonSmall>Add Resource</ButtonSmall>
            </div>
            <div onClick={() => setOpenAddCarePopup(false)}>
              <ButtonSmall secondary>Create new plan</ButtonSmall>
            </div>
          </div>
        </Model_Wrapper>
      )}
      {openViewCarePopup && (
        <Model_Success_Wrapper>
          <div className="header">
            <div onClick={() => setOpenViewCarePopup(false)}>
              <Close_Icon_SVG />
            </div>
          </div>
          <div className="content_container">
            <img src="/images/model_suc.png" alt="model_suc" />

            <div className="text">
              <H4>Success! ‘XYZ Resource’ has been saved.</H4>
              <P>View your changes to your care plan now!</P>
            </div>
            <div className="footer" onClick={() => setOpenViewCarePopup(false)}>
              <ButtonSmall>View care plan</ButtonSmall>
            </div>
          </div>
        </Model_Success_Wrapper>
      )}
    </SaveResource_MainWrapper>
  )
}
