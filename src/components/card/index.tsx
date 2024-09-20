import React, { ReactNode } from "react";
import "./styles.scss";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
