import Image from "next/image.js"
import { useEffect, useState } from "react"
import { ArrowRightSvg, ORG_D_Search_CarePlanSvg } from "../../../../assets/Icons/index.js"
import ORGDesktop_Search_Hero from "../../../../assets/images/ORGDesktop_Search_Hero.png"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H1 } from "../../../ui/heading_body_text/HeaderFonts.js"
import { INDEX_D_ATSearch } from "../../assistive-technology/desktop/INDEX_D_ATSearch.js"
import { INDEX_D_AASearch } from "../../attorney-advocates/desktop/INDEX_D_AASearch.js"
import { INDEX_D_CMPSSearch } from "../../camps/desktop/INDEX_D_CMPSSearch.js"
import { INDEX_D_CCSearch } from "../../community-classes/desktop/INDEX_D_CCSearch.js"
import { ORG_D_SearchComponent } from "../../inputs/desktop/ORG_D_SearchComponent.js"
import { INDEX_D_MHSSSearch } from "../../mental-health/desktop/INDEX_D_MHSSSearch.js"
import { INDEX_D_PPASSearch } from "../../private-public-agencies/desktop/INDEX_D_PPASSearch.js"
import { INDEX_D_PSYTSearch } from "../../psychiatrists/desktop/INDEX_D_PSYTSeatch.js"
import { INDEX_D_RPSearch } from "../../residential-programs/desktop/INDEX_D_RPSearch.js"
import { INDEX_D_SESSearch } from "../../special-education-schools/desktop/INDEX_D_SESSearch.js"
import { INDEX_D_STSearch } from "../../speech-therapists/first-page/dekstop/INDEX_D_STSearch.js"
import { INDEX_D_ORGWrapper } from "./styles/INDEX_D_ORGWrapper.js"

const DATA = [
  { nameJSX: "Assistive Technology", component: INDEX_D_ATSearch, componentName: INDEX_D_ATSearch.name },
  { nameJSX: "Attorney and Advocates", component: INDEX_D_AASearch, componentName: INDEX_D_AASearch.name },
  { nameJSX: "Camps", component: INDEX_D_CMPSSearch, componentName: INDEX_D_CMPSSearch.name },
  /* 
  This is a Doctor I think
  */

  { nameJSX: "Psychiatrists", component: INDEX_D_PSYTSearch, componentName: INDEX_D_PSYTSearch.name },
  { nameJSX: "Community Classes", component: INDEX_D_CCSearch, componentName: INDEX_D_CCSearch.name },
  {
    nameJSX: "Mental Health Support/Services",
    component: INDEX_D_MHSSSearch,
    componentName: INDEX_D_MHSSSearch.name
  },
  {
    nameJSX: "Private & Public Agencies/Services",
    component: INDEX_D_PPASSearch,
    componentName: INDEX_D_PPASSearch.name
  },
  { nameJSX: "Special Education Schools", component: INDEX_D_SESSearch, componentName: INDEX_D_SESSearch.name },
  {
    nameJSX: "Therapeutic Providers & Services",
    component: INDEX_D_STSearch,
    componentName: INDEX_D_STSearch.name
  },
  { nameJSX: "Residential Programs", component: INDEX_D_RPSearch, componentName: INDEX_D_RPSearch.name }
]

export const INDEX_D_ORG = () => {
  const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)

  const [matchNameState, setMatchNameState] = useState("All")

  const handleShowAll = () => {
    setSingleCardIsSelected(false)
    setMatchNameState("All")
  }

  const handleShowOneCard = (e) => {
    setSingleCardIsSelected(true)
    setMatchNameState(e.target.dataset.name)
  }

  const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()

  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  const [listRef, setListRef] = useState(null)

  useEffect(() => {
    if (listRef) {
      const handleScroll = (event) => {
        event.preventDefault()
        listRef.scrollLeft += event.deltaY
      }

      listRef.addEventListener("wheel", handleScroll)

      return () => {
        listRef.removeEventListener("wheel", handleScroll)
      }
    }
  }, [listRef])

  const handleMoveNavBarToRightByClick = () => {
    if (listRef) {
      listRef.scrollLeft += 200
    }
  }

  return (
    <INDEX_D_ORGWrapper singleCardIsSelected={singleCardIsSelected}>
      <div>
        <H1 semi_bold>
          Find your I/DD <br /> community
          <br /> and resources
        </H1>

        <div>
          <div>
            <ORG_D_Search_CarePlanSvg />
            <P semibold>Care Plan</P>
          </div>
        </div>

        <div>
          <Image
            src={ORGDesktop_Search_Hero}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>

        <ORG_D_SearchComponent toWhere="SpeechTherapists" />
      </div>

      <ul ref={setListRef}>
        <li onClick={handleShowAll}>
          <P
            primary_cta
            semibold>
            All
          </P>
        </li>
        {DATA.map((x, i) => (
          <li
            key={x.nameJSX}
            data-name={x.componentName}
            onClick={handleShowOneCard}>
            <P
              primary_cta
              semibold
              data-name={x.componentName}>
              {x.nameJSX}
            </P>
          </li>
        ))}

        <div>
          <div onClick={handleMoveNavBarToRightByClick}>
            <ArrowRightSvg />
          </div>
          <div />
        </div>
      </ul>

      {DATA.map((x, i) => {
        if (singleCardIsSelected === false) {
          return <x.component key={`${x.componentName}`} />
        }

        if (singleCardIsSelected && matchNameState === x.componentName) {
          return (
            <x.component
              key={`${x.componentName}`}
              isSelected={singleCardIsSelected}
            />
          )
        }

        return null
      })}

      {/* {singleCardIsSelected === false ? (
        <>
          <INDEX_D_ATSearch />
          <INDEX_D_AASearch />
          <INDEX_D_CMPSSearch />
          <INDEX_D_PSYTSearch />
          <INDEX_D_CCSearch />
          <INDEX_D_MHSSSearch />
          <INDEX_D_PPASSearch />
          <INDEX_D_SESSearch />
          <INDEX_D_STSearch />
          <INDEX_D_RPSearch />
        </>
      ) : matchNameState === INDEX_D_ATSearch.name ? (
        <INDEX_D_ATSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_AASearch.name ? (
        <INDEX_D_AASearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_CMPSSearch.name ? (
        <INDEX_D_CMPSSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_PSYTSearch.name ? (
        <INDEX_D_PSYTSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_CCSearch.name ? (
        <INDEX_D_CCSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_MHSSSearch.name ? (
        <INDEX_D_MHSSSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_PPASSearch.name ? (
        <INDEX_D_PPASSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_SESSearch.name ? (
        <INDEX_D_SESSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_STSearch.name ? (
        <INDEX_D_STSearch isSelected={singleCardIsSelected} />
      ) : matchNameState === INDEX_D_RPSearch.name ? (
        <INDEX_D_RPSearch isSelected={singleCardIsSelected} />
      ) : null} */}
    </INDEX_D_ORGWrapper>
  )
}

/* 


 Assistive Technology	→ AT
 Attorney and Advocates	→ AA
 Camps 	→ CMPS
 Psychiatrists → PSYT
 Community Classes	 → CC
 Mental Health Support/Services	→ MHSS
 Private & Public Agencies/Services	→ PPAS
 Special Education Schools	→ SES
 Therapeutic Providers & Services	→ ST
 Residential Programs	→ RP
  
 Autism Flow	→ AF
*/
