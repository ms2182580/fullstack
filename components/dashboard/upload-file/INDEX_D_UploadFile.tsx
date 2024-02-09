import {
  Dashboard_UploadFileCloseSvg,
  Dashboard_UploadFileFileSvg,
  Dashboard_UploadFilePDFSvg,
  Dashboard_UploadFileQuickSvg,
} from "@/assets/icons"
import { INDEX_D_UploadFileWrapper } from "./styles/INDEX_D_UploadFileWrapper"
import { useDashboardAIChatUploadFile_Ctx } from "@/context/Ctx_Dashboard_CarePlanUploadFile"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const INDEX_D_UploadFile = () => {
  const { isUpload, setIsUpload, file, setFile } =
    useDashboardAIChatUploadFile_Ctx()

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files
    if (file && file[0]) {
      setFile(file[0])
    }
  }
  console.log({ file })
  return (
    <INDEX_D_UploadFileWrapper isFile={!!file}>
      <div>
        <span onClick={() => setIsUpload(!isUpload)}>
          <Dashboard_UploadFileCloseSvg />
        </span>
        <span>Upload file</span>
        <span>
          Upload a previous document to speed up the care plan creation process.
        </span>
        <div>
          {file ? (
            <>
              <span>
                <Dashboard_UploadFilePDFSvg /> <span>{file.name}</span>
              </span>
              <span onClick={() => setFile(null)}>Remove</span>
            </>
          ) : (
            <>
              <span>
                <Dashboard_UploadFileFileSvg /> <span>Drag and drop or </span>
                <label htmlFor="file">choose</label>
              </span>
              <span>
                Supported file types: .pdf, .docx <br />
                15 MB Max
              </span>
            </>
          )}
        </div>
        <div>
          <span>Tell Inclusive what to do with this file:</span>
          <span>
            Tip: Get better outputs by providing as much information as you can
          </span>

          <span>Example: Update this plan with new information</span>
        </div>
        <div>
          <span>
            <Dashboard_UploadFileQuickSvg /> <span>Quick picks:</span>
          </span>
          <span>Complete my child’s profile with this information</span>
          <span>Update this plan with new information</span>
          <span>Use information from this file to create a new plan</span>
          <span>Upload it to my documents for reference</span>
        </div>
        <ButtonSmall>Upload</ButtonSmall>
        <input
          type="file"
          id="file"
          accept=".pdf"
          onChange={handleChangeFile}
        />
      </div>
    </INDEX_D_UploadFileWrapper>
  )
}
