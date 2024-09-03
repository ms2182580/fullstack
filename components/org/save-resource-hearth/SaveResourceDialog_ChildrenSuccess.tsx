import Success from "@/assets/images/success.png"

import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import Link from "next/link"
import { SaveResourceDialog_ChildrenSuccessWrapper } from "./styles/SaveResourceDialog_ChildrenSuccessWrapper"

export type SaveResourceDialog_ChildrenSuccess_Props = {
  nameOfResource: string
  closeDialog: ({ event }) => void
}

export const SaveResourceDialog_ChildrenSuccess = ({
  nameOfResource,
  closeDialog,
}: SaveResourceDialog_ChildrenSuccess_Props) => {
  return (
    <SaveResourceDialog_ChildrenSuccessWrapper>
      <Image src={Success} alt="Success image" />
      <h6>Success!</h6>
      <p>
        <span>'{nameOfResource}'</span> Resource has been saved!
      </p>
      <div>
        <button
          onClick={(e) => closeDialog({ event: e })}
          onKeyDown={(e) => closeDialog({ event: e })}
        >
          Continue Browsing
        </button>
        <Link
          href={`/${ALL_ROUTES.DASHBOARD}/${ALL_ROUTES.DASHBOARD_SECTIONS.SAVED}`}
        >
          View Saved Resources
        </Link>
      </div>
    </SaveResourceDialog_ChildrenSuccessWrapper>
  )
}
