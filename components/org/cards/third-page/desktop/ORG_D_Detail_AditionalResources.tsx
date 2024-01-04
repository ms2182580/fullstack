import Favorite from "@/assets/icons/favorite.svg"
import image1 from "@/assets/images/org/attorney-advocates/ORG_AA16.jpg"
import image2 from "@/assets/images/org/attorney-advocates/ORG_AA17.jpg"
import image3 from "@/assets/images/org/attorney-advocates/ORG_AA18.jpg"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image from "next/image.js"
import { ORG_Detail_SearchUsefulResource } from "../../../../../assets/icons/index.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_AdditionalResourcesWrapper } from "./styles/ORG_D_Detail_AdditionalResourcesWrapper"

export const ORG_D_Detail_AditionalResources = ({ [ArraySection_KEYS.ALL_DATA]: allProps }) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <ORG_D_Detail_AdditionalResourcesWrapper id={theIdForComponent}>
      <H3>Additional resources</H3>

      <div>
        <ORG_Detail_SearchUsefulResource />
        <input
          type="text"
          placeholder="Search other useful resources"
        />

        <span>
          <ButtonSmall secondary>Recommend resource</ButtonSmall>
        </span>
      </div>

      <div className="AdvocacyGroupsContainer">
        <H3 className="CardsTitle">Advocacy groups for disability benefits:</H3>

        <div className="AdvocacyGroupsItems">
          <div className="AdvocacyCard">
            <div className="ImageContainer">
              <Image
                src={image1}
                alt="image1"
                width={249.6}
                height={170.4}
                className="Imagen"
              />
              <Favorite tabIndex={0} />
            </div>

            <H4>Children's advocates NY</H4>

            <span>
              <ButtonSmall secondary>View Profile</ButtonSmall>
            </span>
          </div>

          <div className="AdvocacyCard">
            <div className="ImageContainer">
              <Image
                src={image2}
                alt="image2"
                width={249.6}
                height={170.4}
                className="Imagen"
              />
              <Favorite tabIndex={0} />
            </div>

            <H4>Children's advocates NY</H4>

            <span>
              <ButtonSmall secondary>View Profile</ButtonSmall>
            </span>
          </div>

          <div className="AdvocacyCard">
            <div className="ImageContainer">
              <Image
                src={image2}
                alt="image2"
                width={249.6}
                height={170.4}
                className="Imagen"
              />
              <Favorite tabIndex={0} />
            </div>

            <H4>Children's advocates NY</H4>

            <span>
              <ButtonSmall secondary>View Profile</ButtonSmall>
            </span>
          </div>

          <div className="AdvocacyCard">
            <div className="ImageContainer">
              <Image
                src={image3}
                alt="image2"
                width={249.6}
                height={170.4}
                className="Imagen"
              />

              <Favorite tabIndex={0} />
            </div>

            <H4>Children's advocates NY</H4>

            <span>
              <ButtonSmall secondary>View Profile</ButtonSmall>
            </span>
          </div>

          <div className="ViewAllLink">
            <P tabIndex={0}>View All</P>
          </div>
        </div>
      </div>
    </ORG_D_Detail_AdditionalResourcesWrapper>
  )
}
