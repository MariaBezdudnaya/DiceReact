import Dice from "./components/Dice";
import {useState} from "react";

function App() {
  const [value, setDiceValue] = useState(0);
  const [showText, setShowText] = useState(false); 

  return (
    <div>
      <Dice 
        images={[
          "/images/dice.png",
          "/images/dice1.png",
          "/images/dice2.png",
          "/images/dice3.png",
          "/images/dice4.png",
          "/images/dice5.png",
          "/images/dice6.png",
        ]} 

        value={value}
        showtext={showText}

        onClick={() => {
          setDiceValue(Math.floor(Math.random(value) * 6) + 1);
          setShowText(false);
        }}

        onClickSet={() => {
          setDiceValue(value * 0); 
          setShowText(true);
        }}
      />    
    </div>
  );
}

export default App;
