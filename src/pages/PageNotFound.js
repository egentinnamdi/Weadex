import styled from "styled-components";
import { center } from "../styles/GlobalStyles";

const StyledPageNotFound = styled.div`
  ${center}
  background-color: var(--cloud-burst);
  height: 85vh;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 1.2rem;
  color: white;
  border-radius: var(--border-radius-10);
`;

function PageNotFound() {
  return <StyledPageNotFound>Page Not Found</StyledPageNotFound>;
}

export default PageNotFound;
