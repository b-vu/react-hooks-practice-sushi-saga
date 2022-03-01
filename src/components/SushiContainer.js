import {React, useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ handleMoneyAfterEatingSushi, money }) {
  const [sushis, setSushi] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => {
      if(data.length - sushiIndex < 4){
        setSushiIndex(0);
      }
      setSushi(data.slice(sushiIndex, sushiIndex + 4));
    })
  }, [sushiIndex]);

  const handleMoreSushi = () => {
    setSushiIndex(sushiIndex + 4);
  }

  const handleEatenSushi = sushiId => {
    const newSushis = sushis.map(sushi => {
      if(sushi.id === sushiId){
        const newSushi = {
          ...sushi,
          "isEaten": !sushi.isEaten
        }
        return newSushi;
      }
      else{
        return sushi;
      }
    });
    setSushi(newSushis);
  }

  return (
    <div className="belt">
      {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} handleMoneyAfterEatingSushi={handleMoneyAfterEatingSushi} money={money} onEatSushi={handleEatenSushi}></Sushi>)}
      <MoreButton onMoreButtonClick={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
