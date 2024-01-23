import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { Home_D_Banner_NWrapper } from "./styles/Hero_D_Banner_NWrapper"

export const Hero_D_Banner = () => {
  return (
    <Home_D_Banner_NWrapper>
      <H1>Join today and get started with your free forever account!</H1>
      <Link href={`${ALL_ROUTES.SIGNUP}`}>Sign Up</Link>
    </Home_D_Banner_NWrapper>
  )
}
