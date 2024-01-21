import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
)

export default function DynamicBarChart() {

    const numCups = [0, 8, 0, 1, 2, 3, 5] // update this from db

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Number of cups",
                data: numCups,
                backgroundColor: "aqua",
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