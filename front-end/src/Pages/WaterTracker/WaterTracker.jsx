import DynamicBarChart from "../../components/DynamicBarChart"
import "./WaterTracker.css"
import AddButton from "../../components/AddButton"

export default function WaterTracker() {

  const date = Date().substring(0,3);
  
    return (
        <div>
            
            <h1>Water Tracker</h1>
            <br />
            <div>
              <h2 className="goal">Goal: 8 cups of water a day</h2>
              <h2>Your streak: (x) days 🔥</h2>
              <br />
              <h2>Your week in a glass</h2>
            </div>
            
            
            <DynamicBarChart date={date}/>
            <br />
            <AddButton date={date}/>
        </div>
    )
}