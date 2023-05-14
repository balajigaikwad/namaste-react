import React, { useState } from "react";
import CardComponent from "./CardComponent";
import data from "./data.json";
import SearchBar from "./SearchBar";

const title = "Creamy Cones";

export const HeadingComponent = () => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const CardContainer = (filteredRestaur) =>
filteredRestaur.filteredRestaur.map((restaurant) => (
    <CardComponent restaurant={restaurant} />
  ));

const BodyComponent = () => {
  const [filteredRestaurants, setFilteredRestaurant] = useState(data);
  return (
    <div className="card-container">
      <SearchBar setFilteredRestaurant={setFilteredRestaurant} />
      <CardContainer filteredRestaur={filteredRestaurants} />
    </div>
  );
};

export const AppLayout = () => (
  <div>
    <HeadingComponent />
    <BodyComponent />
  </div>
);
