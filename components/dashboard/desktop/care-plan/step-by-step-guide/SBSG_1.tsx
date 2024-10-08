import ProfilePicture1 from "@/assets/images/Dashboard/care-plan/sbsg/profile-picture-1.png"
import ProfilePicture2 from "@/assets/images/Dashboard/care-plan/sbsg/profile-picture-2.png"
import Image from "next/image"
import { SBSG_1Wrapper } from "./styles/SBSG_1Wrapper"

const planFor = [
  { image: ProfilePicture1, name: "Kahlil Doe" },
  { image: ProfilePicture2, name: "John Doe" },
]

type Props = {
  handleNextStep?: (e) => void
  handleNameProfileSelected?: (e) => void
  handleNoProfileSelected?: () => void
}

export const SBSG_1 = ({
  handleNextStep,
  handleNameProfileSelected,
}: Props) => {
  return (
    <SBSG_1Wrapper>
      <header>
        <h5>Select profile</h5>
      </header>

      <div>
        <p>Who is the care plan for? </p>
        <ul>
          {planFor.map(({ image, name }) => {
            return (
              <li
                key={name}
                tabIndex={0}
                onClick={(e) => {
                  if (handleNextStep) handleNextStep(e)

                  if (handleNameProfileSelected)
                    handleNameProfileSelected({ e, nameProfile: name })
                }}
                onKeyDown={(e) => {
                  if (handleNextStep) handleNextStep(e)

                  if (handleNameProfileSelected)
                    handleNameProfileSelected({ e, nameProfile: name })
                }}
              >
                <Image src={image} alt={name} />
                <p>{name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </SBSG_1Wrapper>
  )
}
