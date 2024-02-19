import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { DemographyWrapper } from "./styles/DemographyWrapper"
import { Input, Label } from "./styles/Form_NWrapper"
import { Signup_N_InfoSvg } from "@/assets/icons"
import TagsInput from "react-tagsinput"
import "react-tagsinput/react-tagsinput.css"
import { useState } from "react"
import { SignupLayout } from "./Layout"
export const Demography = () => {
  const [tags, setTags] = useState(["tag1", "tag2"])
  return (
    <SignupLayout>
      <DemographyWrapper>
        <H3>Profile 1 Demographics</H3>
        <span>Tell us about the indiviidual</span>
        <form>
          <Label>First Name</Label>
          <Input placeholder="Ex John" />
          <Label>
            Zip code
            <Input placeholder="Ex John" />
            <Signup_N_InfoSvg />
          </Label>
          <Label>Relationship to account holder</Label>
          <Input placeholder="Ex. child, grandchild, nephew," />
          <Label>
            Who does the individual live with? (select all that apply)
          </Label>
          <TagsInput value={tags} onChange={(tag) => setTags(tag)} class />
          <div>
            <span>
              <Label>Language(s) spoken</Label>
              <TagsInput value={tags} onChange={(tag) => setTags(tag)} />
            </span>
            <span>
              <Label>Language(s) understood</Label>
              <Input placeholder="Ex. parents, sibling, aunt" />
            </span>
          </div>
        </form>
      </DemographyWrapper>
    </SignupLayout>
  )
}
