import { Link } from "react-router-dom";
import styled from "styled-components";
import { center } from "../styles/GlobalStyles";

const StyledProfile = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr 1fr;
  gap: 1.2rem;
  height: 85vh;
  background-color: white;
  border-radius: var(--border-radius-10);
  padding: 30px;
`;
const StyledImage = styled.div`
  ${center}
  & div {
    height: 90%;
    width: 60%;
    border-top: green 5px solid;
    border-bottom: green 5px solid;
    border-radius: 50% 10%;
    animation: fadeInLeft 2s ease-in-out;
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 5px;
    border-radius: inherit;
  }
  @keyframes fadeInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    0% {
      transform: translateX(-20%);
      /* opacity: 5; */
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
const StyledAbout = styled.div`
  ${center}
  & p {
    text-align: justify;
    padding-right: 100px;
    color: var(--cape-cod);
    color: black;
    font-size: 15px;
    line-height: 1.5rem;
    font-weight: 500;
    backface-visibility: hidden;
    animation: fadeInRight 2s ease-in-out;
  }
  @keyframes fadeInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
const StyledNav = styled.div`
  ${center}
  grid-column: span 2;
`;
const Button = styled(Link)`
  text-transform: capitalize;
  align-self: flex-end;
  justify-self: center;
  padding: 20px;
  background-color: green;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: var(--border-radius-30);
`;
function Profile() {
  return (
    <StyledProfile>
      <StyledImage>
        <div>
          <img src="../../profile-pic-min.jpg" alt="proflie-pic" />
        </div>
      </StyledImage>
      <StyledAbout>
        <p>
          Hello! I'm Nnamdi Aka DeeCode Bender, a seasoned full-stack web
          developer skilled in Node.js, Express, React, MongoDB, JavaScript,
          HTML, and CSS. Equipped with an NIIT certificate, I specialize in
          creating captivating Single Page Applications (SPAs) and Multi-Page
          Applications (MPAs). You can discover my services on platforms like
          Fiverr and Upwork, where I'm committed to delivering exceptional web
          solutions tailored to your needs.
        </p>
      </StyledAbout>
      <StyledNav>
        <Button to="/weadex">take me to weadex</Button>
      </StyledNav>
    </StyledProfile>
  );
}

export default Profile;
