import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../img/logo.png";
import { sidebarData } from "../../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='Sidebar'>
      <div className='logo'>
        <img src={Logo} alt=' ' />
        <span>
          {" "}
          Sh<span>o</span>p{" "}
        </span>
      </div>

      <div className='menu'>
        {/* We use a map function to loop through the data in array imported from the
      sidebar data file.this way there is no need to do the same thing over and
      over again. */}
        {sidebarData.map((item, index) => {
          return (
            // If the selected(0) is same as index make className "menuItem active" else make "manuItem"
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              {" "}
              <item.icon /> <span>{item.heading}</span>
            </div>
          );
        })}

        <div className='menuItem'>
          {" "}
          <UilSignOutAlt />{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
