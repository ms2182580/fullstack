// import { UnderConstruction } from "@/components/under-construction/UnderConstruction"
// import Table from "./tanstackTable"
import { SavedWrapper } from "./styles/index-wrapper"
import Table from "./tanstackTable"
import SVGUploadFile from "@/assets/icons/uploadfile.svg"
import { Breadcrumbs } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs-1"
export const INDEX_D_Documents = () => {
  return (
    <>
      <SavedWrapper>
        {/* <Breadcrumbs /> */}
        <div>
          <h2>Documents</h2>
          <button>
            <SVGUploadFile />
            <span>Upload</span>
          </button>
        </div>
        <div>
          <small>
            Your plans are only visible to you unless shared with your care
            coordinator
          </small>
        </div>
      </SavedWrapper>
      <Table />

    </>
  )
}
