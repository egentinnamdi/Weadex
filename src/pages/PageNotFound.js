import styled from "styled-components";
import { center } from "../styles/GlobalStyles";
import { useNavigate } from "react-router-dom";
const StyledPageNotFound = styled.div`
  ${center}
  background-color: var(--cloud-burst);
`;

function PageNotFound() {
  const Navigate = useNavigate()

  return <StyledPageNotFound className="p-5 leading-relaxed h-screen font-medium text-white lg:text-6xl text-4xl text-center">
    <button onClick={()=> Navigate(-1)} className="capitalize lg:text-2xl text-lg absolute p-10 top-0 left-0 cursor-pointer active:text-goblin transition-all duration-100 ease-in">&lt;back</button>
    <p>
    Page Not Found
    </p>
    </StyledPageNotFound>;
}

export default PageNotFound;
