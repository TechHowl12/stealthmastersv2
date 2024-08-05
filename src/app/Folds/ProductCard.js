import React from 'react';
import Image from 'next/image';

const ProductCard = ({ image, title, price, description, setCaseColor, colors }) => {

  const handleColorChange = (colorKey) => {
    setCaseColor(colors[colorKey]);
  };

  return (
    <div className="rounded-3xl bg-[#E6DCC8] h-[12.3rem] sm:h-[21rem] lg:h-[25rem] p-0 border-[#807316] border">
      <div className="h-2/3 relative flex items-center justify-center">
        <Image className="sm:w-5/6 w-full absolute md:top-10 top-[20%] sm:top-[30%]" src={image} alt={title} priority />
      </div>
      <div className="bg-[#ffffffb3] rounded-b-3xl px-2 sm:px-3 lg:px-10 py-3 sm:py-6 mt-1 sm:mt-3 lg:mt-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xs sm:text-xl lg:text-2xl">{title}</h1>
          <h1 className="font-bold text-xs sm:text-xl text-[#807316]">{price}</h1>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <p className="sm:text-xs md:text-sm text-[7px] font-semibold">{description}</p>
          <div className="flex gap-2">
            {Object.entries(colors).map(([key, value]) => (
              <button key={key} onClick={() => handleColorChange(key)} style={{ backgroundColor: key }} className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm cursor-pointer"></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
