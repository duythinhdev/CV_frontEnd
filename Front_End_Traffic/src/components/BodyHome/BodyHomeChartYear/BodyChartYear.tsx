import React from 'react';
import {Bar} from "react-chartjs-2";

const BodyChartYear = () => {
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
                        "District Tan Binh",
                        "District Thu Duc",
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
                                "#e8c3b9",
                                "#3e95cd",
                            ],
                            data: [2478, 5267, 734, 784, 433, 2000, 1000]
                        }
                    ]
                }}
                options={{
                    legend: {display: false},
                    title: {
                        display: true,
                        text: "Chart Determine Violation Year"
                    }
                }}
            />
        </>
    );
}

export default BodyChartYear;
