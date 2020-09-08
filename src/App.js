import React, { useState } from "react";
import People from "./Components/People/People";
import Drinks from "./Components/Drinks/Drinks";

import nico from "./Images/nico.jpg";

function App() {
  const [checkedPeople, setCheckedPeople] = useState([]);
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      title: "Bier",
      image:
        "https://www.liquor.com/thmb/nzYXpum0AiReyEulV0dPqMBMxmY=/1440x1440/filters:fill(auto,1)/beer-0358105730dc469190b50f289962c910.png",
    },
    {
      id: 2,
      title: "Red Bull",
      image:
        "https://cdn.handelszeitung.ch/sites/default/files/styles/16x9_560/public/bz/image_gallery/red-bull.jpg",
    },
    {
      id: 3,
      title: "Coca Cola",
      image:
        "https://www.coca-cola-deutschland.de/content/dam/one/de/section-header-mobile/900x600px-header-image-mobile.jpg",
    },
  ]);
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Lukas Meier",
      image: nico,
    },
    {
      id: 2,
      name: "Philip Mösli",
      image: nico,
    },
    {
      id: 3,
      name: "Pascal Hoser",
      image: nico,
    },
    {
      id: 4,
      name: "Marco Hoser",
      image: nico,
    },
  ]);
  const [currentOrder, setCurrentOrder] = useState([
    {
      person: 1,
      order: [
        { drink: 1, amount: 1 },
        { drink: 2, amount: 1 },
      ],
    },
  ]);

  const togglePersonChecked = (personId) => {
    const tmpChecked = [...checkedPeople];
    const personIndex = tmpChecked.findIndex((val) => val === personId);
    if (personIndex !== -1) {
      tmpChecked.splice(personIndex, 1);
    } else {
      tmpChecked.push(personId);
    }
    setCheckedPeople(tmpChecked);
  };

  return (
    <div>
      <People
        check={togglePersonChecked}
        checkedPeople={checkedPeople}
        people={people}
      />
      <br />
      <Drinks drinks={drinks} />
    </div>
  );
}

export default App;
