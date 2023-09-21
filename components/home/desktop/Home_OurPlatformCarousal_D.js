import Link from 'next/link.js'
import { Home_OurPlatform_BrainSvg, Home_OurPlatform_JetSvg, Home_OurPlatform_UserCollaborationSvg } from '../../../assets/Icons/index.js'
import { H1 } from '../../ui/heading_body_text/HeaderFonts.js'
import { Home_OurPlatformCarousal_DWrapper } from './styles/Home_OurPlatformCarousal_DWrapper.js'

const DATA_CARD = [
  {
    icon: <Home_OurPlatform_BrainSvg />,
    title: "Resources",
    subtitle: "Find and resource, anywhere, at any time.",
    lastButtonText: "Search"
  },
  {
    icon: <Home_OurPlatform_BrainSvg />,
    title: "Services",
    subtitle: "A step-by-step guide through bureaucracy.",
    lastButtonText: "Start"
  },
  {
    icon: <Home_OurPlatform_UserCollaborationSvg />,
    title: "Profiles",
    subtitle: "Identify each need and list each services.",
    lastButtonText: "Create"
  },
  {
    icon: <Home_OurPlatform_JetSvg />,
    title: "Answers",
    subtitle: "Get  the answers you need from our community.",
    lastButtonText: "Ask"
  },
]

export const Home_OurPlatformCarousal_D = () => {
  return (
    <Home_OurPlatformCarousal_DWrapper>

      <div className='LEFT'>
        <p>CREATE LIFETIME PLANS WITH US</p>
        <H1>Our platform  simplifies care management like never before.</H1>
        <p>Get every tool you need to seamlessly draft a care strategy from your personal dashboard.</p>
        <Link href="#">See your dashboard!</Link>
      </div>
      <div className='RIGHT'>
        <p>RIGHT</p>
      </div>

    </Home_OurPlatformCarousal_DWrapper>
  )
}