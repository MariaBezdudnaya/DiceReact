import "./Dice.css";

export default function Dice({ images, showtext, value, onClick, onClickSet }) {
  
  const newValue = images[value];
  const showText = showtext;

  return (
    <h3 className="Dice__container">
      <p className="Title">MyApp</p>
      <div className="Dice__images">
        <img
          className="Dice__pic"
          src={newValue} 
          alt={"DicePic"}
        />
        <div className="Dice__text">
          {showText && <span>Start to Roll!</span>}
        </div>
      </div>

      <div className="Dice__btnContainer">
        <button onClick={onClick}>Roll Dice!</button>
        <button onClick={onClickSet}>Set</button>
      </div>

    </h3>
  );
}
