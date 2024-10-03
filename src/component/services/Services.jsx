import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Product Designer</h3>
              <p className="services_model-description">
                Service with more than 1 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_model-services">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page development.</p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              FullStack <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">FullStack Developer</h3>
              <p className="services_model-description">
                Service with more than 1 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_model-services">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page development.</p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Database <br /> Managment
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Database Mangment</h3>
              <p className="services_model-description">
                Service with more than 1 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services_model-services">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page development.</p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
