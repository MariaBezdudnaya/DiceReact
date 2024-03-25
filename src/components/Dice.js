import "./Dice.css";

export default function Dice({ images, showtext, value, onClick, onClickSet, active, activeBtn }) {
  
  const newValue = images[value];
  const showText = showtext;

  return (
    <div className="Dice__container">
      <p className="Title">MyApp</p>
      <div className="Dice__images">
        <img
          className={active ? 'Active' : 'Dice__pic'}
          src={newValue} 
          alt={"DicePic"}
        />
        <div className="Dice__text">
          {showText && <span>Start to Roll!</span>}
        </div>
      </div>

      <div className="Dice__btnContainer">
        <button className={activeBtn ? 'button' : 'buttonDisabled'} onClick={onClick} disabled={!activeBtn}>Roll Dice!</button>
        <button onClick={onClickSet}>Set</button>
      </div>

    </div>
  );
}
