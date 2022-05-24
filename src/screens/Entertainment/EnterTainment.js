import React,{useEffect,useState} from "react";
import RoundCard from "../../components/RoundCard";

import "./EnterTainment.css";

export default function Entertainment() {
    
    var props = {
        title1: "Entertainment",
        para1:
          "  Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight. It can be an idea or a task, but is more likely to be one of the activities or events that have developed over thousands of years specifically for the purpose of keeping an audience's attention.",
        title2: "About Entertainment",
        para2:
          "Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight. It can be an idea or a task, but is more likely to be one of the activities or events that have developed over thousands of years specifically for the purpose of keeping an audience's attention.",
        title3: "Entertainment Types",
        cardData: [
          {
            text: "Amusement parks.",
            img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/cover-parks.jpg",
            to: "https://en.wikipedia.org/wiki/Park",
          },
          {
            text: "Festivals.",
            img: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/12/festivals-of-india-blog-cover.jpg",
            to: "https://en.wikipedia.org/wiki/Festival",
          },
          {
            text: "Cricket  ",
            img: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa646c9b7-13a5-4420-ab42-13ac0cf8a158.jpg?dpr=1&fit=scale-down&source=next&width=700",
            to: "https://www.cricbuzz.com/cricket-match/live-scores",
          },
          {
            text: "Mobile games",
            img: "https://techcrunch.com/wp-content/uploads/2017/06/mobile-games-sensor-tower.jpg?w=1390&crop=1",
            to: "https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en_US&gl=US",
          },
          {
            text: "Watching television",
            img: "https://www.thoughtco.com/thmb/Sur4fPezzWRVzJFmmFVWFI2kuAw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-680882197-58f4d5d65f9b582c4dd4a776.jpg",
            to: "https://www.jiotv.com/",
          },
        ],
        footerTitle1: "Academic",
        footerTitle1Data: [
          "engage audiences",
          "introduce ideas",
          "information and encouraging",
          "self-assessment",
          "discussion within their social circles.",
        ],
        footerTitle2: "Quick Links",
        footerTitle2Data: [
          " Amusement parks",
          " Fairs",
          " Festivals",
          " Traveling carnivals",
          " Travelling exhibition",
        ],
        footerTitle3: "Our Speciality",
        footerTitle3Data: [
          "When freely chosen ",
          " relaxation",
          " arousal ",
          " can induce the range of human emotions that enrich daily life",
          " The emotional and social satisfactions provided by entertainment are supplemented by their impact on executive functioning and health",
        ],
      };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages15"));
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages15"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return (
    <>
      {/* <NavBar /> */}
      <div className="fullscreen-container">
        <div id="all-pages15">
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
