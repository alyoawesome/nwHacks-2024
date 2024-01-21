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
            console.log(result);
            setBars(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    console.log(bars);

    const cups = [];
    for (let i = 0; i < Object.keys(bars).length; i++) {
        cups.push(bars[i]);
    }

    console.log(cups);

    // const numCups; //[0, 8, 0, 1, 2, 3, 5] // update this from db

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Number of cups",
                data: [1,2,3],
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