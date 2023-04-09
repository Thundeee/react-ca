import React from "react";

const DiscountBadge = ({ item }) => {
  return item.discount !== false ? (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "5px",
        backgroundColor: "#F44336",
        color: "white",
        borderRadius: "5px",
      }}
    >
      {item.discount} OFF
    </div>
  ) : null;
};

export { DiscountBadge };
