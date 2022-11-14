import { Fragment } from "react"

export const FriendlyDiagnoses = ({diagnoses}) => {
  return (
    <>
      {diagnoses.map((x) => (
        <div key={x}>{x} </div>
      ))}
    </>
  )
}

