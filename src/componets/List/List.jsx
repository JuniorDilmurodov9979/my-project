import "../../main.css";
import "./list.css";
import { Card } from "../card/card";
import { opt } from "../../constants/constant";
import React, { useState, useEffect } from "react";
import { Search } from "../search/search";
import { data } from "autoprefixer";

export function List() {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredData = countries.filter(
    (item) =>
      item.name.common.toLowerCase().includes(inputValue.toLowerCase()) &&
      (select === "" || item.region.toLowerCase() === select)
  );

  return (
    <>
      <div className="hero__top">
        <form className="hero__top-form">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="hero__top-input"
            type="search"
            name="user_search"
            aria-label="Search for a country"
            placeholder="Search for a country…"
          />
        </form>
        <form className="hero__form">
          <select
            onChange={(evt) => {
              setSelect(evt.target.value);
            }}
            className="hero__select"
            name="user_select"
          >
            <option value="" hidden>
              Filter by Region
            </option>
            {opt.map((item) => (
              <Search key={item.id} region={item.name} value={item.value} />
            ))}
          </select>
        </form>
      </div>
      <ul className="hero__list">
        {filteredData.map((item) => (
          <Card
            key={item.name.common}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
            img={item.flags.png}
          />
        ))}
      </ul>
    </>
  );
}
