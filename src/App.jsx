import { useState } from "react";
import "./App.css";

function App() {

  const [yesSize, setYesSize] = useState(1);
  const [notText, setNoText] = useState("No");
  const [noClicks, setNoClicks] = useState(0);
  const [tulips, setTulips] = useState([]);

  const handleNoClick = () => {
    setYesSize(yesSize + 0.2);
    setNoClicks(noClicks + 1);
    if (noClicks === 0) setNoText("Are you sure?");
    else if (noClicks === 1) setNoText("Think agin :(");
    else if (noClicks === 2) setNoText("Last chance!");
    else if (noClicks >= 3) setNoText("Please :(");
  };
 const handleYesClick = () => {
  const newTulips = [...tulips, "🌷"];
  for (let i = 0; i < 5; i++) {
    newTulips.push("🌷");
  }
  setTulips(newTulips);
  alert("Yay! Thank you for agreeing!");
 };

 return(
  <div className="container">
    <h1>Will you be my Valentine?</h1>
  
  <div className="buttons">
    <button
    className="yes"
    style={{ transform: `scale(${yesSize})` }}
    onClick={handleYesClick}
    >
    Yes
    </button>
    <button className="no" onClick={handleNoClick}>
    {notText}
    </button> 
  </div>

  {/* Tulips gift */}
  {tulips.map((tulip, index) => (
    <div
      key={index}
      className="tulip"
      style={{
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 80}%`,
      }}
    >
      {tulip}
    </div>
  ))}
  </div>
 );
}

export default App;