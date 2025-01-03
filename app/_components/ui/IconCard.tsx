import React from "react";

type IconCardProps = {
  icon: string;
  title: string;
  description: string;
};

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <img src={icon} alt={title} height={140} width={140} className=" mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default IconCard;
