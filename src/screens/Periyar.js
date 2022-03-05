import React, { useState } from "react";
import NavBar from "../components/NavBar";
import RoundCard from "../components/RoundCard";
import "./Periyar.css";

export default function Periyar() {
  // Implemetion reference: https://juejin.im/post/5aeef41cf265da0ba0630de0
  // Background image from free image website: https://pixabay.com/

  const helper = {
    getDelta(event) {
      if (event.wheelDelta) {
        return event.wheelDelta;
      } else {
        return -event.detail;
      }
    },
    throttle(method, delay, context) {
      let inThrottle = false;
      return function () {
        if (!inThrottle) {
          inThrottle = true;
          method.apply(context, arguments);
          setTimeout(() => {
            inThrottle = false;
          }, delay);
        }
      };
    },
    debounce(method, delay, context) {
      let inDebounce;
      return function () {
        clearTimeout(method.inDebounce);
        inDebounce = setTimeout(() => {
          method.apply(context, arguments);
        }, delay);
      };
    },
  };
  class ScrollPages {
    constructor(currentPageNumber, totalPageNumber, pages) {
      this.currentPageNumber = currentPageNumber;
      this.totalPageNumber = totalPageNumber;
      this.pages = pages;
      this.viewHeight = document.documentElement.clientHeight;
    }
    mouseScroll(event) {
      let delta = helper.getDelta(event);
      if (delta < 0) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    }
    scrollDown() {
      if (this.currentPageNumber !== this.totalPageNumber) {
        this.pages.style.top = -this.viewHeight * this.currentPageNumber + "px";
        this.currentPageNumber++;
        this.updateNav();
        this.textFadeInOut();
      }
    }
    scrollUp() {
      if (this.currentPageNumber !== 1) {
        this.pages.style.top =
          -this.viewHeight * (this.currentPageNumber - 2) + "px";
        this.currentPageNumber--;
        this.updateNav();
        this.textFadeInOut();
      }
    }
    scrollTo(targetPageNumber) {
      while (this.currentPageNumber !== targetPageNumber) {
        if (this.currentPageNumber > targetPageNumber) {
          this.scrollUp();
        } else {
          this.scrollDown();
        }
      }
    }
    createNav() {
      const pageNav = document.createElement("div");
      pageNav.className = "nav-dot-container";
      this.pages.appendChild(pageNav);
      for (let i = 0; i < this.totalPageNumber; i++) {
        pageNav.innerHTML += '<p class="nav-dot" ><span></span></p>';
      }
      const navDots = document.getElementsByClassName("nav-dot");
      this.navDots = Array.prototype.slice.call(navDots);
      this.navDots[0].classList.add("dot-active");
      this.navDots.forEach((e, index) => {
        e.addEventListener("click", (event) => {
          this.scrollTo(index - 3);
          // this.navDots.forEach((e) => {
          //   e.classList.remove("dot-active");
          // });
          // e.classList.add("dot-active");
        });
      });
    }
    updateNav() {
      this.navDots.forEach((e) => {
        e.classList.remove("dot-active");
      });
      this.navDots[this.currentPageNumber - 1].classList.add("dot-active");
    }
    resize() {
      this.viewHeight = document.documentElement.clientHeight;
      this.pages.style.height = this.viewHeight + "px";
      this.pages.style.top =
        -this.viewHeight * (this.currentPageNumber - 1) + "px";
    }
    textFadeInOut() {
      const containersDom = document.getElementsByClassName("text-container");
      let textContainers = Array.prototype.slice.call(containersDom);
      textContainers.forEach((e) => {
        e.classList.remove("in-sight");
      });
      let textContainerInSight = textContainers[this.currentPageNumber - 1];
      textContainerInSight.classList.add("in-sight");
    }
    init() {
      let handleMouseWheel = helper.throttle(this.mouseScroll, 500, this);
      let handleResize = helper.debounce(this.resize, 500, this);
      this.pages.style.height = this.viewHeight + "px";
      this.createNav();
      this.textFadeInOut();
      if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
        document.addEventListener("wheel", handleMouseWheel);
      } else {
        document.addEventListener("DOMMouseScroll", handleMouseWheel);
      }
      document.addEventListener("touchstart", (event) => {
        this.startY = event.touches[0].pageY;
      });
      document.addEventListener("touchend", (event) => {
        let endY = event.changedTouches[0].pageY;
        if (this.startY - endY < 0) {
          this.scrollUp();
        }
        if (this.startY - endY > 0) {
          this.scrollDown();
        }
      });
      document.addEventListener("touchmove", (event) => {
        event.preventDefault();
      });
      window.addEventListener("resize", handleResize);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages"));
    s.init();
  });
  const [digi, setdigi] = useState([
    {
      text: "UGC",
      img: require("../images/UGC.png"),
      to:'https://www.periyaruniversity.ac.in/UGC.php'
    },
    {
      text: "NAD Cell",
      img: require("../images/DGL.jpg"),
      to:'https://nad.digilocker.gov.in/'
    },
    {
      text: "Swayam",
      img: require("../images/swayam.jpg"),
      to:'https://www.swayam.gov.in/'
    },
    {
      text: "Journal",
      img: require("../images/IJC.png"),
      to:'https://www.periyaruniversity.ac.in/ijcii/home.html'
    },
    {
      text: "DDU-GKY",
      img: require("../images/DDUGKY.png"),
      to:'https://www.periyaruniversity.ac.in/DDUGKY/'
    },
   
  ]);
  return (
    <>
      <NavBar />
      <div className="fullscreen-container">
        <div id="all-pages">
          <section className="page">
            <div className="text-container">
              <h2>PERIYAR UNIVERSITY</h2>
              <p>
                One of the top 5 Indian Universities in Atal Ranking of
                Institutions on Innovation Achievements (ARIIA).The Departments
                of Computer Science, Chemistry, Mathematics, Geology, Journalism
                and Mass Communication are recognized under UGC – Special
                Assistance Programme (SAP) during the last five years.
              </p>
            </div>
          </section>
          <section className="page" id="About">
            <div className="text-container">
              <h2>About University</h2>
              <p>
                The Government of Tamil Nadu established Periyar University in
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
                avenues for sports and games.
              </p>
            </div>
          </section>
          <section className="page">
            <div className="text-container">
              <h1 style={{color:'grey',marginBottom:'7%'}}>Digital Actions</h1>
              <div style={{display:'flex',width:'100%',justifyContent:'space-around',flexWrap:'wrap'}}>
                {digi.map((el) => (
                  <RoundCard to={el.to} text={el.text} img={el.img} />
                ))}
              </div>
            </div>
          </section>
          <section className="page" >
            <div className="text-container">


<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
              <div class="col-lg-3" >
      <h5 class="text-warning text-center">Academic</h5>
      <ul class="nav flex-column pl-5">
        <li class="nav-item"> <a class="nav-link   text-white" href="Affiliated_Colleges.php">Affiliated Colleges</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Centres.php">Centres &amp; Cells</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Community_Colleges.php">Community Colleges</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Dept.php">Departments</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="AboutPRIDE.php">Distance Education</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="dept/PG_Extension_Centre.php">PG Extension Centre</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="research_centres.php">Research Centres</a> </li>
      </ul>
    </div>

    <div class="col-lg-3">
      <h5 class="text-warning text-right">Quick Links</h5>
      <ul class="nav flex-column pl-5">
        <li class="nav-item"> <a class="nav-link   text-white" href="https://www.periyaruniversity.ac.in/Major_Achievements.php">Achievements</a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Alumni.php">Alumni </a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Antirag.php">Anti Ragging</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Download.php">Downloads </a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="esanad.php">e - Sanad Services</a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Facilities.php">Facilities</a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="http://coe.periyaruniversity.ac.in/periyar-univ-practical/">Login </a> </li>
      </ul>
    </div>

    <div class="col-lg-3">
      <h5 class="text-warning text-center">Our Speciality</h5>
      <ul class="nav flex-column pl-5">
        <li class="nav-item"> <a class="nav-link   text-white" href="Dept/ped.php/">Physical Education</a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Placement.php">Placement</a></li>
        <li class="nav-item"> <a class="nav-link   text-white" href="https://www.periyaruniversity.ac.in/Documents/2021/Publications.pdf">Publication </a> </li>
        <li class="nav-item"> <a class="nav-link   text-white" href="Research.php">Research</a></li>
		<li class="nav-item"> <a class="nav-link   text-white" href="http://14.139.186.91/pu_uam_online/?welcome=auth&amp;p=student">Students Portal</a>
        </li><li class="nav-item"> <a class="nav-link   text-white" href="https://www.periyaruniversity.ac.in/syllabi.php">Syllabus</a> </li>
        <li class="nav-item"><a class="nav-link  text-white" href="https://www.periyaruniversity.ac.in/Documents/2021/pride/UICP_List.pdf">UICP Institute List</a> </li>
     </ul>
    </div>

    </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
