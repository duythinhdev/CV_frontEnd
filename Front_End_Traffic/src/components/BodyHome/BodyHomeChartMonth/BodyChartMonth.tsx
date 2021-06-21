import React from 'react';
import {Bar} from "react-chartjs-2";

const BodyChartMonth = () => {
    return (
        <>
            <Bar
                data={{
                    labels: [
                        "District 1",
                        "District 2",
                        "District 3",
                        "District 4",
                        "District 5",
                    ],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850"
                            ],
                            data: [2478, 5267, 734, 784, 433]
                        }
                    ]
                }}
                options={{
                    legend: {display: false},
                    title: {
                        display: true,
                        text: "Chart Determine Violation Month"
                    }
                }}
            />
        </>
    );
}

export default BodyChartMonth;
