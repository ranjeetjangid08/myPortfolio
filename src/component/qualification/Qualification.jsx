import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">College BCA</h3>
                <span className="qualification_subtitle">
                  Aishwary College Jodhpur
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021-2024
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">
                  w3schools and some other platforms
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021-2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">12th standard</h3>
                <span className="qualification_subtitle">
                  MBC Govt. Sen. Sec. School Barmer
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2020-2021
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">10th standard</h3>
                <span className="qualification_subtitle">
                  MTNA Sen. Sec. School Barmer
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Internship</h3>
                <span className="qualification_subtitle">
                  Lgeom Gandhinagar
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 6-Months
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">FullStack</h3>
                <span className="qualification_subtitle">
                  Fullstack Learning Project
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024-Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">Freelancer work</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022-Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Figma Designer</h3>
                <span className="qualification_subtitle">
                  Along with College
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022-2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
