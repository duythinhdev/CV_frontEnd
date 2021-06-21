import React from 'react';
import {Bar} from "react-chartjs-2";

const BodyChartWeek = () => {
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
                        "District Tan Phu",
                        "District Binh Tan",
                    ],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850",
                                "#3cba9f",
                                "#3e95cd",

                            ],
                            data: [2478, 5267, 734, 784, 433, 5000, 700]
                        }
                    ]
                }}
                options={{
                    legend: {display: false},
                    title: {
                        display: true,
                        text: "Chart Determine Violation Week"
                    }
                }}
            />
        </>
    );
}

export default BodyChartWeek;
