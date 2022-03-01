import React from "react";
import NavBar from "../components/NavBar";
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
           this.scrollTo(index-3);
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
                Vilayum Ulagu” (Wisdom Maketh the World).  The University
                has 27 departments and 113 affiliated colleges. The Choice Based
                Credit System (CBCS) was introduced for various programmes
                offered by the University from 2008-09 onwards. From 2009-10
                onwards, the University has been offering certificate courses to
                cater to the current needs of the public. Periyar University
                provides the Student Support Services such as Library, National
                Service Scheme, Youth Red Cross, Women’s Welfare Centre and
                various avenues for sports and games.
              </p>
            </div>
          </section>
          <section className="page">
            <div className="text-container">
              <h2>The third page</h2>
              <p>
                Try: Scroll the page; Click the white dots on the right side;
                Resize the window; View it on a mobile browser.
              </p>
            </div>
          </section>
          <section className="page">
            <div className="text-container">
              <h2>The third page</h2>
              <p>
                Try: Scroll the page; Click the white dots on the right side;
                Resize the window; View it on a mobile browser.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
