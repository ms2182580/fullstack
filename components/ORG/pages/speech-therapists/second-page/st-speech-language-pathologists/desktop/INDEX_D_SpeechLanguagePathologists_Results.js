import Image from 'next/image.js'
import UnderConstructionImagePurple from "../../../../../../../assets/images/UnderConstructionImagePurple.png"
import { INDEX_D_SpeechLanguagePathologists_ResultsWrapper } from './styles/INDEX_D_SpeechLanguagePathologists_ResultsWrapper.js'

export const INDEX_D_SpeechLanguagePathologists_Results = () => {
  return (
    <INDEX_D_SpeechLanguagePathologists_ResultsWrapper>
      <h1>Speech Language Pathologists</h1>
      <Image src={UnderConstructionImagePurple} />
    </INDEX_D_SpeechLanguagePathologists_ResultsWrapper>
  )
}