import React from "react";
import DaySection from "../components/DaySection";
import { Ceremony } from "../components/Ceremony";
import { AboutUs } from "../components/AboutUs";
import Gifts from "../components/Gifts";
import { ConfirmAssist } from "../components/ConfirmAssist";
import { DressCode } from "../components/DressCode";
import { Instagram } from "../components/Instagram";
import { Songs } from "../components/Songs";
import { Information } from "../components/Information";
import { Welcome } from "../components/Welcome";

const Premium = ({
  background,
  name1,
  name2,
  homeTextColor,
  homeTextFontStyle,
}) => {
  return (
    <>
      <Welcome
        background={background}
        name1={name1}
        name2={name2}
        homeTextColor={homeTextColor}
        homeTextFontStyle={homeTextFontStyle}
      />
      <DaySection backgroundColor={"#242526"} />
      <Ceremony />
      <AboutUs />
      <Gifts />
      <ConfirmAssist />
      <DressCode />
      <Instagram />
      <Songs />
      <Information />
    </>
  );
};

export default Premium;
