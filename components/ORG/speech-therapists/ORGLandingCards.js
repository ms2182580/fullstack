import Image from 'next/image.js'
import { ORGLandingCardsWrapper } from './styles/ORGLandingCardsWrapper.js'



export const ORGLandingCards = ({dataToUse, reviews}) => {
  console.log('dataToUse, reviews:', dataToUse, reviews)
  return (
    <ORGLandingCardsWrapper>
      <div>
        <Image
        src={dataToUse.picture}
          alt=""
          layout='responsive'
          width={400}
          height={150}
        />
      </div>
      <p>Name</p>
      <p>SpeechTehrapist</p>
      <p>Rating</p>
      <p>RReview</p>
      <button>View Profile</button>
    </ORGLandingCardsWrapper>
  )
}