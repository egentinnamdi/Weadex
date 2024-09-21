// import styled from "styled-components";
import Dashboard from "../ui/Dashboard";
import Loader from "../ui/Loader";
import Stats from "../ui/Stats";

// const StyledAppLayout = styled.div`
//   /* @media () display: grid; */
//   display: grid;
//   grid-template: auto / 0.7fr 1fr;
//   /* min-height: 85vh; */
//   background-color: var(--mirage-transparent);
//   gap: 1.2rem;
//   padding: 30px;
//   border-radius: var(--border-radius-20);
// `;

// <StyledAppLayout className="h-screen">
function AppLayout() {
  return (
    <div className=" grid place-items-center   p-10  text-pink-swan min-h-screen w-screen">
      <div className="lg:grid lg:grid-rows-1 lg:grid-cols-[0.7fr_1fr] w-full bg-mirage-transparent h-full gap-5 rounded-xl p-7">
      <Dashboard />
      {/* <Loader> */}
        {/* <Stats /> */}
      {/* </Loader> */}
    </div> </div>
  );
}

export default AppLayout;
