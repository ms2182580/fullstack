import { RequestInputWrapper } from "./styles/request-input-wrapper"

export const RequestInput = () => {
  return (
    <RequestInputWrapper>
      <ul>
        <p>Social here</p>
      </ul>
      <label>
        Paste a family’s request from a social media platform:
        <input />
      </label>
      <div>
        <button>Find resources</button>

        <button>Discover help options</button>
      </div>
    </RequestInputWrapper>
  )
}
