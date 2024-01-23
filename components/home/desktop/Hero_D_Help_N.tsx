import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Home_D_Help_NWrapper,
  Input,
  Label,
} from "./styles/Hero_D_Help_NWrapper"

export const Hero_D_Help_N = () => {
  const router = useRouter()
  // const handleToRecommended = () => router.push(`${ALL_ROUTES.RECOMMENDED}`)

  return (
    <Home_D_Help_NWrapper>
      <H2>How Can we Help You?</H2>
      <form>
        <Label>
          I'm Seeking help with
          <Input placeholder="ORG" />
        </Label>
        <Label>
          ZIP code
          <Input placeholder="00000" />
        </Label>
      </form>
      <Link href={`${ALL_ROUTES.RECOMMENDED}`}>View Options</Link>
    </Home_D_Help_NWrapper>
  )
}
