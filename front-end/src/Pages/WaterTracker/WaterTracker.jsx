import DynamicBarChart from "../../components/DynamicBarChart"
import "./WaterTracker.css"

export default function WaterTracker() {
    return (
        <div>
            
            <h1>WATER TRACKER</h1>

            <h2>Your week</h2>
            <h3>Goal: 8 cups of water a day</h3>
            <h3>Your streak: x days</h3>
            
            <DynamicBarChart />
        </div>
    )
}