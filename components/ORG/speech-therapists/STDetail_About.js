import React from 'react'
import { ORG_ST_About } from '../../../utils/ORG_ST_About.js'
import { P } from '../../ui/heading_body_text/DesktopMobileFonts'
import { H4 } from '../../ui/heading_body_text/HeaderFonts'
import { STDetail_AboutWrapper } from './styles/STDetail_AboutWrapper'

export const STDetail_About = ({ name, lastName, sticky }) => {
 
  
  
  
  const aboutText = ORG_ST_About(name, lastName)
  
  return (
    
    <STDetail_AboutWrapper sticky={sticky}>
      <H4 cta>About</H4>
      <P>{aboutText}.</P>
    </STDetail_AboutWrapper>
  )
}
