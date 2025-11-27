import React from "react";
import "./Button.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "google" | "facebook" | "github" | "email";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ variant = "primary", children, onClick, className = "" }: ButtonProps) {
  return (
    <button className={`btn ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
