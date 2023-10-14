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

const Classic = ({ name1, name2, invitationStyle }) => {
  return (
    <>
      <Welcome invitationStyle={invitationStyle} name1={name1} name2={name2} />
      <DaySection invitationStyle={invitationStyle} />
      <Ceremony invitationStyle={invitationStyle}/>
      <AboutUs />
      <Gifts />
      <ConfirmAssist />
      <DressCode />
      <Instagram />
      <Songs name1={name1} name2={name2} />
      <Information />
    </>
  );
};

export default Classic;
