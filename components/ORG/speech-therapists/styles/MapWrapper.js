import styled from "styled-components"

export const MapWrapper = styled.div`
  margin-top: 32px;
  width: 384px;
  height: 200px;
  margin-inline:auto;
  display: grid;
  cursor: pointer;
  background-image: linear-gradient(
    230deg,
    hsl(281deg 68% 71%) 0%,
    hsl(271deg 74% 73%) 6%,
    hsl(260deg 80% 75%) 17%,
    hsl(250deg 85% 77%) 36%,
    hsl(240deg 90% 79%) 58%,
    hsl(231deg 94% 77%) 73%,
    hsl(224deg 97% 75%) 83%,
    hsl(219deg 97% 73%) 90%,
    hsl(214deg 97% 71%) 96%,
    hsl(210deg 95% 69%) 100%
  );

  & > p {
    place-self: center;
  }

  &:hover p{
    opacity: 0.3;
  }
`
