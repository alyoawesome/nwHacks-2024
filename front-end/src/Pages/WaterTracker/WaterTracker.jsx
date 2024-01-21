import DynamicBarChart from "../../components/DynamicBarChart"
import "./WaterTracker.css"
import AddButton from "../../components/AddButton"
import { useEffect, useState } from "react";


function getStreak(arr) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 8) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}


export default function WaterTracker() {

  const date = Date().substring(0,3);

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

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const cups = [];
    for (const i of days) {
        cups.push(bars[i]);
    }
  
    return (
        <div>
            
            <h1>Water Tracker</h1>
            <br />
            <div>
              <h2 className="goal">Goal: 8 cups of water a day</h2>
              <h2>Your streak: {getStreak(cups)} days 🔥</h2>
              <br />
              <h2>Your week in a glass</h2>
            </div>
            
            
            <DynamicBarChart date={date}/>
            <br />
            <AddButton date={date}/>
        </div>
    )
}