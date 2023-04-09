import React from "react";
import "./styles.css";
import { UilSearch } from "@iconscout/react-unicons";
import NavIcons from "../../../NavIcons/NavIcons";

const SearchBar = ({ value, changeInput }) => (
  <div className="LogoSearch">
    <div className="Search">
      <input
        type="text"
        placeholder="#Explore"
        value={value}
        onChange={changeInput}
      />
      <div className="s-icon">
        <UilSearch />
      </div>
    </div>
    <div style={{ width: "20rem", alignSelf: "flex-end" }}>
      <NavIcons />
    </div>
  </div>
);

export default SearchBar;
