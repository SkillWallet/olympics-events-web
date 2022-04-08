import React from "react";
import Banner from "containers/Banner";
import MainWrapper from "./_main_wrapper";
import Events from "containers/Events";
import About from "containers/About";
import OtherEvents from "containers/OtherEvents";
import Calendar from "containers/Calendar";
import News from "containers/News";

const Main = () => {
  return (
    <MainWrapper>
      <Banner />
      <About />
      <Events />
      <OtherEvents />
      <Calendar />
      <News />
    </MainWrapper>
  );
};
export default Main;
