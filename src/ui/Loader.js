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
  const { isLoading, isRefetching, input, numOfDays } = useWeather();
  // try {
  //   if (!error || !data) throw new Error(" something went wrong");
  //   console.log(data);

  if (!input || !numOfDays)
    return (
      <StyledLoader>
        <Message message="Search For A City" />
      </StyledLoader>
    );
  if (isLoading || isRefetching) {
    return (
      <StyledLoader>
        <Spinner />
      </StyledLoader>
    );
  }
  // if (data.error) {
  //   return (
  //     <StyledLoader>
  //       <Message message="There Was An Error" />
  //     </StyledLoader>
  //   );
  // }

  return <>{children}</>;
}

export default Loader;
