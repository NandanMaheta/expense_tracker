import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import styles from "../../Common.module.css";

const COLORS = ['#FF9304', '#A000FF', '#FDE006'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const getDynamicData = () => {
  let data = localStorage.getItem("expenses");
  let foodCost = 0;
  let travelCost = 0;
  let entCost = 0;

  if (data) {
    data = JSON.parse(data);
    foodCost = data.filter((item) => item.category === "food")
                 .map((item) => Number(item.price))
                 .reduce((total, n) => total + n, 0);

    travelCost = data.filter((item) => item.category === "travel")
                   .map((item) => Number(item.price))
                   .reduce((total, n) => total + n, 0);

    entCost = data.filter((item) => item.category === "entertainment")
                .map((item) => Number(item.price))
                .reduce((total, n) => total + n, 0);
  }

  if (foodCost &&!travelCost &&!entCost) {
    return [
      { name: 'Entertainment', value: 0 },
      { name: 'Food', value: foodCost },
      { name: 'Travel', value: 0 },
    ];
  } else if (!foodCost && travelCost &&!entCost) {
    return [
      { name: 'Entertainment', value: 0 },
      { name: 'Food', value: 0 },
      { name: 'Travel', value: travelCost },
    ];
  } else if (!foodCost &&!travelCost && entCost) {
    return [
      { name: 'Entertainment', value: entCost },
      { name: 'Food', value: 0 },
      { name: 'Travel', value: 0 },
    ];
  } else {
    return [
      { name: 'Entertainment', value: entCost || 33.33 },
      { name: 'Food', value: foodCost || 33.33 },
      { name: 'Travel', value: travelCost || 33.33},
    ];
  }
};

const PieComponent = () => {
  const [data, setData] = useState(getDynamicData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(getDynamicData());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <PieChart width={190} height={190}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieComponent;
