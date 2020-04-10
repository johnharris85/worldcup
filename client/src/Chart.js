import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const Chart = ({data}) => {

    return (
        <BarChart
            width={1920}
            height={500}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Name" />
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="Searches" fill="#82ca9d" />
        </BarChart>
    );
}

export default Chart;
