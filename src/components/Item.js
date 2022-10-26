import React from "react";
import "./Item.scss";

function Item({ imgURL, title, price, type }) {
  return (
    <li className={`item ${type}`}>
      <img alt="item" src={imgURL} />
      <div className="content">
        <div>
          <p>{title}</p>
          <p className="price">{price}</p>
        </div>
        <button className="button" />
      </div>
    </li>
  );
}

export default Item;
