import Image from "next/image.js"
import ORG_AT1 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT1.png"
import ORG_AT2 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT2.png"
import ORG_AT3 from "../../../../../assets/images/ORG/assistive-technology/ORG_AT3.png"
import { ButtonSmall } from "../../../../ui/buttons/general/index.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { INDEX_D_ATSearchWrapper } from "./styles/INDEX_D_ATSearchWrapper.js"

export const INDEX_D_ATSearch = ({ isSelected = false }) => {
  return (
    <INDEX_D_ATSearchWrapper>
      <div>
        <H2 semi_bold>Popular Assistive Technology</H2>
        <div>
          <div>
            <Image src={ORG_AT1} />
          </div>
          <H3>Title here</H3>
          <H4>Sub Title here</H4>
          <p>Rating here</p>
          <p>Review here</p>
          <button>final button here</button>
        </div>
        <div>
          <div>
            <Image src={ORG_AT2} />
          </div>
          <H3>Title here</H3>
          <H4>Sub Title here</H4>
          <p>Rating here</p>
          <p>Review here</p>
          <button>final button here</button>
        </div>
        <div>
          <div>
            <Image src={ORG_AT3} />
          </div>
          <H3>Title here</H3>
          <H4>Sub Title here</H4>
          <p>Rating here</p>
          <p>Review here</p>
          <button>final button here</button>
        </div>
        <ButtonSmall secondary>
          <Caption bold>See all </Caption>{" "}
          <Caption
            bold
            dark_gray>
            (25)
          </Caption>
        </ButtonSmall>
      </div>

      {isSelected && (
        <>
          <div>
            <H2 semi_bold>Popular Assistive Technology</H2>
            <div>
              <div>
                <Image src={ORG_AT1} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <div>
              <div>
                <Image src={ORG_AT2} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <div>
              <div>
                <Image src={ORG_AT3} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <ButtonSmall secondary>
              <Caption bold>See all </Caption>{" "}
              <Caption
                bold
                dark_gray>
                (25)
              </Caption>
            </ButtonSmall>
          </div>

          <div>
            <H2 semi_bold>Popular Assistive Technology</H2>
            <div>
              <div>
                <Image src={ORG_AT1} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <div>
              <div>
                <Image src={ORG_AT2} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <div>
              <div>
                <Image src={ORG_AT3} />
              </div>
              <H3>Title here</H3>
              <H4>Sub Title here</H4>
              <p>Rating here</p>
              <p>Review here</p>
              <button>final button here</button>
            </div>
            <ButtonSmall secondary>
              <Caption bold>See all </Caption>{" "}
              <Caption
                bold
                dark_gray>
                (25)
              </Caption>
            </ButtonSmall>
          </div>
        </>
      )}
    </INDEX_D_ATSearchWrapper>
  )
}
