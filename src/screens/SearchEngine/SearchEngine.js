import React,{useEffect,useState} from "react";
import RoundCard from "../../components/RoundCard";

import "./SearchEngine.css";

export default function SearchEngine() {
    
  var props = {
    title1:"Google",
      para1:" Google LLC is an American multinational technology company that focuses on artificial intelligence, search engine, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      title2:"Best Search Engine",
      para2:"Google is the world’s most popular search engine. It began as a search project in 1996 by Larry Page and Sergey Brin, who were two Ph.D. students at Stanford University. They developed a search engine algorithm that ranked Web pages not just by content and keywords, but by how many other Web pages linked to each page. This strategy produced more useful results than other search engines, and led to a rapid increase in Google’s Web search market share. The Google ranking algorithm was later named “PageRank” and was patented in September of 2001. In only a short time, Google became the number one search engine in the world.According to Google’s website, the company’s mission is to “organize the world’s information and make it universally accessible and useful.” While the Web search remains Google’s primary tool for helping user’s access information, the company offers several other services as well. Some of these include:" ,
      title3:"Google Products",
      cardData:[
        {
          text: "Youtube",
          img: "https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj",
          to: "https://www.youtube.com/",
        },
        {
          text: "Google Drive",
          img: "https://cdn.icon-icons.com/icons2/1222/PNG/512/1492616974-19-google-drive-data-document-file-safe_83422.png",
          to: "https://drive.google.com/",
        },
        {
          text: "Google Sheets",
          img: "https://kstatic.googleusercontent.com/files/adf55cdf4c7f8fb38efbf8df6c2792660fbeff2d05be05f2ec8e9c265a179b51c64b9679d8aee00e09cad19ce419d90a2d999b82cea4200abbe78c73e6bfaacf",
          to: "https://www.google.com/sheets/about/",
        },
        {
          text: "Gmail",
          img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-500x500.png",
          to: "https://mail.google.com/",
        },
        {
          text: "Google Meet",
          img: "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png",
          to: "https://meet.google.com/",
        },
      ],
      footerTitle1:"Products",
      footerTitle1Data:[
        "Gmail",
        "Google Meet",
        "Google Sheets",
        "Google Drive",
        "Youtube",
      ],
      footerTitle2:"Communication and publishing toolss",
      footerTitle2Data:[
        "Blogger",
        "Google Chat ",
        "Google Classroom",
        "Google Charts",
        "Google Docs ",
        "Google Keep ",
      ],
      footerTitle3:"Map-related products",
      footerTitle3Data:[
        " Google Maps",
    " Google Earth",
    " Google Sky",
    " Google Street View ",
    " Google Mars.",
      ]
  };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages13"));
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages13"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return (
    <>
      {/* <NavBar /> */}
      <div className="fullscreen-container">
        <div id="all-pages13">
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
