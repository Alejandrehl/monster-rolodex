import React, { useState } from "react";
import { CardList } from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([
    {
      id: 1,
      name: "Frankenstein",
    },
    {
      id: 2,
      name: "Dracula",
    },
    {
      id: 3,
      name: "Zombie",
    },
  ]);

  return (
    <div>
      <CardList data={monsters}>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
    </div>
  );
};

export default App;
