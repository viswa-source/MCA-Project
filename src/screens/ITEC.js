import React from "react";
import NavBar from "../components/NavBar";
import "./ITEC.css";
export default function ITEC() {
  return (
    <>
      <NavBar title={"Electronics and Information Technology"} />
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 "
                src={require("../images/ITEC1.jpeg")}
                alt="First slide"
              />
              <h1 id="carusal_h1">
                <a id="a_link" href="https://it.tn.gov.in/en/ebudget%272021">
                  Information Technology Department-Tamilnadu
                </a>
              </h1>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
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
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={require("../images/ITEC3.jpg")}
                alt="Third slide"
              />
              <h1 id="carusal_h1">
                <a id="a_link" href="https://it.tn.gov.in/en/CII_CONNECT_1">
                  The Inaugural Session of CII Connect 2021, on November 26,
                  2021.
                </a>
              </h1>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
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
                <td class="views-field views-field-field-eventlink">
                  <div class="item-list">
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
                <td class="views-field views-field-field-event-file"> </td>
                <td class="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td class="views-field views-field-field-event-file"> </td>
                <td class="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td class="views-field views-field-field-event-file"> </td>
                <td class="views-field views-field-field-eventlink"> </td>
              </tr>
              <tr>
                <td class="views-field views-field-field-event-file"> </td>
                <td class="views-field views-field-field-eventlink"> </td>
              </tr>
            </tbody>
          </table>
        </marquee>
      </div>
    </>
  );
}
