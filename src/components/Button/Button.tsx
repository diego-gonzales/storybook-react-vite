import React from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * What type should the button be?
   */
  variant?: "primary" | "secondary";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({ variant, label, ...props }: ButtonProps) => {
  const typeClass = variant ? `btn-${variant}` : "";

  return (
    <button type="button" className={`btn ${typeClass}`} {...props}>
      {label}
    </button>
  );
};
