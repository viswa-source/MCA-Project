import React from "react";
import Template from "../components/Template";
import "./css/Jounalism.css";
export default function Journalism() {
  return (
    // <div className="container">
    //   <div className="text_container">
    //     <p className="text_periyar">
    //       Journalism is the production and distribution of reports on the
    //       interaction of events, facts, ideas, and people that are the "news of
    //       the day" and that informs society to at least some degree. ...
    //       Journalistic media include: print, television, radio, Internet, and,
    //       in the past, newsreels
    //     </p>
    //   </div>
    //   <img
    //     className="img_periyar"
    //     style={{ alignSelf: "flex-start" }}
    //     src={require("../images/journalism.png")}
    //   />
    // </div>
    <Template
      title1="Journalism"
      para1="  Journalism is the production and distribution of reports on the
        interaction of events, facts, ideas, and people that are the news of
          the day and that informs society to at least some degree. ...
          Journalistic media include: print, television, radio, Internet, and,
          in the past, newsreels"
      title2="About Journalism"
      para2="Journalism is the production and distribution of reports on the interaction of events, facts, ideas, and people that are the news of the day and that informs society to at least some degree. The word, a noun, applies to the occupation (professional or not), the methods of gathering information, and the organizing literary styles. Journalistic media include: print, television, radio, Internet, and, in the past, newsreels.

      Concepts of the appropriate role for journalism vary between countries, as do perceptions and status of the profession. In some nations, the news media are controlled by government intervention and are not fully (or even partially) independent.[1] In others, the news media are independent of the government and instead operate as private industry. In addition to the varying nature of how media organizations are run and funded, countries may have differing implementations of laws handling the freedom of speech and libel cases."
      title3="Journalism Brands"
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
      footerTitle1="Academic"
      footerTitle1Data={[
        "Affiliated Colleges",
        "Centres & Cells",
        " Community Colleges",
        "Departments",
        "Distance Education",
        " PG Extension Centre",
        "Research Centres",
      ]}
      footerTitle2="Quick Links"
      footerTitle2Data={[
        " Achievements",
        "Alumni",
        "  Anti Ragging",
        "Downloads",
        "e - Sanad Services",
        " Facilities",
        "Login",
      ]}
      footerTitle3="Our Speciality"
      footerTitle3Data={[
        "  Physical Education",
        "Placement",
        "  Publication",
        "Research",
        "Students Portal",
        " Syllabus",
        " UICP Institute List",
      ]}
    />
  );
}
