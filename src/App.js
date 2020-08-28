import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
