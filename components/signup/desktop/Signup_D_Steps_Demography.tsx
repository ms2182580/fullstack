import { Signup_N_InfoSvg } from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Signup_D_Steps_DemographyWrapper } from "./styles/Signup_D_Steps_DemographyWrapper"

export const Signup_D_Steps_Demography = () => {
  return (
    <Signup_D_Steps_DemographyWrapper>
      <H3>Profile 1 Demographics</H3>
      <P>Tell us about the individual</P>

      <form>
        <label>
          Firdadsst Nameadsadasd <input placeholder="Ex John" />
        </label>

        <label>
          Zip code
          <input placeholder="Ex John" />
          <Signup_N_InfoSvg />
        </label>

        <label>
          Relationship to account holder
          <input placeholder="Ex. child, grandchild, nephew," />
        </label>

        <label>
          Who does the individual live with? (select all that apply)
          <input placeholder="Ex. parents, sibling, aunt" />
        </label>

        <div>
          <label>
            Language(s) spoken
            <input placeholder="Ex. English, Spanish" />
          </label>
          <label>
            Language(s) understood{" "}
            <input placeholder="Ex. parents, sibling, aunt" />
          </label>
        </div>
      </form>
    </Signup_D_Steps_DemographyWrapper>
  )
}
