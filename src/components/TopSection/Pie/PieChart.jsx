import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from "../../Common.module.css"

const data = [
  { name: 'Entertainment', value: 700 },
  { name: 'Food', value: 200 },
  { name: 'Travel', value: 100 },
  
];

const COLORS = ['#FF9304','#A000FF','#FDE006'];

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

export default class PieComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
        <div className={styles.PieChart}> <PieChart width="100%" height="100%">
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
      </PieChart></div>
       
        
      
    );
  }
}
