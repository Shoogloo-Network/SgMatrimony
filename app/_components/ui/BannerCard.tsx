import React from "react";

const BannerCard: React.FC = () => {
  return (
    <div className="bg-[#201530] rounded-[20px] p-[20px]   flex justify-between w-3/4 mx-auto">
      <div className="flex  flex-col gap-8">
        <h1 className="text-3xl font-bold text-[#d2b17c] leading-40">
          Exclusive & Personalised Matchmaking by Shaadi.com
        </h1>
        <div className="flex text-white gap-2">
          <p>Top Rated Consultants</p>
          <p>|</p>
          <p>Top Rated Consultants</p>
          <p>|</p>
          <p>Top Rated Consultants </p>
        </div>
      </div>
      <div>
        <img src="/images/vip_logo.webp" alt="vip" />
        <button className="bg-[#d2b17c] font-lato normal-case mt-[10%] text-[18px] font-bold min-w-[64px] box-border transition-all duration-[250ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]  p-4 rounded-lg w-44">
          Get Invited
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
