import { H1, H2 } from '../../ui/heading_body_text/HeaderFonts.js'
import { CardsLandingWrapper } from './styles/CardsLandingWrapper.js'
import { ThreeCardsLanding } from './ThreeCardsLanding.js'


export const CardsLanding = () => {
  return (
    <CardsLandingWrapper>
      <H1 hover>Resources</H1>
      
      <ThreeCardsLanding/>
      
      <H2 hover>Select a resource above to view top rated services near you!</H2>
      
    </CardsLandingWrapper>
  )
}