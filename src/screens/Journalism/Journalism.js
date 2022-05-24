import React,{useEffect,useState} from "react";
import RoundCard from "../../components/RoundCard";

import "./Jounalism.css";

export default function Journalism() {
  var props = {
    title1: "Journalism",
    para1:
      "  Journalism is the production and distribution of reports on the interaction of events, facts, ideas, and people that are the news of the day and that informs society to at least some degree. ...Journalistic media include: print, television, radio, Internet, and,in the past, newsreels",
    title2: "About Journalism",
    para2:
      "Journalism is the production and distribution of reports on the interaction of events, facts, ideas, and people that are the news of the day and that informs society to at least some degree. The word, a noun, applies to the occupation (professional or not), the methods of gathering information, and the organizing literary styles. Journalistic media include: print, television, radio, Internet, and, in the past, newsreels. Concepts of the appropriate role for journalism vary between countries, as do perceptions and status of the profession. In some nations, the news media are controlled by government intervention and are not fully (or even partially) independent.[1] In others, the news media are independent of the government and instead operate as private industry. In addition to the varying nature of how media organizations are run and funded, countries may have differing implementations of laws handling the freedom of speech and libel cases.",
    title3: "Journalism Brands",
    cardData: [
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
        img: require("../../images/thewaskintonpost.png"),
        to: "https://www.washingtonpost.com/",
      },
      {
        text: "BBC",
        img: "https://static.files.bbci.co.uk/orbit/f890d0b21a8e1fb8c25aecf4459bcfcc/img/blq-orbit-blocks_grey.svg",
        to: "https://www.bbc.com/news",
      },
      {
        text: "The Economist",
        img: require("../../images/ec.png"),
        to: "https://www.economist.com/",
      },
    ],
    footerTitle1: "Academic",
    footerTitle1Data: [
      "Affiliated Colleges",
      "Centres & Cells",
      " Community Colleges",
      "Departments",
      "Distance Education",
      " PG Extension Centre",
      "Research Centres",
    ],
    footerTitle2: "Quick Links",
    footerTitle2Data: [
      " Achievements",
      "Alumni",
      "  Anti Ragging",
      "Downloads",
      "e - Sanad Services",
      " Facilities",
      "Login",
    ],
    footerTitle3: "Our Speciality",
    footerTitle3Data: [
      "  Physical Education",
      "Placement",
      "  Publication",
      "Research",
      "Students Portal",
      " Syllabus",
      " UICP Institute List",
    ],
  };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages1"));
    s.init();
  });
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
        pageNav.innerHTML +=
          '<p className="nav-dot" class="nav-dot" ><span></span></p>';
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages1"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return (
    <>
      {/* <NavBar /> */}
      <div className="fullscreen-container">
        <div id="all-pages1">
          <section className="page">
            <div className="text-container">
              <h2>{props.title1}</h2>
              <p>{props.para1}</p>
            </div>
          </section>
          <section className="page" id="About">
            <div className="text-container">
              <h2>{props.title2}</h2>
              <p>{props.para2}</p>
            </div>
          </section>
          <section className="page">
            <div className="text-container">
              <h1 style={{ color: "grey", marginBottom: "7%" }}>
                {props.title3}
              </h1>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {digi.map((el) => (
                  <RoundCard to={el.to} text={el.text} img={el.img} />
                ))}
              </div>
            </div>
          </section>
          <section className="page">
            <div className="text-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <div class="col-lg-3">
                  <h5 class="text-warning text-center">{props.footerTitle1}</h5>
                  <ul class="nav flex-column pl-5">
                    {props.footerTitle1Data.map((el) => (
                      <li class="nav-item">
                        <a class="nav-link   text-white">{el}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="col-lg-3">
                  <h5 class="text-warning text-right">{props.footerTitle2}</h5>
                  <ul class="nav flex-column pl-5">
                    {props.footerTitle2Data.map((el) => (
                      <li class="nav-item">
                        <a class="nav-link   text-white">{el}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="col-lg-3">
                  <h5 class="text-warning text-center">{props.footerTitle3}</h5>
                  <ul class="nav flex-column pl-5">
                    {props.footerTitle3Data.map((el) => (
                      <li class="nav-item">
                        <a class="nav-link   text-white">{el}</a>
                      </li>
                    ))}
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
