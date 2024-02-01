import { useState } from "react"
import Checkbox from "../common/checkbox"
import { ButtonSmall } from "../ui/buttons/general"
import {
  SaveResource_Card,
  SaveResource_Filter,
  SaveResource_MainWrapper,
  SaveResource_SearchDiv,
} from "./styles/MainWrapper"

export const INDEX_SaveResources = () => {
  const [openFilterPopup, setOpenFilterPopup] = useState(false)
  return (
    <SaveResource_MainWrapper>
      <h3 className="heading">Saved Resources</h3>
      <p className="description">
        View the resources that you have previously saved{" "}
      </p>
      <div className="search-content">
        <SaveResource_SearchDiv>
          <div>
            {/* will moved on icon directory */}
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3539 14.1444L11.2245 11.0157C12.1315 9.92676 12.5838 8.53006 12.4873 7.11615C12.3908 5.70224 11.7528 4.37997 10.7062 3.42442C9.65963 2.46887 8.28492 1.9536 6.86808 1.9858C5.45125 2.018 4.10137 2.59519 3.09926 3.5973C2.09714 4.59942 1.51995 5.9493 1.48775 7.36613C1.45555 8.78297 1.97082 10.1577 2.92638 11.2043C3.88193 12.2509 5.20419 12.8888 6.6181 12.9853C8.03201 13.0819 9.42871 12.6296 10.5176 11.7226L13.6464 14.8519C13.6928 14.8984 13.748 14.9352 13.8087 14.9604C13.8694 14.9855 13.9344 14.9985 14.0001 14.9985C14.0658 14.9985 14.1309 14.9855 14.1916 14.9604C14.2523 14.9352 14.3074 14.8984 14.3539 14.8519C14.4003 14.8055 14.4372 14.7503 14.4623 14.6896C14.4875 14.6289 14.5004 14.5639 14.5004 14.4982C14.5004 14.4325 14.4875 14.3674 14.4623 14.3067C14.4372 14.246 14.4003 14.1909 14.3539 14.1444ZM2.50014 7.49819C2.50014 6.60817 2.76406 5.73814 3.25853 4.99812C3.753 4.2581 4.4558 3.68133 5.27807 3.34073C6.10034 3.00014 7.00514 2.91102 7.87805 3.08466C8.75096 3.25829 9.55279 3.68687 10.1821 4.31621C10.8115 4.94555 11.24 5.74737 11.4137 6.62028C11.5873 7.4932 11.4982 8.398 11.1576 9.22027C10.817 10.0425 10.2402 10.7453 9.50021 11.2398C8.76019 11.7343 7.89016 11.9982 7.00014 11.9982C5.80708 11.9969 4.66325 11.5223 3.81962 10.6787C2.976 9.83508 2.50147 8.69126 2.50014 7.49819Z"
                fill="#746779"
              />
            </svg>
          </div>

          <input
            className="search-input"
            type="text"
            placeholder="Search plans "
          />
        </SaveResource_SearchDiv>
        <SaveResource_Filter>
          <div
            className="filter-menu"
            onClick={() => setOpenFilterPopup(!openFilterPopup)}
          >
            <div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 8.74807H6.84375C7.00898 9.39338 7.38428 9.96535 7.91048 10.3738C8.43669 10.7823 9.08387 11.004 9.75 11.004C10.4161 11.004 11.0633 10.7823 11.5895 10.3738C12.1157 9.96535 12.491 9.39338 12.6562 8.74807H20.25C20.4489 8.74807 20.6397 8.66905 20.7803 8.5284C20.921 8.38775 21 8.19698 21 7.99807C21 7.79916 20.921 7.60839 20.7803 7.46774C20.6397 7.32709 20.4489 7.24807 20.25 7.24807H12.6562C12.491 6.60276 12.1157 6.03079 11.5895 5.62234C11.0633 5.21389 10.4161 4.99219 9.75 4.99219C9.08387 4.99219 8.43669 5.21389 7.91048 5.62234C7.38428 6.03079 7.00898 6.60276 6.84375 7.24807H3.75C3.55109 7.24807 3.36032 7.32709 3.21967 7.46774C3.07902 7.60839 3 7.79916 3 7.99807C3 8.19698 3.07902 8.38775 3.21967 8.5284C3.36032 8.66905 3.55109 8.74807 3.75 8.74807ZM9.75 6.49807C10.0467 6.49807 10.3367 6.58604 10.5834 6.75087C10.83 6.91569 11.0223 7.14996 11.1358 7.42405C11.2494 7.69813 11.2791 7.99973 11.2212 8.29071C11.1633 8.58168 11.0204 8.84895 10.8107 9.05873C10.6009 9.26851 10.3336 9.41137 10.0426 9.46925C9.75166 9.52713 9.45006 9.49742 9.17597 9.38389C8.90189 9.27036 8.66762 9.0781 8.5028 8.83143C8.33797 8.58475 8.25 8.29474 8.25 7.99807C8.25 7.60025 8.40804 7.21871 8.68934 6.93741C8.97064 6.65611 9.35218 6.49807 9.75 6.49807ZM20.25 16.2481H18.6562C18.491 15.6028 18.1157 15.0308 17.5895 14.6223C17.0633 14.2139 16.4161 13.9922 15.75 13.9922C15.0839 13.9922 14.4367 14.2139 13.9105 14.6223C13.3843 15.0308 13.009 15.6028 12.8438 16.2481H3.75C3.55109 16.2481 3.36032 16.3271 3.21967 16.4677C3.07902 16.6084 3 16.7992 3 16.9981C3 17.197 3.07902 17.3877 3.21967 17.5284C3.36032 17.6691 3.55109 17.7481 3.75 17.7481H12.8438C13.009 18.3934 13.3843 18.9653 13.9105 19.3738C14.4367 19.7823 15.0839 20.004 15.75 20.004C16.4161 20.004 17.0633 19.7823 17.5895 19.3738C18.1157 18.9653 18.491 18.3934 18.6562 17.7481H20.25C20.4489 17.7481 20.6397 17.6691 20.7803 17.5284C20.921 17.3877 21 17.197 21 16.9981C21 16.7992 20.921 16.6084 20.7803 16.4677C20.6397 16.3271 20.4489 16.2481 20.25 16.2481ZM15.75 18.4981C15.4533 18.4981 15.1633 18.4101 14.9166 18.2453C14.67 18.0805 14.4777 17.8462 14.3642 17.5721C14.2506 17.298 14.2209 16.9964 14.2788 16.7054C14.3367 16.4145 14.4796 16.1472 14.6893 15.9374C14.8991 15.7276 15.1664 15.5848 15.4574 15.5269C15.7483 15.469 16.0499 15.4987 16.324 15.6123C16.5981 15.7258 16.8324 15.918 16.9972 16.1647C17.162 16.4114 17.25 16.7014 17.25 16.9981C17.25 17.3959 17.092 17.7774 16.8107 18.0587C16.5294 18.34 16.1478 18.4981 15.75 18.4981Z"
                  fill="#746779"
                />
              </svg>
            </div>
            <div className="text">Filters</div>
          </div>
          {openFilterPopup && (
            <div className="filter-box">
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5858 3.58579C11.9609 3.21071 12.4696 3 13 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11H27C27.5304 11 28.0391 11.2107 28.4142 11.5858C28.7893 11.9609 29 12.4696 29 13V19C29 19.5304 28.7893 20.0391 28.4142 20.4142C28.0391 20.7893 27.5304 21 27 21H21V27C21 27.5304 20.7893 28.0391 20.4142 28.4142C20.0391 28.7893 19.5304 29 19 29H13C12.4696 29 11.9609 28.7893 11.5858 28.4142C11.2107 28.0391 11 27.5304 11 27V21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H11V5C11 4.46957 11.2107 3.96086 11.5858 3.58579ZM19 5H13V12C13 12.5523 12.5523 13 12 13H5L5 19H12C12.5523 19 13 19.4477 13 20V27H19V20C19 19.4477 19.4477 19 20 19H27V13H20C19.4477 13 19 12.5523 19 12V5Z"
                        fill="#3A343C"
                      />
                    </svg>
                  </div>
                  <div>Medical</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <svg
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.4702 8.11733L16.4702 0.117334C16.3255 0.0402935 16.1641 0 16.0002 0C15.8363 0 15.6749 0.0402935 15.5302 0.117334L0.530176 8.11733C0.370181 8.2026 0.236377 8.32976 0.143076 8.4852C0.0497749 8.64065 0.000488281 8.81854 0.000488281 8.99983C0.000488281 9.18113 0.0497749 9.35902 0.143076 9.51446C0.236377 9.66991 0.370181 9.79707 0.530176 9.88233L4.00018 11.7336V17.7861C3.99914 18.2773 4.17991 18.7515 4.50768 19.1173C6.14518 20.9411 9.81392 23.9998 16.0002 23.9998C18.0514 24.0168 20.0872 23.6453 22.0002 22.9048V26.9998C22.0002 27.2651 22.1055 27.5194 22.2931 27.7069C22.4806 27.8945 22.735 27.9998 23.0002 27.9998C23.2654 27.9998 23.5197 27.8945 23.7073 27.7069C23.8948 27.5194 24.0002 27.2651 24.0002 26.9998V21.9386C25.3042 21.1858 26.4826 20.2339 27.4927 19.1173C27.8204 18.7515 28.0012 18.2773 28.0002 17.7861V11.7336L31.4702 9.88233C31.6302 9.79707 31.764 9.66991 31.8573 9.51446C31.9506 9.35902 31.9999 9.18113 31.9999 8.99983C31.9999 8.81854 31.9506 8.64065 31.8573 8.4852C31.764 8.32976 31.6302 8.2026 31.4702 8.11733ZM16.0002 21.9998C10.5914 21.9998 7.41018 19.3573 6.00018 17.7861V12.7998L15.5302 17.8823C15.6749 17.9594 15.8363 17.9997 16.0002 17.9997C16.1641 17.9997 16.3255 17.9594 16.4702 17.8823L22.0002 14.9336V20.7261C20.4252 21.4611 18.4402 21.9998 16.0002 21.9998ZM26.0002 17.7811C25.4007 18.4463 24.73 19.0436 24.0002 19.5623V13.8661L26.0002 12.7998V17.7811ZM23.5002 11.8673L23.4727 11.8511L16.4727 8.11733C16.2391 7.99804 15.9681 7.97527 15.7179 8.05392C15.4677 8.13257 15.2584 8.30635 15.1352 8.53782C15.0119 8.76929 14.9845 9.03992 15.0588 9.29141C15.1332 9.54289 15.3034 9.75511 15.5327 9.88233L21.3752 12.9998L16.0002 15.8661L3.12518 8.99983L16.0002 2.13358L28.8752 8.99983L23.5002 11.8673Z"
                        fill="#3A343C"
                      />
                    </svg>
                  </div>
                  <div>Education</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0001 11C19.7912 11 20.5646 10.7654 21.2224 10.3259C21.8802 9.88635 22.3929 9.26164 22.6956 8.53074C22.9984 7.79983 23.0776 6.99556 22.9233 6.21964C22.7689 5.44372 22.3879 4.73098 21.8285 4.17157C21.2691 3.61216 20.5564 3.2312 19.7805 3.07686C19.0045 2.92252 18.2003 3.00173 17.4694 3.30448C16.7385 3.60723 16.1138 4.11992 15.6742 4.77772C15.2347 5.43552 15.0001 6.20888 15.0001 7C15.0001 8.06087 15.4215 9.07828 16.1717 9.82843C16.9218 10.5786 17.9392 11 19.0001 11ZM19.0001 5C19.3957 5 19.7824 5.1173 20.1112 5.33706C20.4401 5.55683 20.6965 5.86918 20.8479 6.23463C20.9992 6.60009 21.0389 7.00222 20.9617 7.39018C20.8845 7.77814 20.694 8.13451 20.4143 8.41422C20.1346 8.69392 19.7783 8.8844 19.3903 8.96157C19.0023 9.03874 18.6002 8.99914 18.2347 8.84776C17.8693 8.69639 17.5569 8.44004 17.3372 8.11114C17.1174 7.78224 17.0001 7.39556 17.0001 7C17.0001 6.46957 17.2108 5.96086 17.5859 5.58579C17.961 5.21072 18.4697 5 19.0001 5ZM27.4139 17.585C27.3376 17.62 26.4776 17.995 24.9551 17.995C23.2239 17.995 20.6364 17.51 17.3689 15.495C16.8715 16.9068 16.2258 18.2619 15.4426 19.5375C16.8494 19.9706 18.1727 20.6388 19.3564 21.5138C21.7401 23.3313 23.0001 25.9188 23.0001 29C23.0001 29.2652 22.8948 29.5196 22.7072 29.7071C22.5197 29.8946 22.2653 30 22.0001 30C21.7349 30 21.4805 29.8946 21.293 29.7071C21.1055 29.5196 21.0001 29.2652 21.0001 29C21.0001 23.7875 16.6639 21.9113 14.2326 21.2688C14.1639 21.3563 14.0926 21.445 14.0214 21.5313C11.5664 24.5063 8.49011 26.0538 5.06761 26.0538C4.67778 26.0556 4.28812 26.0376 3.90011 26C3.63489 25.9735 3.39107 25.8427 3.22229 25.6364C3.05351 25.4301 2.97359 25.1652 3.00011 24.9C3.02663 24.6348 3.15742 24.391 3.36371 24.2222C3.57 24.0534 3.83489 23.9735 4.10011 24C7.34011 24.3225 10.1589 23.0638 12.4751 20.25C14.0364 18.3575 15.1001 16.0488 15.6314 14.375C10.7664 11.5438 7.65886 13.9538 7.62511 13.98C7.52324 14.067 7.40494 14.1326 7.27722 14.173C7.1495 14.2134 7.01497 14.2277 6.88162 14.2151C6.74826 14.2025 6.6188 14.1632 6.50091 14.0996C6.38303 14.036 6.27912 13.9494 6.19536 13.8448C6.1116 13.7403 6.0497 13.62 6.01332 13.4911C5.97694 13.3622 5.96684 13.2273 5.9836 13.0944C6.00037 12.9615 6.04366 12.8333 6.11092 12.7175C6.17817 12.6016 6.26801 12.5005 6.37511 12.42C6.56261 12.27 11.0276 8.795 17.5639 13.2413C23.2476 17.105 26.5551 15.78 26.5864 15.765C26.7062 15.7084 26.836 15.6762 26.9684 15.6703C27.1007 15.6643 27.233 15.6847 27.3574 15.7303C27.4818 15.7758 27.5959 15.8457 27.6931 15.9357C27.7903 16.0258 27.8686 16.1342 27.9235 16.2548C27.9784 16.3754 28.0088 16.5057 28.0129 16.6381C28.017 16.7705 27.9948 16.9025 27.9475 17.0262C27.9002 17.15 27.8288 17.2631 27.7374 17.359C27.646 17.455 27.5364 17.5318 27.4151 17.585H27.4139Z"
                        fill="#3A343C"
                      />
                    </svg>
                  </div>
                  <div>Programs</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <svg
                      width="28"
                      height="24"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 0C14.5523 0 15 0.447715 15 1V23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23V1C13 0.447715 13.4477 0 14 0Z"
                        fill="#3A343C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 23C10 22.4477 10.4477 22 11 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H11C10.4477 24 10 23.5523 10 23Z"
                        fill="#3A343C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.9762 2.78307C24.096 3.3222 23.7561 3.85638 23.2169 3.97619L5.21693 7.97619C4.6778 8.09599 4.14362 7.75606 4.02381 7.21693C3.90401 6.6778 4.24394 6.14362 4.78307 6.02381L22.7831 2.02381C23.3222 1.90401 23.8564 2.24394 23.9762 2.78307Z"
                        fill="#3A343C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 6C5.4089 6 5.77661 6.24895 5.92848 6.62861L9.92848 16.6286C9.97573 16.7467 10 16.8728 10 17C10 18.5596 9.08909 19.5955 8.06633 20.1921C7.07288 20.7715 5.8915 21 5 21C4.1085 21 2.92712 20.7715 1.93367 20.1921C0.910907 19.5955 0 18.5596 0 17C0 16.8728 0.0242752 16.7467 0.0715233 16.6286L4.07152 6.62861C4.22339 6.24895 4.5911 6 5 6ZM2.00829 17.1719C2.06358 17.7323 2.39363 18.145 2.94133 18.4645C3.57288 18.8328 4.3915 19 5 19C5.6085 19 6.42712 18.8328 7.05867 18.4645C7.60637 18.145 7.93642 17.7323 7.99171 17.1719L5 9.69258L2.00829 17.1719Z"
                        fill="#3A343C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 2C23.4089 2 23.7766 2.24895 23.9285 2.62861L27.9285 12.6286C27.9757 12.7467 28 12.8728 28 13C28 14.5596 27.0891 15.5955 26.0663 16.1921C25.0729 16.7715 23.8915 17 23 17C22.1085 17 20.9271 16.7715 19.9337 16.1921C18.9109 15.5955 18 14.5596 18 13C18 12.8728 18.0243 12.7467 18.0715 12.6286L22.0715 2.62861C22.2234 2.24895 22.5911 2 23 2ZM20.0083 13.1719C20.0636 13.7323 20.3936 14.145 20.9413 14.4645C21.5729 14.8328 22.3915 15 23 15C23.6085 15 24.4271 14.8328 25.0587 14.4645C25.6064 14.145 25.9364 13.7323 25.9917 13.1719L23 5.69258L20.0083 13.1719Z"
                        fill="#3A343C"
                      />
                    </svg>
                  </div>
                  <div>Legal Services</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-item">
                <div className="filter-text">
                  <div>
                    <svg
                      width="30"
                      height="23"
                      viewBox="0 0 30 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.5999 12.7989C29.4948 12.8777 29.3753 12.935 29.2481 12.9676C29.1209 13.0002 28.9885 13.0074 28.8585 12.9889C28.7285 12.9703 28.6034 12.9263 28.4904 12.8594C28.3774 12.7925 28.2787 12.704 28.1999 12.5989C27.5972 11.7887 26.8126 11.1314 25.9094 10.6798C25.0063 10.2282 24.0097 9.995 22.9999 9.99892C22.8032 9.9989 22.611 9.94091 22.4471 9.83219C22.2833 9.72347 22.1551 9.56885 22.0786 9.38767C22.0267 9.26464 22 9.13246 22 8.99892C22 8.86539 22.0267 8.7332 22.0786 8.61017C22.1551 8.42899 22.2833 8.27437 22.4471 8.16566C22.611 8.05694 22.8032 7.99894 22.9999 7.99892C23.561 7.99887 24.1108 7.84147 24.5869 7.5446C25.063 7.24773 25.4464 6.82328 25.6934 6.31947C25.9403 5.81567 26.0411 5.25269 25.9841 4.6945C25.9272 4.1363 25.7149 3.60527 25.3713 3.1617C25.0276 2.71813 24.5665 2.37982 24.0403 2.18519C23.514 1.99056 22.9437 1.94741 22.3942 2.06065C21.8446 2.17389 21.3379 2.43897 20.9314 2.82578C20.525 3.2126 20.2352 3.70565 20.0949 4.24892C20.0621 4.37614 20.0045 4.49564 19.9255 4.60062C19.8465 4.70559 19.7475 4.79397 19.6344 4.86071C19.5212 4.92745 19.396 4.97125 19.2659 4.9896C19.1358 5.00795 19.0034 5.0005 18.8761 4.96767C18.7489 4.93484 18.6294 4.87727 18.5244 4.79826C18.4195 4.71924 18.3311 4.62033 18.2644 4.50715C18.1976 4.39398 18.1538 4.26877 18.1355 4.13868C18.1171 4.00858 18.1246 3.87614 18.1574 3.74892C18.3521 2.99556 18.7199 2.29804 19.2316 1.71186C19.7433 1.12568 20.3848 0.667012 21.1049 0.372359C21.8251 0.0777059 22.6041 -0.0448015 23.3799 0.0145842C24.1558 0.0739698 24.9071 0.31361 25.574 0.714436C26.2409 1.11526 26.8051 1.66621 27.2216 2.32344C27.6381 2.98068 27.8955 3.72605 27.9733 4.50027C28.0511 5.27448 27.9471 6.05616 27.6696 6.78311C27.3921 7.51006 26.9488 8.16221 26.3749 8.68767C27.7347 9.27642 28.9167 10.2107 29.8036 11.3977C29.8824 11.503 29.9397 11.6228 29.9721 11.7503C30.0045 11.8778 30.0114 12.0104 29.9925 12.1406C29.9736 12.2707 29.9291 12.3959 29.8618 12.5089C29.7944 12.6218 29.7054 12.7204 29.5999 12.7989ZM22.8649 20.4989C22.9372 20.6127 22.9858 20.74 23.0077 20.8731C23.0296 21.0062 23.0243 21.1423 22.9923 21.2733C22.9602 21.4043 22.9019 21.5275 22.821 21.6354C22.7401 21.7433 22.6382 21.8337 22.5214 21.9012C22.4047 21.9687 22.2754 22.0118 22.1416 22.0281C22.0077 22.0444 21.8719 22.0334 21.7424 21.9958C21.6128 21.9582 21.4922 21.8948 21.3878 21.8094C21.2834 21.7241 21.1974 21.6184 21.1349 21.4989C20.5049 20.4323 19.6078 19.5483 18.5319 18.9342C17.4561 18.3201 16.2387 17.9971 14.9999 17.9971C13.7611 17.9971 12.5437 18.3201 11.4679 18.9342C10.392 19.5483 9.49483 20.4323 8.86489 21.4989C8.80238 21.6184 8.71633 21.7241 8.61194 21.8094C8.50755 21.8948 8.38696 21.9582 8.25743 21.9958C8.1279 22.0334 7.99211 22.0444 7.85822 22.0281C7.72434 22.0118 7.59513 21.9687 7.47836 21.9012C7.3616 21.8337 7.25969 21.7433 7.17878 21.6354C7.09786 21.5275 7.03961 21.4043 7.00752 21.2733C6.97543 21.1423 6.97018 21.0062 6.99206 20.8731C7.01395 20.74 7.06254 20.6127 7.13489 20.4989C8.10439 18.8331 9.58263 17.5223 11.3524 16.7589C10.3566 15.9965 9.62468 14.9411 9.25964 13.7412C8.89461 12.5413 8.91477 11.2572 9.31728 10.0693C9.7198 8.88144 10.4844 7.84958 11.5037 7.11877C12.523 6.38795 13.7457 5.99492 14.9999 5.99492C16.2541 5.99492 17.4768 6.38795 18.4961 7.11877C19.5153 7.84958 20.28 8.88144 20.6825 10.0693C21.085 11.2572 21.1052 12.5413 20.7401 13.7412C20.3751 14.9411 19.6432 15.9965 18.6474 16.7589C20.4171 17.5223 21.8954 18.8331 22.8649 20.4989ZM14.9999 15.9989C15.791 15.9989 16.5644 15.7643 17.2222 15.3248C17.88 14.8853 18.3927 14.2606 18.6954 13.5297C18.9982 12.7987 19.0774 11.9945 18.923 11.2186C18.7687 10.4426 18.3877 9.7299 17.8283 9.17049C17.2689 8.61108 16.5562 8.23012 15.7803 8.07578C15.0043 7.92144 14.2001 8.00065 13.4692 8.3034C12.7383 8.60615 12.1135 9.11884 11.674 9.77664C11.2345 10.4344 10.9999 11.2078 10.9999 11.9989C10.9999 13.0598 11.4213 14.0772 12.1715 14.8273C12.9216 15.5775 13.939 15.9989 14.9999 15.9989ZM7.99989 8.99892C7.99989 8.7337 7.89453 8.47935 7.707 8.29181C7.51946 8.10428 7.26511 7.99892 6.99989 7.99892C6.4388 7.99887 5.88897 7.84147 5.41285 7.5446C4.93673 7.24773 4.55341 6.82328 4.30643 6.31947C4.05945 5.81567 3.9587 5.25269 4.01564 4.6945C4.07258 4.1363 4.28491 3.60527 4.62853 3.1617C4.97214 2.71813 5.43326 2.37982 5.95952 2.18519C6.48577 1.99056 7.05605 1.94741 7.6056 2.06065C8.15514 2.17389 8.66192 2.43897 9.06836 2.82578C9.4748 3.2126 9.76462 3.70565 9.90489 4.24892C9.9712 4.50585 10.1368 4.72592 10.3654 4.86071C10.594 4.9955 10.8667 5.03398 11.1236 4.96767C11.3806 4.90137 11.6006 4.73571 11.7354 4.50715C11.8702 4.27859 11.9087 4.00585 11.8424 3.74892C11.6477 2.99556 11.2799 2.29804 10.7682 1.71186C10.2564 1.12568 9.615 0.667012 8.89483 0.372359C8.17467 0.0777059 7.39568 -0.0448015 6.61984 0.0145842C5.844 0.0739698 5.09273 0.31361 4.4258 0.714436C3.75887 1.11526 3.1947 1.66621 2.77817 2.32344C2.36164 2.98068 2.10425 3.72605 2.02648 4.50027C1.94871 5.27448 2.05271 6.05616 2.3302 6.78311C2.60769 7.51006 3.05101 8.16221 3.62489 8.68767C2.26649 9.27697 1.08578 10.2112 0.199891 11.3977C0.0405954 11.6098 -0.0278906 11.8766 0.00949948 12.1393C0.0468895 12.4019 0.187093 12.639 0.399266 12.7983C0.611439 12.9576 0.878202 13.0261 1.14087 12.9887C1.40354 12.9513 1.6406 12.8111 1.79989 12.5989C2.40262 11.7887 3.18716 11.1314 4.09034 10.6798C4.99352 10.2282 5.99011 9.995 6.99989 9.99892C7.26511 9.99892 7.51946 9.89356 7.707 9.70603C7.89453 9.51849 7.99989 9.26414 7.99989 8.99892Z"
                        fill="#3A343C"
                      />
                    </svg>
                  </div>
                  <div>Agencies</div>
                </div>
                <div className="filter-input">
                  <Checkbox />
                </div>
              </div>
              <div className="filter-buttons">
                <div onClick={() => setOpenFilterPopup(false)}>
                  <ButtonSmall>
                    <span>Apply</span>
                  </ButtonSmall>
                </div>
                <div onClick={() => setOpenFilterPopup(false)}>
                  <ButtonSmall secondary>
                    <span>Cancel</span>
                  </ButtonSmall>
                </div>
              </div>
            </div>
          )}
        </SaveResource_Filter>
      </div>
      <div className="body-content">
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/karate.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Karate Group Class</div>
              <div className="description">Kicking the Spectrum</div>
            </div>
            <div className="country">New York, NY</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/permobil.png" alt="karate" />
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Permobil F5 Corpus VS</div>
              <div className="description">
                Power wheelchair with standing power
              </div>
            </div>
            <div className="country">Online</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/belcore.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Belcore Day Camp Facility</div>
              <div className="description">Day camp</div>
            </div>
            <div className="country">Brooklyn, NY</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/housing.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">
                Housing Advocacy for People with Disabilities
              </div>
              <div className="description">Housing agency</div>
            </div>
            <div className="country">Brooklyn, NY</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/nyl.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">NYL William O’Conner Middle School</div>
              <div className="description">Early childhood education</div>
            </div>
            <div className="country">City, State</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/dr.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Dr. Clara Fernandez-Perez, PhD, MD</div>
              <div className="description">Psychiatrist</div>
            </div>
            <div className="country">Chelsea, New York</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/denis.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Denise N. Truong-MacGill, JD</div>
              <div className="description">Attorney</div>
            </div>
            <div className="country">New York, NY</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
        <SaveResource_Card>
          <div className="card-header">
            <div>
              <img src="/images/kris.png" alt="karate" />
            </div>
            <div className="header-label">
              <div>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.25"
                    cy="9"
                    r="7.5"
                    stroke="#6C6C6C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.9808 2.25L8.55288 10.0236L5.01923 6.32547L3 8.43868L8.55288 14.25L18 4.36321L15.9808 2.25Z"
                    fill="#026600"
                  />
                </svg>
              </div>
              <div className="label-text">Verified</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="title">Dr. Kristie Leung, LMHC</div>
              <div className="description">Psychotherapist</div>
            </div>
            <div className="country">City, State</div>
            <div className="card-footer">
              <div>
                <ButtonSmall>
                  <span>Add to care plan</span>
                </ButtonSmall>
              </div>
              <div>
                <ButtonSmall secondary>
                  <span>View profile</span>
                </ButtonSmall>
              </div>
            </div>
          </div>
        </SaveResource_Card>
      </div>
    </SaveResource_MainWrapper>
  )
}
