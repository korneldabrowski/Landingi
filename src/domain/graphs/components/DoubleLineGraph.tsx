import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function DoubleLineGraph({
  data,
  tick: CustomTick,
  xDataKey,
  yDataKey,
}: {
  data: any;
  tick: JSX.Element;
  xDataKey: string;
  yDataKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={1200}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 90,
        }}
      >
        <Legend verticalAlign="top" height={36} />

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis interval={0} height={60} dataKey="name" tick={CustomTick} />

        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={xDataKey}
          stroke="#2881d8"
          fill="#8824d8"
        />
        <Line type="monotone" dataKey={yDataKey} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default DoubleLineGraph;
