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
  const { isLoading,  input, numOfDays, error, data } =
    useWeather();
  try {
    if (error) throw new Error(error);

    if (!input.length > 2 && !numOfDays)
      return (
        <StyledLoader>
          <Message message="Search For A City" />
        </StyledLoader>
      );
    if (isLoading) {
      return (
        <StyledLoader>
          <Spinner />
        </StyledLoader>
      );
    }
    if (data === null || data.error) {
      return (
        <StyledLoader>
          <Message message="Search For A City" />
        </StyledLoader>
      );
    }
  } catch (err) {
    console.log(err);
    return (
      <StyledLoader>
        <Message message={err.message} />
      </StyledLoader>
    );
  }
  return <>{children}</>;
}

export default Loader;
