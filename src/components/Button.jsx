
import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "0.25rem",
        backgroundColor: "#4f46e5",
        color: "white",
        cursor: "pointer",
      }}
    >
      {children || "Button"}
    </button>
  );
}
