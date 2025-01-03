import React from "react";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <img src={icon} alt={title} width="100%" className=" mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
