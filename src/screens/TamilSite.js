import React ,{useEffect,useState}from "react";
import RoundCard from "../components/RoundCard";

import "./css/tamilsite.css";
export default function TamilSite() {
  var props = {
    title1: "இதழியல்",
    para1:
      "  இதழியல் என்பது அறிக்கைகளின் உற்பத்தி மற்றும் விநியோகம் ஆகும நிகழ்வுகள், உண்மைகள், யோசனைகள் மற்றும் செய்தியாக இருக்கும் நபர்களின் தொடர்ப அந்த நாள் குறைந்தபட்சம் ஓரளவாவது சமுதாயத்திற்கு தெரிவிக்கிறது. ... இதழியல் ஊடகங்களில் அடங்கும்: அச்சு, தொலைக்காட்சி, வானொலி, இணையம் மற்றும், கடந்த காலத்தில், நியூஸ்ரீல்கள்",
    title2: "பத்திரிகை பற்ற",
    para2:
      "நாளிதழ் என்பது நிகழ்வுகள், உண்மைகள், கருத்துக்கள் மற்றும் மனிதர்களின் தொடர்பு பற்றிய அறிக்கைகளின் உற்பத்தி மற்றும் விநியோகம் ஆகும், அவை அன்றைய செய்திகளாகவும், குறைந்தபட்சம் ஓரளவுக்கு சமூகத்திற்கு தெரிவிக்கின்றன. சொல், ஒரு பெயர்ச்சொல், தொழில் (தொழில்முறை அல்லது இல்லை), தகவல்களை சேகரிக்கும் முறைகள் மற்றும் ஒழுங்கமைக்கும் இலக்கிய பாணிகளுக்கு பொருந்தும். இதழியல் ஊடகங்களில் பின்வருவன அடங்கும்: அச்சு, தொலைக்காட்சி, வானொலி, இணையம் மற்றும், கடந்த காலத்தில், செய்திப் படங்கள்.இதழியலுக்கான பொருத்தமான பங்கு பற்றிய கருத்துக்கள் நாடுகளுக்கிடையே வேறுபடுகின்றன, அதே போல் தொழில் பற்றிய கருத்துக்கள் மற்றும் நிலை. சில நாடுகளில், செய்தி ஊடகங்கள் அரசாங்கத்தின் தலையீட்டால் கட்டுப்படுத்தப்படுகின்றன மேலும் அவை முழுமையாக (அல்லது பகுதியளவு கூட) சுதந்திரமாக இல்லை.[1] மற்றவற்றில், செய்தி ஊடகங்கள் அரசாங்கத்திலிருந்து சுயாதீனமானவை மற்றும் அதற்கு பதிலாக தனியார் தொழில்துறையாக செயல்படுகின்றன. ஊடக நிறுவனங்கள் எவ்வாறு நடத்தப்படுகின்றன மற்றும் நிதியளிக்கப்படுகின்றன என்பதன் மாறுபட்ட தன்மைக்கு கூடுதலாக, பேச்சு சுதந்திரம் மற்றும் அவதூறு வழக்குகளை கையாளும் சட்டங்களின் மாறுபட்ட நடைமுறைகளை நாடுகள் கொண்டிருக்கலாம்.",
    title3: "பத்திரிகை பிராண்டுகள்",
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
    ],
    footerTitle1: "கல்விசார்",
    footerTitle1Data: [
    "இணைக்கப்பட்ட கல்லூரிகள்",
        "மையங்கள் & செல்கள்",
        "சமூகக் கல்லூரிகள்",
        "துறைகள்",
        "தொலைதூர கல்வி",
        "பிஜி விரிவாக்க மையம்",
        "ஆராய்ச்சி மையங்கள்",
    ],
    footerTitle2: "விரைவு இணைப்புகள்",
    footerTitle2Data: [
     "சாதனைகள்",
        "பழைய மாணவர்கள்",
        "ராகிங் எதிர்ப்பு",
        "பதிவிறக்கங்கள்",
        "இ - சனத் சேவைகள்",
        "வசதிகள்",
        "உள்நுழைய",
    ],
    footerTitle3: "எங்கள் சிறப்பு",
    footerTitle3Data: [
     "  உடற்கல்வி",
        "வேலை வாய்ப்பு",
        "வெளியீடு",
        "ஆராய்ச்சி",
        "மாணவர்கள் போர்டல்",
        " பாடத்திட்டங்கள்",
        "UICP இன்ஸ்டிடியூட் பட்டியல்",
    ],
  };
  useEffect(() => {
    var s = new ScrollPages(1, 4, document.getElementById("all-pages2"));
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
    var s = new ScrollPages(1, 4, document.getElementById("all-pages2"));
    s.init();
  });
  const [digi, setdigi] = useState(props.cardData);
  return (

    <>
    {/* <NavBar /> */}
    <div className="fullscreen-container">
      <div id="all-pages2">
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
