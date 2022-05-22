import React from "react";
import Template from "../components/Template";
import "./css/discord.css";
export default function Discord() {
  return (
    <Template
      title1="Discord"
      para1=" Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called 'servers'"
      title2="About Discord"
      para2="IMAGINE A PLACE...
      ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often."
      title3="பத்திரிகை பிராண்டுகள்"
      cardData={[
        {
          text: "The New York Times",
          img: "https://mwcm.nyt.com/dam/mkt_assets/crs/banners/MON-373072-INYT-April-2022/lib/images/wordmark-Master-large-optimised-BLK.svg",
          to: "https://www.nytimes.com/",
        },
        {
          text: "The Wall Street Journal",
          img: "	https://vir.wsj.net/fp/assets/webpack4/img/wsj-logo.a4b1ba3a.svg",
          to: "https://www.wsj.com/",
        },
        {
          text: "The Washington Post",
          img: require("../images/thewaskintonpost.png"),
          to: "https://www.washingtonpost.com/",
        },
        {
          text: "BBC",
          img: "https://static.files.bbci.co.uk/orbit/f890d0b21a8e1fb8c25aecf4459bcfcc/img/blq-orbit-blocks_grey.svg",
          to: "https://www.bbc.com/news",
        },
        {
          text: "The Economist",
          img: require("../images/ec.png"),
          to: "https://www.economist.com/",
        },
      ]}
      footerTitle1="கல்விசார்"
      footerTitle1Data={[
        "இணைக்கப்பட்ட கல்லூரிகள்",
        "மையங்கள் & செல்கள்",
        "சமூகக் கல்லூரிகள்",
        "துறைகள்",
        "தொலைதூர கல்வி",
        "பிஜி விரிவாக்க மையம்",
        "ஆராய்ச்சி மையங்கள்",
      ]}
      footerTitle2="விரைவு இணைப்புகள்"
      footerTitle2Data={[
        "சாதனைகள்",
        "பழைய மாணவர்கள்",
        "ராகிங் எதிர்ப்பு",
        "பதிவிறக்கங்கள்",
        "இ - சனத் சேவைகள்",
        "வசதிகள்",
        "உள்நுழைய",
      ]}
      footerTitle3="எங்கள் சிறப்பு
      "
      footerTitle3Data={[
        "  உடற்கல்வி",
        "வேலை வாய்ப்பு",
        "வெளியீடு",
        "ஆராய்ச்சி",
        "மாணவர்கள் போர்டல்",
        " பாடத்திட்டங்கள்",
        "UICP இன்ஸ்டிடியூட் பட்டியல்",
      ]}
    />
  );
}
