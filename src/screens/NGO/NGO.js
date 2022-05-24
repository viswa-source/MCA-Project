import React,{useEffect,useState} from "react";
import RoundCard from "../../components/RoundCard";

import "./NGO.css";

export default function NGO() {
  var props = {
    title1:"non-governmental organization",
      para1:"  NGO stands for non-governmental organization. While there is no universally agreed-upon definition of an NGO, typically it is a voluntary group or institution with a social mission, which operates independently from the government. NGOs or similar organizations exist in all parts of the world",
      title2:"About non-governmental organization",
      para2:"NGO stands for non-governmental organization. While there is no universally agreed-upon definition of an NGO, typically it is a voluntary group or institution with a social mission, which operates independently from the government. NGOs or similar organizations exist in all parts of the world" ,
      title3:"NGO categories",
      cardData:[
        {
          text: "Community-based Organizations",
          img: "https://www.ngoregistration.org/wp-content/uploads/2018/06/NGO.jpg",
          to: "https://www.universalclass.com/articles/business/impact-of-community-based-organizations.htm",
        },
        {
          text: "Nonprofit organization",
          img: "https://upvey.com/wp-content/uploads/2020/04/NGO-Hindi.jpg",
          to: "https://en.wikipedia.org/wiki/Nonprofit_organization",
        },
        {
          text: "Citywide Organizations",
          img: "https://image.shutterstock.com/image-photo/concept-ngo-nongovernmental-organization-charity-600w-2079594607.jpg",
          to: "https://www.worldbank.org/en/topic/sanitation/brief/citywide-inclusive-sanitation",
        },
        {
          text: "Empowering Orientation",
          img: "https://im.hunt.in/cg/City-Guide/ngo_logo.jpg",
          to: "https://www.gdrc.org/ngo/ngo-types.html",
        },
        {
          text: "Service Orientation",
          img: "https://image.shutterstock.com/image-photo/juridical-concept-about-customer-orientation-600w-1905594391.jpg",
          to: "https://en.wikipedia.org/wiki/Service-orientation",
        },
      ],
      footerTitle1:"Academic",
      footerTitle1Data:[
        "K.C. Mahindra Education Trust",
        "Udaan India Foundation",
        "Pi Jam Foundation.",
        "Vanavil Trust",
        "Vidya and Child.",
      ],
      footerTitle2:"Quick Links",
      footerTitle2Data:[
        " Charitable Orientation",
        " Service Orientation",
        " Participatory Orientation",
        " Downloads",
        " Empowering Orientation",
        " Citywide Organizations.",
      ],
      footerTitle3:"Our Speciality",
      footerTitle3Data:[
        " membership dues",
        " private donations",
        " the sale of goods and services",
        " grants from other non-profits",
        " government funding for NGOs",
      ]
  };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages9"));
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages9"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return (
    <>
      {/* <NavBar /> */}
      <div className="fullscreen-container">
        <div id="all-pages9">
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
