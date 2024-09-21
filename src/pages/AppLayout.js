// import styled from "styled-components";
import Dashboard from "../ui/Dashboard";
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
    <div className="overflow-auto  grid place-items-center   lg:p-10 p-5  text-pink-swan min-h-screen w-screen ">
      <div className="lg:grid lg:grid-rows-1 lg:grid-cols-[0.7fr_1fr] w-full bg-mirage-transparent min-h-screen gap-5 rounded-xl lg:p-7 pt-5 px-2 lg:space-y-0 space-y-5 ">
      <Dashboard />
        <Stats />
    </div> </div>
  );
}

export default AppLayout;
