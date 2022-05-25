import "./Portfolio.css";
import $ from "jquery";

export default function Portfolio() {
  return (
    <div>
      {/* Hello world */}
      <nav class=" navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid ">
          <a class="navbar-brand" href="#">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav navbar-right">
              <li class="hidden active">
                <a href="#page-top"></a>
              </li>
              <li className="">
                <a class="page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="#about">
                  About
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Nivetha Jegaraja</div>
            <a href="#services" className="page-scroll btn btn-xl">
              Continue 
            </a>
          </div>
        </div>
      </header>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">ACHIEVEMENTS</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-between">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" />
                <i className="glyphicon glyphicon-heart" />
              </span>
              <h4 className="service-heading">Dinamalar</h4>
              <p className="text-muted">
                Have done Special interviews with Health Secretary, Social
                Activists, and have done Health and Fashion tips, Fashion
                Celebrity Fashion Designer Interviews for Dinamalar Newspaper.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" />
                <i className="glyphicon glyphicon-tint" />
              </span>
              <h4 className="service-heading">Vikatan</h4>
              <p className="text-muted">
                Have done Breaking videos for 'Vikatan TV' Youtube Channel.{" "}
                <br />
                Have done Wrapper stories for Ananda Vikatan and Junior Vikatan.
                <br />
                Have done lot of Wrapper stories and Supplement Books for Doctor
                Vikatan Magazine <br /> Have done many long form articles for
                vikatan.com
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" />
                <i className="glyphicon glyphicon-tint" />
              </span>
              <h4 className="service-heading">Others</h4>
              <p className="text-muted">
                Have done Videos for PT digital YouTube channel (Anchoring,
                Script and Production work)
                <br /> Done weekly series on Children health at PT website,
                named க ொர ொனொ ொல மொணவர் நலன் for consecutive 24 weeks.
                <br />
                Have done direct and Online Interviews with doctors in Galatta
                Tamil Youtube Channel
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Portfolio</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href=" https://youtu.be/0CwA7DTBx-s"
                className="portfolio-link"
                // data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  src="https://tamil.oneindia.com/img/2022/03/tnpsc-exam-instructions-released-check-important-details1-1648558671.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Youtube</h4>
                <p className="text-muted">Allied Work</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href=" https://www.puthiyathalaimurai.com/newsview/131860/BJP-Annamalai-sats-If-TamilnaduCM-wants-to-benefit-the-people-he-has-to-join-hands-with-BJP"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  src="https://gumlet.assettype.com/freepressjournal/2022-02/b73d141f-dcdd-47a3-a273-57d141c7402f/annamalai_pti_1006408_1625758944.jpg?format=webp&w=768&dpr=1.0"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Article</h4>
                <p className="text-muted">About BJP Annamalai</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="https://www.puthiyathalaimurai.com/newsview/132304/Perarivalan-was-released-on-bailfor-the-first-time-after-30-years-in-prison"
                className="portfolio-link"
                data-toggle="modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  src="https://www.thehindu.com/news/national/vfmjbl/article65443620.ece/alternates/FREE_1200/Perarivalan_art.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Article</h4>
                <p className="text-muted">Perarivalan Release</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">About Me</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="img-circle img-responsive"
                      src="img/about/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>May 2021-now</h4>
                      <h4 className="subheading">
                        {" "}
                        Puthiya Thalaimurai News Website{" "}
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Content Writer</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="img-circle img-responsive"
                      src="img/about/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2020 - April 2021</h4>
                      <h4 className="subheading"> Dinamalar Newspaper </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Special Reporter</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="img-circle img-responsive"
                      src="img/about/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2020 - November 2020</h4>
                      <h4 className="subheading">Galatta Tamil </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Content writer, Video Script writer and VJ for Health
                        related Videos
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="img-circle img-responsive"
                      src="img/about/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4> August 2017 - June 2020</h4>
                      <h4 className="subheading">Vikatan Groups</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">As Reporter</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="img-circle img-responsive"
                      src="img/about/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4> July 2016 to July 2017</h4>
                      <h4 className="subheading">Vikatan </h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Intership</p>
                    </div>
                  </div>
                </li>
                {/* 
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Contact Me</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone *"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Your Message *"
                        id="message"
                        required
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button type="submit" className="btn btn-xl">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Name</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive"
                    src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                    alt=""
                  />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>
                    <strong>
                      Want these icons in this portfolio item sample?
                    </strong>
                    You can download 60 of them for free, courtesy of{" "}
                    <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">
                      RoundIcons.com
                    </a>
                    , or you can purchase the 1500 icon set{" "}
                    <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">
                      here
                    </a>
                    .
                  </p>
                  <ul className="list-inline">
                    <li>Date: July 2014</li>
                    <li>Client: Round Icons</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Heading</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive img-centered"
                    src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0"
                    alt=""
                  />
                  <p>
                    <a href="https://designmodo.com/startup/?u=787">
                      Startup Framework
                    </a>{" "}
                    is a website builder for professionals. Startup Framework
                    contains components and complex blocks (PSD+HTML Bootstrap
                    themes and templates) which can easily be integrated into
                    almost any design. All of these components are made in the
                    same style, and can easily be integrated into projects,
                    allowing you to create hundreds of solutions for your future
                    projects.
                  </p>
                  <p>
                    You can preview Startup Framework{" "}
                    <a href="https://designmodo.com/startup/?u=787">here</a>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Name</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive img-centered"
                    src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6"
                    alt=""
                  />
                  <p>
                    Treehouse is a free PSD web template built by{" "}
                    <a href="https://www.behance.net/MathavanJaya">
                      Mathavan Jaya
                    </a>
                    . This is bright and spacious design perfect for people or
                    startup companies looking to showcase their apps or other
                    projects.
                  </p>
                  <p>
                    You can download the PSD template in this portfolio sample
                    item at{" "}
                    <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">
                      FreebiesXpress.com
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Name</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive img-centered"
                    src="https://unsplash.imgix.net/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f0a1db79752dbb04ec6d2aab7d17c7b0"
                    alt=""
                  />
                  <p>
                    Start Bootstrap's Agency theme is based on Golden, a free
                    PSD website template built by{" "}
                    <a href="https://www.behance.net/MathavanJaya">
                      Mathavan Jaya
                    </a>
                    . Golden is a modern and clean one page web template that
                    was made exclusively for Best PSD Freebies. This template
                    has a great portfolio, timeline, and meet your team sections
                    that can be easily modified to fit your needs.
                  </p>
                  <p>
                    You can download the PSD template in this portfolio sample
                    item at{" "}
                    <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">
                      FreebiesXpress.com
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Name</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive img-centered"
                    src="https://unsplash.imgix.net/46/Ov6ZY1zLTWmhPC0wFysP_IMG_2896_edt.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6518e4df89659818f6c0392175a9c5e6"
                    alt=""
                  />
                  <p>
                    Escape is a free PSD web template built by{" "}
                    <a href="https://www.behance.net/MathavanJaya">
                      Mathavan Jaya
                    </a>
                    . Escape is a one page web template that was designed with
                    agencies in mind. This template is ideal for those looking
                    for a simple one page solution to describe your business and
                    offer your services.
                  </p>
                  <p>
                    You can download the PSD template in this portfolio sample
                    item at{" "}
                    <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">
                      FreebiesXpress.com
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Project Name</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-responsive img-centered"
                    src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502"
                    alt=""
                  />
                  <p>
                    Dreams is a free PSD web template built by{" "}
                    <a href="https://www.behance.net/MathavanJaya">
                      Mathavan Jaya
                    </a>
                    . Dreams is a modern one page web template designed for
                    almost any purpose. It’s a beautiful template that’s
                    designed with the Bootstrap framework in mind.
                  </p>
                  <p>
                    You can download the PSD template in this portfolio sample
                    item at{" "}
                    <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">
                      FreebiesXpress.com
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" /> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span
        style={{
          height: "20px",
          width: "40px",
          minHeight: "20px",
          minWidth: "40px",
          position: "absolute",
          opacity: "0.85",
          zIndex: 8675309,
          display: "none",
          cursor: "pointer",
          backgroundImage: "url(data:image/png",
        }}
      />{" "}
    </div>
  );
}
