import React from "react";

const WorksItem = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="img" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a href={item.link} className="work_button">
        Github <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;
