import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./app.styles.css";
import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  const onChangeSearch = (e) => setSearchField(e.target.value);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox
        searchField={searchField}
        onChangeSearch={onChangeSearch}
        placeholder={"Search monster"}
      />
      <CardList monsters={filteredMonsters} />
      <p>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/alejandrrhernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alejandro Hernández
        </a>
        {" - "}
        <a
          href="https://github.com/Alejandrehl/monster-rolodex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </p>
    </div>
  );
};

export default App;
