import React, {useState, useEffect} from 'react'
import {Line} from "react-chartjs-2"

function ChartComponent() {

    const [chartData, setChartData] = useState({});

    const chart = () => {
      setChartData({
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
          {
            label: "Level of Temperature",
            data: [32, 53, 32, 54, 69],
            backgroundColor: [`rgb(75, 192, 192, 0.6)`],
            borderWidth: 4,
          },
        ],
      });
    };
    useEffect(() => {
      chart();
    });

    return (
      <div className="App">
        <h1>Temperature *F</h1>
        <div>
          <div>{chartData}</div>
        </div>
      </div>
    );
}

export default ChartComponent