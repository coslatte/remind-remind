import React from "react";

interface ButtonProps {
  label: string;
  style?: string;
  toHandle: () => void;
}

const defaultStyle =
  "borderlands flat-shadow btn-rounded-rose font-baloo w-full";
const Button: React.FC<ButtonProps> = ({ label, style, toHandle }) => {
  const finalClassName = style ?? defaultStyle;
  return (
    <div className="w-full">
      <button className={finalClassName} onClick={() => toHandle()}>
        {label}
      </button>
    </div>
  );
};

export default Button;
