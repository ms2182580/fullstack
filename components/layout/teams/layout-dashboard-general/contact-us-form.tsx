import { ContactUsFormWrapper } from "./styles/contact-us-form-wrapper"

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
            <option value="I want to suggest a resource" />
            <option value="I want to report a problem" />
            <option value="I want to report a bug" />
          </datalist>
        </label>

        <label>
          Record Name
          <input type="text" placeholder="Ex: ABC Speech Therapy" required />
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
