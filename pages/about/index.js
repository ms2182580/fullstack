import Link from "next/link"
import { useRouter } from "next/router"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"

const About = () => {
  const { pathname } = useRouter()

  return (
    <>
      <P>About here</P>

      <Link href={`${pathname}/dashboard`}>Go to dashboard</Link>
    </>
  )
}

export default About
