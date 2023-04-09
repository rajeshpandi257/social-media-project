import React from "react";
import { categoryList, ratingList } from "../../Content";
import CheckboxProton from "../../common/CheckboxProton";
import FilterListToggle from "../../common/FilterListToggle";

import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  selectedCategory,
  selectCategory,

  selectedPrice,
  changePrice,

  locations,
  changeChecked,
}) => (
  <div>
    <div className="input-group">
      <p className="label">Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>

    <div className="input-group">
      <p className="label">Location</p>
      {locations.map((location) => (
        <CheckboxProton
          key={location.id}
          location={location}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className="input-group">
      <p className="label-range">Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    {/* <div className="input-group">
      <p className="label">Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div> */}
  </div>
);

export default FilterPanel;
