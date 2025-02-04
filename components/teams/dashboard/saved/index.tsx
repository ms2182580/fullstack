// import { INDEX_SavedWrapper } from "./styles/index-wrapper"

// export const INDEX_Saved = () => {
//   return <INDEX_SavedWrapper>INDEX_Saved lkjlk</INDEX_SavedWrapper>
// }

"use client"
import { useRouter } from "next/router"
import {
  IconWrapper,
  ModalContainer,
  ModalItem,
  PageButtons,
  PageNumbers,
  PaginationWrap,
  SavedWrapper,
  SearchBar,
  Table,
  TableBody,
  TableHeader,
} from "./styles/index-wrapper"
import SVGUploadFile from "@/assets/icons/uploadfile.svg"
import SearchSVG from "@/assets/icons/search.svg"
import SortSVG from "@/assets/icons/sort.svg"
import SfileSVG from "@/assets/icons/sfile.svg"
import SpersonSVG from "@/assets/icons/sperson.svg"
import SShareSVG from "@/assets/icons/sShare.svg"
import SRenamSVG from "@/assets/icons/sRenam.svg"
import SDuplicateSVG from "@/assets/icons/sDuplicate.svg"
import SDeleteSVG from "@/assets/icons/sDelete.svg"
import { Fragment, useState } from "react"
import { usePathname } from "next/navigation"

export const INDEX_Saved = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [visibleModalRow, setVisibleModalRow] = useState<number | null>(null)

  const handleAction = (rowIndex: number) => {
    setVisibleModalRow((prev) => (prev === rowIndex ? null : rowIndex))
  }

  return (
    <>
      <SavedWrapper>
        <nav>
          <span onClick={() => router.back()}> &lt;&lt;Go Back</span>
          <span>{pathname}</span>
        </nav>

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

        <SearchBar>
          <i>
            <SearchSVG />
          </i>
          <input type="text" placeholder="Search documents" />
        </SearchBar>

        <Table>
          <TableHeader>
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
                  {" "}
                  <SortSVG />
                </i>
              </div>
            </th>
            <th></th>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }, (len, idx) => (
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
            )).map((_, idx) => (
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
                  <ModalContainer>
                    <ModalItem onClick={() => alert("Share clicked")}>
                      <IconWrapper>
                        <SShareSVG />
                      </IconWrapper>
                      <span>Share</span>
                    </ModalItem>
                    <ModalItem onClick={() => alert("Rename clicked")}>
                      <IconWrapper>
                        <SRenamSVG />
                      </IconWrapper>
                      <span>Rename</span>
                    </ModalItem>
                    <ModalItem onClick={() => alert("Duplicate clicked")}>
                      <IconWrapper>
                        <SDuplicateSVG />
                      </IconWrapper>
                      <span>Duplicate</span>
                    </ModalItem>
                    <ModalItem
                      className="danger"
                      onClick={() => alert("Delete clicked")}
                    >
                      <IconWrapper>
                        <SDeleteSVG />
                      </IconWrapper>
                      <span>Delete</span>
                    </ModalItem>
                  </ModalContainer>
                )}
              </Fragment>
            ))}

            {/* <tr>
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
                    <small>Draft</small>
                  </div>
                </td>
                <td>
                  <span>...</span>{" "}
                </td>
              </tr>
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
                    <small>Completed</small>
                  </div>
                </td>
                <td>
                  <span>...</span>{" "}
                </td>
              </tr>
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
                    <small>Draft</small>
                  </div>
                </td>
                <td>
                  <span>...</span>{" "}
                </td>
              </tr>
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
                    <small>Draft</small>
                  </div>
                </td>
                <td>
                  <span>...</span>{" "}
                </td>
              </tr> */}
          </TableBody>
        </Table>
        <PaginationWrap>
          <PageNumbers>1-10 of 10</PageNumbers>
          <PageButtons>
            <span>&lt;</span>
            <button>1</button>
            <span>&gt;</span>
          </PageButtons>
        </PaginationWrap>
      </SavedWrapper>
    </>
  )
}
