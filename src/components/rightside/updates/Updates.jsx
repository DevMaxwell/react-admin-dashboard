import React from "react";
import { UpdateData } from "../../../data/data";
import "./updates.css";

const Updates = () => {
  return (
    <div className='Updates'>
      {UpdateData.map((update) => {
        return (
          <div className='update'>
            <img src={update.img} alt='' />
            <div className='noti'>
              <span>{update.name}</span>
              <span>{update.noti}</span>
            </div>
            <div className='time'>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
