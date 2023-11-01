import { useState } from "react";

const Item = ({ item, removeItem, editeItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.complited}
        onChange={() => editeItem(item.id)}
      />
      <p
        style={
          ({ textTransform: "Capitalize" },
          { textDecoration: item.complited && "line-through" })
        }
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        delete item
      </button>
    </div>
  );
};
export default Item;
