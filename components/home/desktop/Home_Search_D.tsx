import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import {
  Home_Search_DWrapper,
  Input,
  Label,
} from "./styles/Home_Search_DWrapper"

export const Home_Search_D = () => {
  return (
    <Home_Search_DWrapper>
      <H2>Find the resources you need now</H2>
      <Label>
        Search
        <Input placeholder="Ex: speech pathologists, neurologist, summer camps" />
      </Label>
      <Label>
        ZIP code
        <Input placeholder="Enter your zip code" />
      </Label>
      <Link href={`${ALL_ROUTES.RECOMMENDED}`}>View recommendations</Link>
    </Home_Search_DWrapper>
  )
}
