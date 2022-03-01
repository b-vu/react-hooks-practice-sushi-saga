import {React, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [money, setMoney] = useState(100);

  const handleMoneyAfterEatingSushi = price => {
    setMoney(money => money - price);
  }

  const handleAddingMoney = amountToAdd => {
    setMoney(money => money += amountToAdd);
  }

  return (
    <div className="app">
      <SushiContainer handleMoneyAfterEatingSushi={handleMoneyAfterEatingSushi} money={money}/>
      <Table money={money} handleAddingMoney={handleAddingMoney}/>
    </div>
  );
}

export default App;
