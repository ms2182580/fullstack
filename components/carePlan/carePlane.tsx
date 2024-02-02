import { CarePlan_Wrapper } from "./carePlan.style"
import Stepper from "../common/stepper/steper"
import { FirstStep } from "./components/first-step.component"
interface Step {
  title: string
  content: React.ReactNode
}

const steps: Step[] = [
  { title: "Step 1", content: <FirstStep /> },
  { title: "Step 2", content: <FirstStep /> },
  { title: "Step 3", content: <FirstStep /> },
]
export const CarePlaneComponent = () => {
  return (
    <CarePlan_Wrapper>
      <Stepper steps={steps} />
    </CarePlan_Wrapper>
  )
}
