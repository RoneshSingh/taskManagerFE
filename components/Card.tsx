import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {title}, {content}
    </div>
  );
};

export default Card;
