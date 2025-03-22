import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
