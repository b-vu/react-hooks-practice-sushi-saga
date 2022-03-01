import React from "react";

function MoreButton({ onMoreButtonClick }) {
  const handleMoreSushiButtonClick = () => {
    onMoreButtonClick();
  }

  return <button onClick={() => handleMoreSushiButtonClick()}>More sushi!</button>;
}

export default MoreButton;
