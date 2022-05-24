import React,{useEffect,useState} from "react";
import RoundCard from "../components/RoundCard";
import './css/discord.css'
import Template from "../components/Template";
// import "./css/discord.css";
export default function Discord() {
  var props = {
    title1: "Discord",
    para1:
      "  Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls,video calls, text messaging, media and files in private chats or as part of communities called 'servers'",
    title2: "About Discord",
    para2:
      "IMAGINE A PLACE......where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.A server is a collection of persistent chat rooms and voice channels which can be accessed via invite links. Discord runs on Windows, macOS, Android, iOS, iPadOS, Linux, and in web browsers. As of 2021, the service has over 350 million registered users and over 150 million monthly active users.",
    title3: "Discord Features",
    cardData: [
      {
        text: "Video Backgrounds",
        img: "https://images.livemint.com/img/2020/11/01/600x338/Screenshot_2020-11-01_at_4.37.19_PM_1604229197253_1604229203545.png",
        to: "https://support.discord.com/hc/en-us/articles/4413490191127-Video-Backgrounds",
      },
      {
        text: "Go Live and Screen Share",
        img: "https://static.teamviewer.com/resources/2019/04/TeamViewer-Screen-Share-mobile-to-laptop-1024x744.png",
        to: "https://support.discord.com/hc/en-us/articles/360040816151-Go-Live-and-Screen-Share",
      },
      {
        text: "Video Calls",
        img: "https://www.shethepeople.tv/wp-content/uploads/2016/11/Whatsapp-video-call.jpg",
        to: "https://support.discord.com/hc/en-us/articles/360041721052-Video-Calls",
      },
      {
        text: "Streamer Mode 101",
        img: "https://static.files.bbci.co.uk/orbit/f890d0b21a8e1fb8c25aecf4459bcfcc/img/blq-orbit-blocks_grey.svg",
        to: "https://support.discord.com/hc/en-us/article_attachments/206193288/StreamerScreen.png",
      },
    ],
    footerTitle1: "",
    footerTitle1Data: ["Download", " Help & Support", "Feedback", "Status"],
    footerTitle2: "",
    footerTitle2Data: [
      "Company",
      " Jobs — We're hiring",
      "Blog",
      " Terms & Privacy",
    ],
    footerTitle3: " ",
    footerTitle3Data: [],
  };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages3"));
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages3"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return  <>
  {/* <NavBar /> */}
  <div className="fullscreen-container">
    <div id="all-pages3">
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
</>;
}
