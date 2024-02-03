// ReportPage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];


const data = [
  {
    name: 'january',
    revenue: 50000,
    profit: 20000,
  },
  {
    name: 'february',
   revenue: 55000,
    profit: 22000,
  },
  {
    name: 'march',
    revenue: 60000,
    profit: 25000,
  },
  {
    name: 'april',
    revenue: 65000,
    profit: 28000,
  },
  {
    name: 'may',
   revenue: 70000,
    profit: 30000,
  },
  {
    name: 'june',
    revenue: 75000,
    profit: 35000,
  },
  {
    name: 'july',
    revenue: 80000,
    profit: 40000,
  },
]; 


const ReportPage = () => {
  const authorizationCode = useSelector((state) => state.auth.authorizationCode);

  const [chartData, setChartData] = useState([data]);

  useEffect(() => {
    
      // Fetch data using the Bearer token
      const fetchReportData = ()=>{
      fetch('https://tl4zomomo1.execute-api.ap-southeast-2.amazonaws.com/dev1/case-study-data ', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authorizationCode}`,
        },
      })
        .then((response) => response.json())
        .then((apiData) => {
          // Transform data
          const transformedData = monthNames.map((month, index) => ({
            name: month,
            revenue: apiData[0].values[index],
            profit: apiData[1].values[index],
          }));
          // Set transformed data to chartData state
          setChartData(transformedData);
        })
        
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      }
      if(authorizationCode) {
        fetchReportData();
      }
    
  }, [authorizationCode]);
  
  return (
    <div>
      {chartData && chartData.length > 0 && (

     
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="profit" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
       )}
    </div>
  );
};

export default ReportPage;
