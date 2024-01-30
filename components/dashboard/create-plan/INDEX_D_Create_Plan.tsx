import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/froala_editor.pkgd.min.css"
import FroalaEditorComponent from "react-froala-wysiwyg"
export const INDEX_D_Create_Plan = () => {
  return (
    <div>
      <FroalaEditorComponent tag="textarea" />
    </div>
  )
}
