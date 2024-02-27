import { Signup_N_InfoSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import TagsInput from "react-tagsinput"
import "react-tagsinput/react-tagsinput.css"
import { DemographyWrapper } from "./styles/DemographyWrapper"
import { Input } from "./styles/Signup_D_HomeWrapper"
export const Demography = () => {
  const [tags, setTags] = useState(["tag1", "tag2"])
  return (
    <>
      <DemographyWrapper>
        <H3>Profile 1 Demographics</H3>
        <span>Tell us about the indiviidual</span>
        <form>
          <label>First Name</label>
          <Input placeholder="Ex John" />
          <label>
            Zip code
            <Input placeholder="Ex John" />
            <Signup_N_InfoSvg />
          </label>
          <label>Relationship to account holder</label>
          <Input placeholder="Ex. child, grandchild, nephew," />
          <label>
            Who does the individual live with? (select all that apply)
          </label>
          <TagsInput value={tags} onChange={(tag) => setTags(tag)} class />
          <div>
            <span>
              <label>Language(s) spoken</label>
              <TagsInput value={tags} onChange={(tag) => setTags(tag)} />
            </span>
            <span>
              <label>Language(s) understood</label>
              <Input placeholder="Ex. parents, sibling, aunt" />
            </span>
          </div>
        </form>
      </DemographyWrapper>
    </>
  )
}
