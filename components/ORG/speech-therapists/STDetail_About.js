import React, { useEffect, useState } from 'react'
import { ORG_ST_About } from '../../../utils/ORG_ST_About.js'
import { P } from '../../ui/heading_body_text/DesktopMobileFonts'
import { H4 } from '../../ui/heading_body_text/HeaderFonts'
import { STDetail_AboutWrapper } from './styles/STDetail_AboutWrapper'

export const STDetail_About = ({ name, lastName, sticky }) => {
  
  const [aboutTextState, setAboutTextState] = useState()
  
  useEffect(() => {
    
    const aboutText = ORG_ST_About(name, lastName)
    setAboutTextState(aboutText)
    
  },[])
  
  
  return (
    
    <STDetail_AboutWrapper sticky={sticky}>
      <H4 cta>About</H4>
      <P>{aboutTextState}.</P>
    </STDetail_AboutWrapper>
  )
}


/* 
!FH0
Make this equal to figma file
*/