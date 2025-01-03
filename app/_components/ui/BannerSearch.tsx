import React from "react";

const BannerSearch: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px]"
      style={{
        backgroundImage:
          "url(/images/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-10">
        <div className="text-center text-black w-4/5 ">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Find Your Perfect Match
          </h1>
          <form className="bg-black bg-opacity-50 p-6 rounded-lg shadow-md w-full">
            <div className="flex gap-4  items-center">
              <select className="p-2 rounded border border-gray-300 w-full">
                <option value="">Looking for</option>
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
              </select>
              <select className="p-2 rounded border border-gray-300 w-full">
                <option value="">Age</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
              </select>
              <select className="p-2 rounded border border-gray-300 w-full">
                <option value="">Location</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
              </select>
              <select className="p-2 rounded border border-gray-300 w-full">
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
              </select>
              <button
                type="submit"
                className=" w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
