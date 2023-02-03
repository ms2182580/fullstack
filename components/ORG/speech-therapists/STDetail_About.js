import React from 'react'
import { P } from '../../ui/heading_body_text/DesktopMobileFonts'
import { H4 } from '../../ui/heading_body_text/HeaderFonts'
import { STDetail_AboutWrapper } from './styles/STDetail_AboutWrapper'
import {ORG_ST_About} from '../../../utils/ORG_ST_About.js'

export const STDetail_About = ({name, lastName}) => {
 
  const aboutText = ORG_ST_About(name, lastName)   
  
  
  return (
    
    <STDetail_AboutWrapper>
      <H4 cta>About</H4>
      <P>{aboutText}.</P>
    </STDetail_AboutWrapper>
  )
}
