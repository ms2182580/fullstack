import {
  InlineSuggestionInput,
  SuggestionsType,
} from "@/components/ui/input/predictive"
import { NamesSubcategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { ContactUsFormWrapper } from "./styles/contact-us-form-wrapper"

/* 
!FH0
- Fix bug: when the user type something and the next character is a empty space, does not fill the empty space and the word
- Add the styles
- Keep with dashboard
- Keep with chatAI

*/

const categoriesSuggestions: SuggestionsType = Object.keys(
  NamesSubcategories_KEY
)

export const ContactUsForm = () => {
  return (
    <ContactUsFormWrapper>
      <h1>Contact Us</h1>

      <form>
        <label>
          Email:
          <input type="email" placeholder="Ex: jsmith123@gmail.com" required />
        </label>

        <label>
          Reason for contact:
          <input
            list="contact-reasons"
            placeholder="Tell us why you’re reaching "
          />
          <datalist id="contact-reasons">
            <option value="I have a question" />
            <option value="I want to share a resource" />
            <option value="I want to report a problem" />
            <option value="I want to congrats the team" />
            <option value="I want to say that The Frontend Team is too handsome" />
            <option value="I just want to say Thanks for all of this" />
          </datalist>
        </label>

        <label>
          Record Name
          <InlineSuggestionInput
            suggestions={categoriesSuggestions}
            placeholder="Ex: Mental Health Providers & Services"
          />
        </label>

        <label>
          Message:
          <textarea placeholder="Write your message here" required />
        </label>

        <button>Send Message</button>
      </form>
    </ContactUsFormWrapper>
  )
}
