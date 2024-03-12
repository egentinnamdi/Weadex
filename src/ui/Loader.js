import { useWeather } from "../contexts/WeatherContext";
import Message from "./Message";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 30px;
  font-weight: 500;
`;

function Loader({ children }) {
  const { isLoading, error, data } = useWeather();

  if (isLoading)
    return (
      <StyledLoader>
        <Spinner />
      </StyledLoader>
    );
  if (error || data.error)
    return (
      <StyledLoader>
        <Message message="Something Went Wrong" />
      </StyledLoader>
    );

  return <>{children}</>;
}

export default Loader;
