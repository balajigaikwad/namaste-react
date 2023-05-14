import { useState } from "react";
import data from "./data.json"

const searchRestaurnat = (searchText) => {
    return data.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
}

const SearchBar = ({setFilteredRestaurant}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredRestaurants = searchRestaurnat(searchText);
          setFilteredRestaurant(filteredRestaurants);
        }}
      >
        <input
          id="searchRestaurant"
          placeholder="Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
