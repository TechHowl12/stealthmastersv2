"use client";
import React, { useState } from 'react';
import CardImages from '../constants/CardImages';
import ProductCard from './ProductCard';

const Cards = () => {
  const [small, setSmall] = useState(CardImages.smallBrown);
  const [medium, setMedium] = useState(CardImages.mediumBlack);
  const [large, setLarge] = useState(CardImages.largeBrown);

  return (
    <>
      <h1 className="text-[3vw] leading-tight font-bold text-center my-6 sm:my-10">
        Explore Our Range Of Products.
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-7 mx-2 sm:mx-10 xl:w-9/12 xl:mx-auto">
        <ProductCard
          image={small}
          title="Bravo Small"
          price="$199"
          description="Fits One Handgun"
          setCaseColor={setSmall}
          colors={{ black: CardImages.smallBlack, brown: CardImages.smallBrown, white: CardImages.smallWhite }}
        />
        <ProductCard
          image={medium}
          title="Bravo Medium"
          price="$279"
          description="Fits Two Handguns"
          setCaseColor={setMedium}
          colors={{ black: CardImages.mediumBlack, brown: CardImages.mediumBrown, white: CardImages.mediumWhite }}
        />
        <ProductCard
          image={large}
          title="Bravo Large"
          price="$379"
          description="Fits Two Handguns & One Assault Rifle"
          setCaseColor={setLarge}
          colors={{ black: CardImages.largeBlack, brown: CardImages.largeBrown, white: CardImages.largeWhite }}
        />
        <ProductCard
          image={CardImages.yankeeLarge}
          title="Yankee Large"
          price="$349"
          description="Fits One Handgun & One Assault Rifle"
          setCaseColor={() => {}}
          colors={{white: CardImages.yankeeLarge}}
        />
      </div>
    </>
  );
};

export default Cards;


