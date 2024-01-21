import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

import { useEffect, useState } from "react";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)

export default function DynamicBarChart() {

    const [bars, setBars] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/hello');
            const result = await response.json();
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

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Number of cups",
                data: cups,
                backgroundColor: ["blue", "yellow"],
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