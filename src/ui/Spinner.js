import styled from "styled-components";

const StyledSpinner = styled.div`
  & {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side, var(--pink-swan) 94%, #0000)
        top/8px 8px no-repeat,
      conic-gradient(#0000 30%, var(--pink-swan));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px),
      #000 0
    );
    animation: l13 1s infinite linear;
  }
  @keyframes l13 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
