import React from 'react';
import { Bar } from "react-chartjs-2";
const BodyChartDay = () =>{
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
                        "District 6",
                        "District 7",
                        "District 8",
                        "District 9",
                        "District 10",
                        "District 11",
                    ],
                    datasets: [
                        {
                            label: "Population (Violation)",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850",
                                "#c45851",
                                "#c45851",
                                "#c45851",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",

                            ],
                            data: [2478, 5267, 734, 784, 433,888,990,1000,1100,1200,6000]
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Chart Determine Violation Day"
                    }
                }}
            />
        </>
    );
}

export default BodyChartDay;
