import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import AnimatedPieSVG from "./AnimatedPieSVG";


function PieChart() {
  // const generateData = (value, length = 5) =>
  //   d3.range(length).map((item, index) => ({
  //     date: index,
  //     value: value === null || value === undefined ? Math.random() * 100 : value
  //   }));

  // const [data, setData] = useState([]);
  // const changeData = () => {
  //   setData(generateData());
  // };

  //useEffect(
    // () => {
    //   setData(generateData());
    // },
    // [!data]

  //  );
  
  // const data = [
  //   {
  //     index: 0,
  //     value: 45
  //   }, 
  //   {
  //     index: 1,
  //     value: 50
  //   }, 
  //   {
  //     index: 2,
  //     value: 30
  //   }, 
  // ]

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8087//totalOrderHistory/pieChart")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setData(result);
            },
            (error) => {
                setIsLoaded(false);
                setError(error);
            }
        )
  }, [])



  return (
    <div className="pieChart">
        <AnimatedPieSVG
          data={data}
          width={200}
          height={200}
          innerRadius={40}
          outerRadius={100}
        />
    </div>
  );
}

export default PieChart;