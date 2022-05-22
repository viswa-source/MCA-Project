import React, { useEffect, useState } from "react";

import Template from "../components/Template";
import "./css/Periyar.css";
export default function Periyar() {
  return (
    <Template
      title1="PERIYAR UNIVERSITY"
      para1=" One of the top 5 Indian Universities in Atal Ranking of
                  Institutions on Innovation Achievements (ARIIA).The Departments
                  of Computer Science, Chemistry, Mathematics, Geology, Journalism
                  and Mass Communication are recognized under UGC – Special
                  Assistance Programme (SAP) during the last five years."
      title2="About University"
      para2="The Government of Tamil Nadu established Periyar University in
                  Salem on 17th September 1997 as per the provisions of the
                  Periyar University Act, 1997. The University covers the area
                  comprising four districts namely Salem, Namakkal, Dharmapuri,
                  and Krishnagiri. The University obtained 12(B) and 2(f) status
                  from the University Grants Commission, New Delhi and it was
                  reaccredited by the NAAC with “A++” Grade in 2021. The
                  University secured 73rd rank among Indian Universities by MoE
                  NIRF 2021. The University is named after the Great Social
                  Reformer E.V. Ramasamy, affectionately called as “Thanthai
                  Periyar”. The University aims at developing knowledge in various
                  fields to realize the maxim inscribed in the logo “Arival
                  Vilayum Ulagu” (Wisdom Maketh the World). The University has 27
                  departments and 113 affiliated colleges. The Choice Based Credit
                  System (CBCS) was introduced for various programmes offered by
                  the University from 2008-09 onwards. From 2009-10 onwards, the
                  University has been offering certificate courses to cater to the
                  current needs of the public. Periyar University provides the
                  Student Support Services such as Library, National Service
                  Scheme, Youth Red Cross, Women’s Welfare Centre and various
                  avenues for sports and games."
      title3="Digital Actions"
      cardData={[
        {
          text: "UGC",
          img: require("../images/UGC.png"),
          to: "https://www.periyaruniversity.ac.in/UGC.php",
        },
        {
          text: "NAD Cell",
          img: require("../images/DGL.jpg"),
          to: "https://nad.digilocker.gov.in/",
        },
        {
          text: "Swayam",
          img: require("../images/swayam.jpg"),
          to: "https://www.swayam.gov.in/",
        },
        {
          text: "Journal",
          img: require("../images/IJC.png"),
          to: "https://www.periyaruniversity.ac.in/ijcii/home.html",
        },
        {
          text: "DDU-GKY",
          img: require("../images/DDUGKY.png"),
          to: "https://www.periyaruniversity.ac.in/DDUGKY/",
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
