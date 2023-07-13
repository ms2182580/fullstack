import { ButtonSmall } from '../../../../ui/buttons/general/index.js'
import { Caption } from '../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2 } from '../../../../ui/heading_body_text/HeaderFonts.js'
import { INDEX_D_ATSearchWrapper } from './styles/INDEX_D_ATSearchWrapper.js'

export const INDEX_D_ATSearch = ({ isSelected = false }) => {
  return (
    <INDEX_D_ATSearchWrapper>
      <H2 semi_bold>Popular Assistive Technology</H2>
      <div>Some cards here </div>
      <div>Some cards here </div>
      <div>Some cards here </div>

      <ButtonSmall secondary >
        <Caption bold>See all </Caption>{" "}
        <Caption
          bold
          dark_gray>
          (25)
        </Caption>
      </ButtonSmall>


      {isSelected && <>EVEN MORE CARDS HERE IN </>}
    </INDEX_D_ATSearchWrapper>
  )
}