import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { Fragment, useEffect, useRef, useState } from "react"
import { ORG_D_Search_ViewProfileSvg, ORG_Detail_SearchFAQSSVG, ORG_Detail_SearchUsefulResource } from "../../../../../assets/Icons/index.js"

import { ButtonSmall } from "../../../../ui/buttons/general/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"

import { ORG_D_Detail_AdditionalResourcesWrapper } from "./styles/ORG_D_Detail_AdditionalResourcesWrapper.js"
import { DATA_PAT_D } from "@/utils/ORG/pat/DATA_PAT_D.js"

import image1 from "@/assets/images/ORG/attorney-advocates/ORG_AA16.jpg"
import image2 from "@/assets/images/ORG/attorney-advocates/ORG_AA17.jpg"
import image3 from "@/assets/images/ORG/attorney-advocates/ORG_AA18.jpg"
import Image from "next/image.js"

import ArrowImage from "../../../../../assets/Icons/ArrowDown.png"

/*
 <Image
            src={ArrowImage} 
          
            className="IconoImagen"
            
            />
*/


export const ORG_D_Detail_AditionalResources = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { card } = thirdpageDataORG

  const [showAll, setShowAll] = useState(false)
  const toMoveTheView = useRef()
 

  let isSelected = true

  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_PAT_D.length)
    }
  }, [isSelected])



  return (
    <>
      <ORG_D_Detail_AdditionalResourcesWrapper
         ref={toMoveTheView}>

          
        <H3 semibold>Additional resources</H3>

        <div>
          <ORG_Detail_SearchUsefulResource />
          <input
            type="text"
            placeholder="Search other useful resources"
          />

          <span onClick={null}>
            <ButtonSmall secondary>Recommend resource</ButtonSmall>
          </span>

        </div>

        <div className="AdvocacyGroupsContainer">
          
          <H3 className="CardsTitle"
            bolder
            hover>
            Advocacy groups for disability benefits:
          </H3>

        <div className="AdvocacyGroupsItems">



        <div className="AdvocacyCard"> 

        <div className="ImageContainer">
         <Image
            src={image1} alt='image1' width={249.6} height={170.4} className="Imagen"
            />
        </div>        
         
         <H4 nmedium>Children's advocates NY</H4>

         <span onClick={null}>
            <ButtonSmall secondary>View Profile</ButtonSmall>
          </span>
        </div>

        <div className="AdvocacyCard"> 

        <div className="ImageContainer">
         <Image
            src={image2} alt='image2' width={249.6} height={170.4} className="Imagen"
            />
        
           
        </div>   
         
         <H4 nmedium>Children's advocates NY</H4>

         <span onClick={null}>
            <ButtonSmall secondary>View Profile</ButtonSmall>
          </span>
        </div>

        <div className="AdvocacyCard"> 

        



        <div className="ImageContainer">
         <Image
            src={image2} alt='image2' width={249.6} height={170.4} className="Imagen"
            />
        </div>        
         
         <H4 nmedium>Children's advocates NY</H4>

         <span onClick={null}>
            <ButtonSmall secondary>View Profile</ButtonSmall>
          </span>
        </div>
        
        <div className="AdvocacyCard">   

        <div className="ImageContainer">
         <Image
            src={image3} alt='image2' width={249.6} height={170.4} className="Imagen"
            />
        </div>        
         
         <H4 nmedium>Children's advocates NY</H4>

         <span onClick={null}>
            <ButtonSmall secondary>View Profile</ButtonSmall>
          </span>
        </div>

        <div className="ViewAllLink">
        <P
              hyperlink_normal
              semibold
              underline
              onClick={null}
              onKeyDown={null}
              tabIndex={0}>
              View All
            </P>
        </div>
        

        </div>
      
        </div>

        

       
      </ORG_D_Detail_AdditionalResourcesWrapper>

      
    </>
  )
}
