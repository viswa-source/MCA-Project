import React from "react";
import Template from "../components/Template";
import "./css/tamilsite.css";
export default function TamilSite() {
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
      title1="இதழியல்"
      para1="  இதழியல் என்பது அறிக்கைகளின் உற்பத்தி மற்றும் விநியோகம் ஆகும்
      நிகழ்வுகள், உண்மைகள், யோசனைகள் மற்றும் செய்தியாக இருக்கும் நபர்களின் தொடர்பு
        அந்த நாள் குறைந்தபட்சம் ஓரளவாவது சமுதாயத்திற்கு தெரிவிக்கிறது. ...
        இதழியல் ஊடகங்களில் அடங்கும்: அச்சு, தொலைக்காட்சி, வானொலி, இணையம் மற்றும்,
        கடந்த காலத்தில், நியூஸ்ரீல்கள்"
      title2="பத்திரிகை பற்றி
      "
      para2="நாளிதழ் என்பது நிகழ்வுகள், உண்மைகள், கருத்துக்கள் மற்றும் மனிதர்களின் தொடர்பு பற்றிய அறிக்கைகளின் உற்பத்தி மற்றும் விநியோகம் ஆகும், அவை அன்றைய செய்திகளாகவும், குறைந்தபட்சம் ஓரளவுக்கு சமூகத்திற்கு தெரிவிக்கின்றன. சொல், ஒரு பெயர்ச்சொல், தொழில் (தொழில்முறை அல்லது இல்லை), தகவல்களை சேகரிக்கும் முறைகள் மற்றும் ஒழுங்கமைக்கும் இலக்கிய பாணிகளுக்கு பொருந்தும். இதழியல் ஊடகங்களில் பின்வருவன அடங்கும்: அச்சு, தொலைக்காட்சி, வானொலி, இணையம் மற்றும், கடந்த காலத்தில், செய்திப் படங்கள்.

      இதழியலுக்கான பொருத்தமான பங்கு பற்றிய கருத்துக்கள் நாடுகளுக்கிடையே வேறுபடுகின்றன, அதே போல் தொழில் பற்றிய கருத்துக்கள் மற்றும் நிலை. சில நாடுகளில், செய்தி ஊடகங்கள் அரசாங்கத்தின் தலையீட்டால் கட்டுப்படுத்தப்படுகின்றன மேலும் அவை முழுமையாக (அல்லது பகுதியளவு கூட) சுதந்திரமாக இல்லை.[1] மற்றவற்றில், செய்தி ஊடகங்கள் அரசாங்கத்திலிருந்து சுயாதீனமானவை மற்றும் அதற்கு பதிலாக தனியார் தொழில்துறையாக செயல்படுகின்றன. ஊடக நிறுவனங்கள் எவ்வாறு நடத்தப்படுகின்றன மற்றும் நிதியளிக்கப்படுகின்றன என்பதன் மாறுபட்ட தன்மைக்கு கூடுதலாக, பேச்சு சுதந்திரம் மற்றும் அவதூறு வழக்குகளை கையாளும் சட்டங்களின் மாறுபட்ட நடைமுறைகளை நாடுகள் கொண்டிருக்கலாம்."
      title3="பத்திரிகை பிராண்டுகள்"
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
      footerTitle1="கல்விசார்"
      footerTitle1Data={[
        "இணைக்கப்பட்ட கல்லூரிகள்",
        "மையங்கள் & செல்கள்",
        "சமூகக் கல்லூரிகள்",
        "துறைகள்",
        "தொலைதூர கல்வி",
        "பிஜி விரிவாக்க மையம்",
        "ஆராய்ச்சி மையங்கள்",
      ]}
      footerTitle2="விரைவு இணைப்புகள்"
      footerTitle2Data={[
        "சாதனைகள்",
        "பழைய மாணவர்கள்",
        "ராகிங் எதிர்ப்பு",
        "பதிவிறக்கங்கள்",
        "இ - சனத் சேவைகள்",
        "வசதிகள்",
        "உள்நுழைய",
      ]}
      footerTitle3="எங்கள் சிறப்பு
      "
      footerTitle3Data={[
        "  உடற்கல்வி",
        "வேலை வாய்ப்பு",
        "வெளியீடு",
        "ஆராய்ச்சி",
        "மாணவர்கள் போர்டல்",
        " பாடத்திட்டங்கள்",
        "UICP இன்ஸ்டிடியூட் பட்டியல்",
      ]}
    />
  );
}
