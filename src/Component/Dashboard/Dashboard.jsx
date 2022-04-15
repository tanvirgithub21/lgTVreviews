import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const Dashboard = () => {

  const [chartData, setChartData] = useState([]);
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json")
    .then(response => response.json())
    .then(data => setChartData(data))
  },[])

    return (
      <div className='mainDashboard'>
        <div className="sectionHeader">
          <h1>Chart Analysis</h1>
        </div>
        <div className='AllChartBox'>

        <div className="responsiveContainer">
          <h2 className="ChartHeader" >LineChart</h2>
          <div className="chartBox">
            <LineChart width={320} height={280} data={chartData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="month" />
              <YAxis  />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#ff0d66" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </div>
        

        <div className="responsiveContainer">{/* BarChart */}
          <h2 className="ChartHeader" >BarChart</h2>
          <div className="chartBox">
            <BarChart width={320} height={280} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#ff0d66" />
              <Bar dataKey="sell" fill="#82ca9d" />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </div>
        </div>


        
        <div className="responsiveContainer">{/* PieChart */}
            <h2 className="ChartHeader" >PieChart</h2>
            <div className="chartBox">
              <PieChart width={320} height={320}>
                <Tooltip />
                <Pie data={chartData} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={chartData} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#66d471" />
                <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#ff0d66" label />
              </PieChart>
            </div>
        </div>


       
        <div className="responsiveContainer"> {/* RadarChart */}
            <h2 className="ChartHeader" >RadarChart</h2>
            <div className="chartBox">
              <RadarChart outerRadius={90} width={290} height={250} data={chartData}>
                <PolarGrid />
                <Legend />
                <Tooltip />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Investment" dataKey="investment" stroke="#ff0d66" fill="#ff0d66" fillOpacity={0.6} />
                <Radar name="Sell" dataKey="sell" stroke="#66d471" fill="#66d471" fillOpacity={0.6} />
                <Radar name="Revenue" dataKey="revenue" stroke="#6f61c9" fill="#6f61c9" fillOpacity={0.6} />
              </RadarChart>
            </div>

        </div>



      </div>
      </div>
    );
};

export default Dashboard;