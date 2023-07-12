import { ButtonSmall } from '../../../ui/buttons/general/index.js'
import { Caption } from '../../../ui/heading_body_text/DesktopMobileFonts.js'
import { H2 } from '../../../ui/heading_body_text/HeaderFonts.js'
import { INDEX_D_CMPSSearchWrapper } from './styles/INDEX_D_CMPSSearchWrapper.js'


export const INDEX_D_CMPSSearch = ({ isSelected = false }) => {
  return (
    <INDEX_D_CMPSSearchWrapper>
      <H2 semi_bold>Popular Camps</H2>
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
    </INDEX_D_CMPSSearchWrapper>
  )
}