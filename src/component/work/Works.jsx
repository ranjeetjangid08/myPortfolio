import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItem from "./WorksItem";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((projects) => {
        return projects.category.toLocaleLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLocaleLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active_work" : ""} work_item`}
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorksItem item={item} key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Works;
