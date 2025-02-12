"use client"
import Link from "next/link"
import {
  SearchInput,
  SearchInputWrapper,
  ContainerWrapper,
  ExtradivWrapper,
  MainContentWrapper,
  TitleWrapper,
  SearchContainerWrapper,
  SearchIconWrapper,
  ButtonContainerWrapper,
  ButtonPrimaryWrapper,
  ButtonSecondaryWrapper,
} from "./styles/index-wrapper"
import { useState } from "react"
export const  INDEX_NewSearch = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
    <ContainerWrapper>
      <ExtradivWrapper>
        <MainContentWrapper>
          <TitleWrapper>
            The ultimate guide to the world's developmental disability resources
          </TitleWrapper>
          <SearchContainerWrapper>
            <span>Keyword</span>
            <SearchInputWrapper>
              <SearchIconWrapper>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5308 18.2694L14.8368 13.5763C16.1973 11.9429 16.8757 9.84782 16.7309 7.72696C16.5861 5.60609 15.6293 3.6227 14.0593 2.18937C12.4894 0.756038 10.4274 -0.0168683 8.30212 0.0314316C6.17687 0.0797315 4.15205 0.945519 2.64888 2.44869C1.14571 3.95186 0.279927 5.97668 0.231627 8.10193C0.183327 10.2272 0.956234 12.2892 2.38956 13.8592C3.82289 15.4291 5.80629 16.3859 7.92715 16.5307C10.048 16.6755 12.1431 15.9971 13.7765 14.6366L18.4696 19.3306C18.5393 19.4003 18.622 19.4556 18.713 19.4933C18.8041 19.531 18.9017 19.5504 19.0002 19.5504C19.0988 19.5504 19.1963 19.531 19.2874 19.4933C19.3784 19.4556 19.4612 19.4003 19.5308 19.3306C19.6005 19.261 19.6558 19.1782 19.6935 19.0872C19.7312 18.9961 19.7506 18.8986 19.7506 18.8C19.7506 18.7015 19.7312 18.6039 19.6935 18.5128C19.6558 18.4218 19.6005 18.3391 19.5308 18.2694ZM1.75021 8.30002C1.75021 6.96499 2.14609 5.65995 2.88779 4.54992C3.62949 3.43989 4.6837 2.57472 5.9171 2.06383C7.1505 1.55294 8.5077 1.41927 9.81707 1.67972C11.1264 1.94017 12.3292 2.58304 13.2732 3.52705C14.2172 4.47105 14.8601 5.67379 15.1205 6.98316C15.381 8.29253 15.2473 9.64973 14.7364 10.8831C14.2255 12.1165 13.3603 13.1707 12.2503 13.9124C11.1403 14.6541 9.83524 15.05 8.50021 15.05C6.71061 15.048 4.99488 14.3362 3.72944 13.0708C2.46399 11.8054 1.7522 10.0896 1.75021 8.30002Z"
                    fill="#3A343C"
                  />
                </svg>
              </SearchIconWrapper>
              <SearchInput
                id="keyword"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ADHD, speech therapy, NAICS Code 12132 etc."
              />
            </SearchInputWrapper>
          </SearchContainerWrapper>

          <ButtonContainerWrapper>
            <ButtonPrimaryWrapper>Search Resources</ButtonPrimaryWrapper>
            <ButtonSecondaryWrapper>Search Categories</ButtonSecondaryWrapper>
          </ButtonContainerWrapper>
        </MainContentWrapper>
      </ExtradivWrapper>
    </ContainerWrapper>
    </>
  )
}
