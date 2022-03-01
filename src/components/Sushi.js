import React from "react";

function Sushi({ sushi, handleMoneyAfterEatingSushi, money, onEatSushi }) {
  const { name, img_url, price, id, isEaten } = sushi;

  const handleEatenClick = () => {
    if(money >= price){
      fetch(`http://localhost:3001/sushis/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "isEaten": true
        })
      })
      .then(res => res.json())
      .then(data => {
        onEatSushi(data.id);
        handleMoneyAfterEatingSushi(data.price);
      });
    }
    else{
      return null;
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatenClick()}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
