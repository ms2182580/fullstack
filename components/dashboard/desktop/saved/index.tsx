// import { INDEX_Saved } from "@/components/teams/dashboard/saved"
// import { UnderConstruction } from "@/components/under-construction/UnderConstruction"
import { useRouter } from "next/router"
// import {
//   IconWrapper,
//   ModalContainerWrapper,
//   ModalItemWrapper,
//   PageButtonsWrapper,
//   PageNumbersWrapper,
//   PaginationWrapper,
//   SavedWrapper,
//   SearchBarWrapper,
//   TableWrapper,
//   TableBodyWrapper,
//   TableHeaderWrapper,
// } from "@/components/teams/dashboard/saved/styles/index-wrapper"
// import SVGUploadFile from "@/assets/icons/uploadfile.svg"
// import SearchSVG from "@/assets/icons/search.svg"
// import SortSVG from "@/assets/icons/sort.svg"
// import SfileSVG from "@/assets/icons/sfile.svg"
// import SpersonSVG from "@/assets/icons/sperson.svg"
// import SShareSVG from "@/assets/icons/sShare.svg"
// import SRenamSVG from "@/assets/icons/sRenam.svg"
// import SDuplicateSVG from "@/assets/icons/sDuplicate.svg"
// import SDeleteSVG from "@/assets/icons/sDelete.svg"
import { Fragment, useState } from "react"
import { usePathname } from "next/navigation"
// import { Breadcrumbs } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs-1"
export const INDEX_D_Saved = () => {
  // const router = useRouter()
  // const pathname = usePathname()
  // const [visibleModalRow, setVisibleModalRow] = useState<number | null>(null)

  // const handleAction = (rowIndex: number) => {
  //   setVisibleModalRow((prev) => (prev === rowIndex ? null : rowIndex))
  // }

  // const testData = [1, 2, 3, 4, 5, 6, 7]
  return (
    <>

      {/* <SavedWrapper>
        <Breadcrumbs />
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

        <SearchBarWrapper>
          <i>
            <SearchSVG />
          </i>
          <input type="text" placeholder="Search documents" />
        </SearchBarWrapper>

        <TableWrapper>
          <TableHeaderWrapper>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              <div>
                <span>Document</span>
                <i>
                  {" "}
                  <SortSVG />
                </i>
              </div>
            </th>
            <th>
              <div>
                <span>Created For</span>
                <i>
                  {" "}
                  <SortSVG />
                </i>
              </div>
            </th>
            <th>
              <div>
                <span>Last Modified</span>
                <i>
                  {" "}
                  <SortSVG />
                </i>
              </div>
            </th>
            <th>
              <div>
                <span>Status</span>
                <i>

                  <SortSVG />
                </i>
              </div>
            </th>
            <th></th>
          </TableHeaderWrapper>
          <TableBodyWrapper>
            {testData
              .map((len, idx) => (
                <tr key={idx}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div>
                      <i>
                        <SfileSVG />
                      </i>
                      <span>Kahlil’s Care Plan</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <i>
                        <SpersonSVG />
                      </i>
                      <span>Kahlil’s Care Plan</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>1 Minute Ago</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <small>{idx === 3 ? "Completed" : "Draft"}</small>
                    </div>
                  </td>
                  <td>
                    <span onClick={() => handleAction(idx)}>...</span>{" "}
                  </td>
                </tr>
              ))
              .map((_, idx) => (
                <Fragment key={idx}>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div>
                        <i>
                          <SfileSVG />
                        </i>
                        <span>Kahlil’s Care Plan</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <i>
                          <SpersonSVG />
                        </i>
                        <span>Kahlil’s Care Plan</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>1 Minute Ago</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <small>{idx === 3 ? "Completed" : "Draft"}</small>
                      </div>
                    </td>
                    <td>
                      <span onClick={() => handleAction(idx)}>...</span>
                    </td>
                  </tr>
                  {visibleModalRow === idx && (
                    <ModalContainerWrapper>
                      <ModalItemWrapper onClick={() => alert("Share clicked")}>
                        <IconWrapper>
                          <SShareSVG />
                        </IconWrapper>
                        <span>Share</span>
                      </ModalItemWrapper>
                      <ModalItemWrapper onClick={() => alert("Rename clicked")}>
                        <IconWrapper>
                          <SRenamSVG />
                        </IconWrapper>
                        <span>Rename</span>
                      </ModalItemWrapper>
                      <ModalItemWrapper
                        onClick={() => alert("Duplicate clicked")}
                      >
                        <IconWrapper>
                          <SDuplicateSVG />
                        </IconWrapper>
                        <span>Duplicate</span>
                      </ModalItemWrapper>
                      <ModalItemWrapper
                        className="danger"
                        onClick={() => alert("Delete clicked")}
                      >
                        <IconWrapper>
                          <SDeleteSVG />
                        </IconWrapper>
                        <span>Delete</span>
                      </ModalItemWrapper>
                    </ModalContainerWrapper>
                  )}
                </Fragment>
              ))}
          </TableBodyWrapper>
        </TableWrapper>
        <PaginationWrapper>
          <PageNumbersWrapper>1-10 of 10</PageNumbersWrapper>
          <PageButtonsWrapper>
            <span>&lt;</span>
            <button>1</button>
            <span>&gt;</span>
          </PageButtonsWrapper>
        </PaginationWrapper>
      </SavedWrapper> */}

      {/* <Table /> */}
      {/* <UnderConstruction /> */}
    </>)

}
