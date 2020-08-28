import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./app.styles.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onChangeSearch = (e) => setSearchField(e.target.value);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search monster"
        value={searchField}
        onChange={onChangeSearch}
      />
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
