import { INDEX_D_CCSearchWrapper } from './styles/INDEX_D_CCSearchWrapper.js'

export const INDEX_D_CCSearch = ({ isSelected = false }) => {
  return (
    <INDEX_D_CCSearchWrapper>
      <H2 semi_bold>Popular Mental Health Services</H2>
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
    </INDEX_D_CCSearchWrapper>
  )
}