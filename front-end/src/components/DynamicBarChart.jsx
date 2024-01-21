import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
} from "chart.js"

import { Bar } from "react-chartjs-2"

import { useEffect, useState } from "react";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
)

export default function DynamicBarChart(props) {

    const [bars, setBars] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/hello');
            const result = response.json();
            setBars(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    const cups = [];
    for (const i of Object.keys(bars)) {
        cups.push(bars[i]);
    }

    const colours = [];

    for (const i of cups) {
        if (i < 8) {
            colours.push("aqua");
        } else {
            colours.push("yellow")
        }
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const index = days.indexOf(props.date);
    days[index] = "Today";

    const data = {
        labels: days,
        datasets: [
            {
                label: "Number of cups",
                data: cups,
                backgroundColor: colours,
                borderColor: "black",
                borderWidth: 1
            }
        ]
    }

    const options = {

    }

    return (
        <div>
            <Bar
            data = {data}
            options = {options}
            ></Bar>
        </div>
    )
}