// ReportPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ReportPage = () => {
  const authorizationCode = useSelector(
    (state) => state.auth.authorizationCode
  );

  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        if (authorizationCode) {
          const response = await fetch(
            "https://tl4zomomo1.execute-api.ap-southeast-2.amazonaws.com/dev1/case-study-data",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${authorizationCode}`,
              },
            }
          );

          if (response.ok) {
            const apiData = await response.json();

            const transformedData = monthNames.map((month, index) => ({
              name: month,
              revenue: apiData.data[0].values[index],
              profit: apiData.data[1].values[index],
            }));
            setChartData(transformedData);
          } else {
            console.error("Error fetching data:", response.status);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchReportData();
  }, [authorizationCode]);

  return (
    <div
      style={{
        paddingTop: "40px",
        paddingLeft: "50px",
      }}
    >
      {chartData && chartData.length > 0 && (
        <AreaChart
          width={1200}
          height={500}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="profit"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      )}
    </div>
  );
};

export default ReportPage;
