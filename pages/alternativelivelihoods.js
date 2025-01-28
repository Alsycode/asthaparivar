import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../component/clientSlider";
import Blog2 from "../element/blog-2";
import Counter2 from "../element/counter2";
import About from "../element/pageaboutsus"
import Header from "../layout/header-3";
import Footer2 from "./../layout/footer-2";
import Testimonial2 from "../element/testimonial-2";
import OurFeatures from "../element/our-features"
import OurFeatures3 from "../element/our-features-3"
// import OurFeatures2 from "../element/our-features-2"
import AboutUs from "../element/aboutUs";
import AboutUs_3 from "../element/aboutUs-3"
import AllServices2 from "../element/cbos"
import AllServices from "../element/all-services"
import AllServices3 from "../element/all-services-3"
function Health() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Alternative Livelihoods</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Alternative Livelihoods
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        {/* <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                OUR STEPS
              </h6>
              <h2 className="title">How It’s Work</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Designing</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Launching</h4>
                    <p>
                      Suspendisse potenti. Pellentesque ornare mattis elit non
                      fermentum. Mauris rhoncus efficitu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- About us --> */}
 

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow m-5 fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
          <h2>Alternative Livelihoods</h2>
      <p>
        Our Alternative Livelihoods Program aims to create a self-sustaining method of 
        income generation for the CBOs and the key population (KP) sex workers within 
        their communities.
      </p>
      <p>
        The project has been running since the organisation’s inception and offers 
        alternative livelihood possibilities to sex workers and their children 
        through educational courses. 
      </p>

      <p>
        To date, we have facilitated a range of practical courses including; making and 
        selling chocolate, phenyl, agarbattis, chutneys and other goods; as well as 
        training in mehndhi, tailoring and beautician services.
      </p>

      <p>
        Additionally, vocational training is offered to CBO members on management and 
        income generation skills. So far, over 600 community members have been trained 
        in vocational skills, with many going on to start their own small businesses 
        to support themselves and their families.
      </p>

      <h3>Courses Offered Under the Alternative Livelihoods Program:</h3>

      <h4>Practical Courses:</h4>
      <ul>
        <li>Kolhapuri chappals</li>
        <li>Rakhi making</li>
        <li>Lantern making</li>
        <li>Chocolate making</li>
        <li>Phenyl</li>
        <li>Agarbattis</li>
        <li>Imitation jewelry</li>
      </ul>

      <h4>Vocational Courses:</h4>
      <ul>
        <li>Mehndhi</li>
        <li>Tailoring</li>
        <li>Beautician</li>
        <li>Management</li>
        <li>Income Generation</li>
      </ul>
			</div>
        </section>

       
      </div>
      <Footer2 />
    </>
  );
}

export default Health;
