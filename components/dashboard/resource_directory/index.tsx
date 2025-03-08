import React, { useState } from "react"
import {
  CategoryWrapper,
  FocusAreasWrapper,
  InformationWrapper,
  LocationWrapper,
} from "./styles/index-wrapper"
import Image from "next/image"
import Link from "next/link"
import savedTopRight from "@/assets/images/Dashboard/Saved/savedTopRight.png"
import savedTopLeft from "@/assets/images/Dashboard/Saved/savedTopLeft.png"
// import LocationInput from "@/assets/icons/LockIcon.png"
import { Breadcrumbs } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs-1"
import MagnifyGlassBlack from "@/assets/icons/search.svg"
import Profile from "@/assets/icons/profile.svg"
import World from "@/assets/icons/world.svg"
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass.svg"

import PsychotherapistFemale from "@/assets/icons/PsychotherapistFemale.svg"
import PhoneSaved from "@/assets/icons/phoneSaved.svg"
import SavedGlobal from "@/assets/icons/SavedGlobal.svg"
import SavedEmail from "@/assets/icons/SavedEmail.svg"
import SavedDirection from "@/assets/icons/SavedDirection.svg"
import SavedOk from "@/assets/icons/SavedOk.svg"
import SavedPayment from "@/assets/icons/savedPayment.svg"
import SavedPocket from "@/assets/icons/SavedPocket.svg"
import SavedChair from "@/assets/icons/SavedChair.svg"
import SavedCar from "@/assets/icons/SavedCar.svg"
import SavedCheck from "@/assets/icons/SavedCheck.svg"
import Map from "@/assets/icons/map.svg"
import LocationInput from "@/assets/icons/LocationInput.svg"
import ConditionInput from "@/assets/icons/ConditionInput.svg"
import Reviews from "@/components/dashboard/resource_directory/reviews"
import Similar from "@/components/dashboard/resource_directory/similar"
import Faqs from "@/components/dashboard/resource_directory/faqs"

const INDEX_D_ResourceDirectory = () => {
  const [activeTab, setActiveTab] = useState("General Information")
  const tabs = ["General Information", "Reviews", "FAQ", "Similar"]
  return (
    <div>
      <CategoryWrapper>
        <div>
          <Breadcrumbs />
          <Image src={savedTopRight} alt="error" />
        </div>

        <div>
          <Image src={savedTopLeft} alt="eror" />
          <div>
            <div>
              <label>Keyword*</label>
              <div>
                <MagnifyGlassBlack />
                <input
                  type="text"
                  placeholder="speech language pathologist (SLP)"
                />
              </div>
            </div>

            <div>
              <label>condition</label>
              <div>
                <i>
                  {" "}
                  <Profile />{" "}
                </i>
                <input type="text" placeholder="autism,cerebral pa.." />
              </div>
            </div>

            <div>
              <label>Location*</label>
              <div>
                <i>

                  <World />
                </i>
                <input type="text" placeholder="19130" />
              </div>
            </div>
            <div>
              <MagnifyingGlass />
            </div>
          </div>
        </div>

        <div>
          <div>
            {tabs.map((item, i) => (
              <button key={i} onClick={() => setActiveTab(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "General Information" ? (
          <>
            <div>
              <div>
                <div>
                  <div>
                    <PsychotherapistFemale />
                  </div>
                  <div>
                    <h1>Dr. Kristie Leung, LMHC</h1>
                    <p>Psychotherapist</p>
                  </div>
                </div>

                <div>
                  <p>
                    I am a dedicated psychotherapist whose therapeutic aim is to
                    support individuals in improving present mental health
                    concerns and bettering other aspects of their lives. I have
                    experience working with diverse populations with a plethora
                    of different diagnoses. I believe in.. see more
                  </p>
                </div>

                <div>
                  <p>About Me:</p>
                  <p><span>Education:</span> New York University</p>
                  <p>Languages:English,Mandarin,Cantonese</p>
                  <p>Years in Practice: 10</p>
                  <p>License Number: 1409990926</p>
                  <p>State of License: New York</p>
                </div>

                <div>
                  <p>Contact Me</p>
                  <div>
                    <div>
                      <i>
                        <PhoneSaved />
                      </i>
                      <p>(123) 456-7890 </p>
                    </div>
                    <div>
                      <i>
                        <SavedGlobal />
                      </i>
                      <Link href="#">www. bellevuementalhealth.com</Link>
                    </div>
                    <div>
                      <i>
                        <SavedEmail />
                      </i>
                      <Link href="#">kristieleung@bellevuehealth.com </Link>
                    </div>
                    <div>
                      <i>

                        <SavedDirection />
                      </i>
                      <p>Directions</p>
                    </div>
                  </div>
                </div>
              </div>
              <FocusAreasWrapper>
                <p>Focus Areas</p>

                <div>
                  <div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>ADHD</p>
                    </div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>ADHD Coaching</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Adolescent/ Teen Issues</p>
                    </div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Anxiety</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Behavioral Therapy</p>
                    </div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Mental Health Consultaiton</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Therapy</p>
                    </div>
                    <div>
                      <span>
                        <SavedOk />
                      </span>
                      <p>Parent Counseling</p>
                    </div>
                  </div>
                </div>
              </FocusAreasWrapper>
              <InformationWrapper>
                <p>Information about the service</p>
                <div>
                  <div>
                    <div>
                      <SavedPayment />
                      <p>Payment Options</p>
                    </div>
                    <div>
                      <SavedPocket />
                      <p>Out-of-pocket Fees:</p>
                    </div>
                    <div>
                      <SavedChair /> <p>Wheelchair Accessible:</p>
                    </div>
                    <div>
                      <SavedCar /> <p>Parking Available:</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>
                        <span>In-network insurance,</span> Medicaid, DOE
                        Contract
                      </p>
                    </div>
                    <div>
                      <p>$200 for 60 minutes</p>
                    </div>
                    <div>
                      <SavedCheck />
                    </div>
                    <div>
                      <SavedCheck />
                    </div>
                  </div>
                </div>
              </InformationWrapper>
              <LocationWrapper>
                <p>Location</p>

                <div>
                  {" "}
                  <p>Bellevue Mental </p>
                  Health 1800 Broadway, Fl 9 New York, NY
                </div>
                <div>
                  <Map />
                </div>
              </LocationWrapper>
            </div>
          </>
        )
          : activeTab === "Reviews" ? (
            <Reviews />
          ) : activeTab === "FAQ" ? (
            <Faqs />
          ) : (
            <Similar />
          )
        }
      </CategoryWrapper>
    </div>
  )
}

export default INDEX_D_ResourceDirectory
