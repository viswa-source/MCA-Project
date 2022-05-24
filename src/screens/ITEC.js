import React from "react";
import NavBar from "../components/NavBar";
import RoundCard from "../components/RoundCard";
import "./ITEC.css";
export default function ITEC() {
  var carddata = [
    {
      text: "IT Nanban",
      img: "https://it.tn.gov.in/sites/default/files/2021-12/it-nanban-logo--1-%20%281%29.png",
      to: "https://itnanban.tn.gov.in/",
    },
    {
      text: "National Informatics Center",
      img: "https://it.tn.gov.in/sites/default/files/2019-08/NIC.png",
      to: "https://www.nic.in/",
    },
    {
      text: "NASSCOM",
      img: "https://nasscom.in/sites/all/themes/nasscom/logo.png",
      to: "https://nasscom.in/",
    },
    {
      text: "FICCI",
      img: "https://ficci.in/ficci-logo-212.png",
      to: "https://ficci.in/",
    },
    {
      text: "BSNL",
      img: "https://it.tn.gov.in/sites/default/files/2019-08/BSNL.png",
      to: "https://www.bsnl.co.in/",
    },
  ];
  return (
    <>
      <NavBar title={"Electronics and Information Technology"} />
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              src={require("../images/ITEC1.jpeg")}
              alt="First slide"
            />
            <h1 id="carusal_h1">
              <a id="a_link" href="https://it.tn.gov.in/en/ebudget%272021">
                Information Technology Department-Tamilnadu
              </a>
            </h1>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../images/ITEC2.jpg")}
              alt="Second slide"
            />
            <h1 id="carusal_h1">
              <a
                id="a_link"
                href="https://it.tn.gov.in/en/Data_Centre_Policy_2021"
              >
                The Honourable Chief Minister of TamilNadu, Thiru M.K.Stalin,
                launched the "TamilNadu Data Centre Policy 2021" at the
                Inaugural Session of CII Connect 2021, on November 26, 2021.
              </a>
            </h1>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../images/ITEC3.jpg")}
              alt="Third slide"
            />
            <h1 id="carusal_h1">
              <a id="a_link" href="https://it.tn.gov.in/en/CII_CONNECT_1">
                The Inaugural Session of CII Connect 2021, on November 26, 2021.
              </a>
            </h1>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          overflow: "hidden",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <h1 style={{ width: "100%", backgroundColor: "blue" }}>Events..</h1>
        <marquee
          style={{ height: 300 }}
          delay={500}
          direction="up"
          id="marqueeid1"
        >
          <table>
            <tbody>
              <tr>
                <td className="views-field views-field-field-eventlink">
                  <div className="item-list">
                    <ul>
                      <li>
                        <a href="https://it.tn.gov.in/en/British_Deputy_High_Commision">
                          A delegation from the British Deputy High Commission,
                          called on Honourable Mini…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/Inaugural_Session_CII_Connect_Madurai">
                          Dr Neeraj Mittal IAS Principal Secretary IT
                          ,Government of Tamil Nadu delivers …
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/IRCTC_Website">
                          Hon'ble Minister for Information Technology Thiru
                          T.Mano Thangaraj on Thursday …
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/Tamil_First">
                          Tamil first-Bilingual website of Finance Dept
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/Discussion_with_Japan_Consul_General">
                          The Consul General of Japan called on the Hon'ble
                          Minister for Information Tech…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/global_virtual_technology">
                          Address of the Hon'ble IT Minister Thiru T Mano
                          Thangaraj in the Global Virtual…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/global_virtual_technology_address_by_CM">
                          Address of the Hon'ble CM in the Global Virtual
                          Technology Summit on 17th Septe…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/Pan_IIT_PIWOT">
                          PANIIT Global Virtual Technology Conference on 17th
                          and 18th September 2021
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/training_programme">
                          Inauguration of the eoffice training programme at
                          TNEGA on 14th September 2021
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/training_at_e-office">
                          Inauguration of the training for Tamil Nadu
                          Secretariat and Assembly Secretaria…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/foundation_stone_ntt_global">
                          The Hon'ble Chief Minister of Tamil Nadu laid the
                          foundation stone for the NTT …
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/key_announcements">
                          Key announcements made by Hon'ble IT Minister Thiru
                          Mano Thangaraj on 8th Septe…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/Demands_Grants_IT_Announcement">
                          Date: 8th September 2021- Demand for Grants of IT
                          Department -2021-22, Announce…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/IT_Minister_met_CM">
                          Date: 8th September 2021- The Hon'ble Minister of IT,
                          Thiru. T.Mano Thangaraj, …
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/IT_Minister_visits_STPI">
                          On 25th August 2021, the Hon’ble Minister for IT,
                          Thiru. T.Mano Thangaraj, Gov…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/IT_Minister_Interact_with_IT_Startups">
                          On 24th August 2021, the Hon’ble Minister for IT,
                          Thiru. T.Mano Thangaraj had …
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/IT_Minister_Interact_TNeGA_office">
                          On 24th August 2021, at the office of TNeGA, Dr.
                          Neeraj Mittal (IAS), Principal…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/TNeGA_Director_met_IT_Minister">
                          On 23rd August 2021, Thiru.K. Vijayendra Pandian IAS,
                          who joined as Director of…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/interact_with_australian_consulate">
                          The Team of Tamil Nadu Information Technology
                          Department lead by Thiru. Ajay Ya…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/advisorvisitcm">
                          The new advisor to TNeGA calling on Hon'ble Chief
                          Minister of Tamil Nadu on Aug…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/flaghoisting%272021">
                          Flag Hoisting Ceremony and Independence Day Message by
                          Hon'ble Chief Minister o…
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/ebudget2021">
                          e-Budget'2021
                        </a>
                      </li>
                      <li>
                        <a href="https://it.tn.gov.in/en/onlineinteraction">
                          Honourable Chief Minister on Tuesday (10.08.2021) took
                          part in online interacti…
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                </td>
              </tr>
              <tr>
                <td className="views-field views-field-field-event-file"> </td>
                <td className="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td className="views-field views-field-field-event-file"> </td>
                <td className="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td className="views-field views-field-field-event-file"> </td>
                <td className="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td className="views-field views-field-field-event-file"> </td>
                <td className="views-field views-field-field-eventlink"> </td>
              </tr>
            </tbody>
          </table>
        </marquee>
        <div id="CardWrap_1">
          {carddata.map((el) => (
            <RoundCard to={el.to} text={el.text} img={el.img} />
          ))}
        </div>
        <section id="panel_second" className="panel_second" style={{display:'flex',width:'100%',backgroundColor:'grey'}}>
          <div
            className="container"
            style={{}}
          >
            <div className="row">
              <div className="">
                <div className="region region-panel-second-1">
                  <div
                    id="block-contactinfo"
                    className="block block-block-content block-block-contente29440d8-09bd-4afe-8080-1f9cc71afa89"
                  >
                    <h2>Contact Info</h2>

                    <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                      <p className="text-align-left">
                        Information Technology Department, Government of
                        Tamilnadu, 2nd Floor,NKM Building, Secretariat,
                        Chennai-600009. Phone No: 044-2567 0783 e-mail :
                        secyit[dot]tn[at]nic[dot]in Fax No:25670505 Website:
                        https://it.tn.gov.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="region region-panel-second-2">
                  <div
                    id="block-aboutwebsite"
                    className="block block-block-content block-block-content7fed7f70-1fc1-43cf-8298-f816670c04d6"
                  >
                    <h2>About Website</h2>

                    <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                      <ul className="ul_remove">
                        <li>
                          <a
                            className="footermenu"
                            href="/sitemap"
                          >
                            Site Map
                          </a>
                        </li>
                        <li>
                          <a
                            className="footermenu"
                            href="https://it.tn.gov.in/blog"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="region region-panel-second-3">
                  <div
                    id="block-usefullinks"
                    className="block block-block-content block-block-content44ac3b91-d181-4acc-8f6f-8d89f711a1a2"
                  >
                    <h2>Useful links</h2>

                    <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                      <ul  className="ul_remove">
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="http://www.tn.gov.in/"
                            target="_blank"
                            title="State Portal"
                          >
                            State Portal
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="http://meity.gov.in/"
                            target="_blank"
                            title="GoI MeitY Portal"
                          >
                            GoI MeitY Portal
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="https://elcot.in/"
                            target="_blank"
                            title="ELCOT"
                          >
                            ELCOT
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="https://tnega.tn.gov.in/"
                            target="_blank"
                            title="TNeGA"
                          >
                            TNeGA
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="http://www.tactv.in/"
                            target="_blank"
                            title="TACTV"
                          >
                            TACTV
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="http://www.tamilvu.org/"
                            target="_blank"
                            title="TVA"
                          >
                            TVA
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="https://www.tanfinet.tn.gov.in/"
                            target="_blank"
                            title="TANFINET"
                          >
                            TANFINET
                          </a>
                        </li>
                        <li className="text-align-left">
                          <a
                            className="footermenu"
                            href="https://itnanban.tn.gov.in/"
                            target="_blank"
                            title="TANFINET"
                          >
                            IT Nanban
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="region region-panel-second-4">
                  <div
                    id="block-clustrmap"
                    className="block block-block-content block-block-content7df4f244-daf7-49dd-bdd9-bacc3d121345"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
