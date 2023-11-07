import { motion, LayoutGroup, useScroll } from "framer-motion";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
  // return componenet for card
  const [expanded, setExpanded] = useState(false);
  // using conditonal rendering to return an expanded card when an on click changes the state to true otherwise CompactCard
  return (
    // layoutGroup rather than AnimatedSharedLayout
    <LayoutGroup>
      {/* passing props to compact card for bar values  */}{" "}
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <div
      className='CompactCard'
      style={{
        background: param.color.backGround,
        // boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      {" "}
      <div className='radialBar'>
        {/* using CircularProgressbar for the progrerss bars  and passing the value recieved from props*/}
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className='detail'>
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enable: true,
        enableOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
        ],
      },
    },
  };

  return (
    // using morion from framer-motion
    <motion.div
      className='ExpandedCard'
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId='expandableCard'
    >
      <div>
        <UilTimes onClick={setExpanded} />
      </div>

      <span>{param.title}</span>
      <div className='chartContainer'>
        <Chart series={param.series} type='area' options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
