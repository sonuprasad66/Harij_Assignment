import React from "react";
import { BestShop } from "../Components/BestShop";
import { Footer } from "../Components/Footer";
import { HomeSearch } from "../Components/HomeSearch";
import { PopularShop } from "../Components/PopularShop";
import { SpaceSalon } from "../Components/SpaceSalon";
import { Trending } from "../Components/Trending";

export const Home = () => {
  return (
    <>
      <HomeSearch />
      <Trending />
      <PopularShop />
      <SpaceSalon />
      <BestShop />
      <Footer />
    </>
  );
};
