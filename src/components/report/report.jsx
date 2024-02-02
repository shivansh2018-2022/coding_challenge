// ReportPage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const ReportPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authorizationCode = useSelector((state) => state.auth.authorizationCode);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (isAuthenticated && authorizationCode) {
      // Fetch data using the Bearer token
      fetch('https://tl4zomomo1.execute-api.ap-southeast-2.amazonaws.com/dev1/case-study-chart', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authorizationCode}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Process data and set it to chartData state
          setChartData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [isAuthenticated, authorizationCode]);

  return (
    <div>
      
      <Paper elevation={3} style={{ padding: '16px', width: '100%', height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
};

export default ReportPage;
