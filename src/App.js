import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./app.styles.css";
import { SearchBox } from "./components/search-box/search-box.component";
import { Footer } from "./components/footer/footer.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => alert(err.message));
  }, []);

  const onChangeSearch = (e) => setSearchField(e.target.value);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        searchField={searchField}
        onChangeSearch={onChangeSearch}
        placeholder={"Search monster"}
      />
      <CardList monsters={filteredMonsters} />
      <Footer />
    </div>
  );
};

export default App;
