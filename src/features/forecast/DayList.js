import styled from "styled-components";
import { LuCalendar } from "react-icons/lu";
import { forecastList } from "../../styles/GlobalStyles";
import { useWeather } from "../../contexts/WeatherContext";
import DayItem from "./DayItem";

const StyledDayList = styled.div`
  ${forecastList}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

function DayList() {
  const { data, numOfDays } = useWeather();

  const DayForecast = data.forecast.forecastday;
  return (
    <StyledDayList>
      <div>
        <h3>
          <LuCalendar /> {+numOfDays || 1}-Day forecast
        </h3>
      </div>
      <Row>
        {DayForecast.map((day) => (
          <DayItem day={day} key={day.date} />
        ))}
      </Row>
    </StyledDayList>
  );
}

export default DayList;
