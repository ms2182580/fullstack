import ProfilePicture1 from "@/assets/images/Dashboard/care-plan/sbsg/profile-picture-1.png"
import ProfilePicture2 from "@/assets/images/Dashboard/care-plan/sbsg/profile-picture-2.png"
import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import Image from "next/image"
import { SBSG_1Wrapper } from "./styles/SBSG_1Wrapper"

const planFor = [
  { image: ProfilePicture1, name: "Kahlil Doe" },
  { image: ProfilePicture2, name: "John Doe" },
]

export type SBSG_1Props = {
  handleNextStep?: (e) => void
}

export const SBSG_1 = ({ handleNextStep }: SBSG_1Props) => {
  const { handleProfileSelectedSBSG1 } = useCtxCreatePlanData().SBSG1

  const handleUseProfileSelectedSBSG1 = ({ e, nameProfileSelected }) => {
    if (e.type === "click" || e.key === "Enter") {
      handleProfileSelectedSBSG1({ nameProfile: nameProfileSelected })
    }
  }

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

                  handleUseProfileSelectedSBSG1({
                    e,
                    nameProfileSelected: name,
                  })
                }}
                onKeyDown={(e) => {
                  if (handleNextStep) handleNextStep(e)

                  handleUseProfileSelectedSBSG1({
                    e,
                    nameProfileSelected: name,
                  })
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
