import React from "react";
import "./maindash.css";
import Cards from "./cards/Cards.jsx";
import Table from "./table/Table.jsx";
import BasicTable from "./table/Table.jsx";

const Maindash = () => {
  return (
    <div className='MainDash'>
      <h1> Dashboard </h1>
      <Cards />

      <Table />
      <div></div>
      <div></div>
    </div>
  );
};

export default Maindash;
