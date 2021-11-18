import React from "react";
import image from "../assets/iphone-13.jpeg";

const Home = () => {
  return (
    <div>
      <div className="add-to-card">
        <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG6.png" />
      </div>
      <h1>Home Components</h1>
      <div className="card-wrapper">
        <div className="img-wrapper item">
          <img src={image} />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
