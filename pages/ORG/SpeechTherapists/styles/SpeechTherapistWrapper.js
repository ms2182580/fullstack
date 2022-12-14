import styled from "styled-components"

const SpeechTherapistWraper = styled.div`
  margin: ${x => x.inDetail ? "2rem 0" : "2rem 6rem"} ;

  & > div:nth-child(1) {
    margin-bottom: 2rem;

    & > span > a > svg {
      margin-right: 0.625rem;
    }

    & > span {
      cursor: pointer;
    }
  }
  & > div:nth-child(2) {
    margin-bottom: 2.25rem;
  }
`

export default SpeechTherapistWraper

