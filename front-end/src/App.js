import './App.css';
import WaterTracker from './Pages/WaterTracker/WaterTracker';
import Login from './Pages/Login/Login';
import { useState } from 'react';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      {isVisible ? <WaterTracker /> : <Login /> }
      <br />
      {isVisible ? null : <button type="submit" className="btn btn-primary" onClick={() => setIsVisible(!isVisible)}>
          Submit
        </button> }
    </div>
  );
}

export default App;
