import React, { useState } from "react";
import People from "./Components/People/People";
import Drinks from "./Components/Drinks/Drinks";
function App() {
  const [drinks, setDrinks] = useState([
    {
      title: "Bier",
      image:
        "https://www.liquor.com/thmb/nzYXpum0AiReyEulV0dPqMBMxmY=/1440x1440/filters:fill(auto,1)/beer-0358105730dc469190b50f289962c910.png",
    },
    {
      title: "Red Bull",
      image:
        "https://cdn.handelszeitung.ch/sites/default/files/styles/16x9_560/public/bz/image_gallery/red-bull.jpg",
    },
    {
      title: "Coca Cola",
      image:
        "https://www.coca-cola-deutschland.de/content/dam/one/de/section-header-mobile/900x600px-header-image-mobile.jpg",
    },
  ]);

  const [people, setPeople] = useState([
    {
      name: "Lukas Meier",
      image:
        "https://lh3.googleusercontent.com/pw/ACtC-3fB6foIx7GZwfqHmOfx1j_pX4EHGFZk5oWvT8tCpFp7p47CbCGK_O9zIITzy0VsouDsfmk2oYfI1TXxg9eReFzN3nGl5-awroWUwJHgXfgVcKIZQxrXRkuDiqH5uE4GG2ugqlJdZqtKd5RXg8Jjm7eeDA=w500-h888-no?authuser=0",
    },
    {
      name: "Philip Mösli",
      image:
        "https://lh3.googleusercontent.com/pw/ACtC-3fB6foIx7GZwfqHmOfx1j_pX4EHGFZk5oWvT8tCpFp7p47CbCGK_O9zIITzy0VsouDsfmk2oYfI1TXxg9eReFzN3nGl5-awroWUwJHgXfgVcKIZQxrXRkuDiqH5uE4GG2ugqlJdZqtKd5RXg8Jjm7eeDA=w500-h888-no?authuser=0",
    },
    {
      name: "Pascal Hoser",
      image:
        "https://lh3.googleusercontent.com/pw/ACtC-3fB6foIx7GZwfqHmOfx1j_pX4EHGFZk5oWvT8tCpFp7p47CbCGK_O9zIITzy0VsouDsfmk2oYfI1TXxg9eReFzN3nGl5-awroWUwJHgXfgVcKIZQxrXRkuDiqH5uE4GG2ugqlJdZqtKd5RXg8Jjm7eeDA=w500-h888-no?authuser=0",
    },
    {
      name: "Marco Hoser",
      image:
        "https://lh3.googleusercontent.com/pw/ACtC-3fB6foIx7GZwfqHmOfx1j_pX4EHGFZk5oWvT8tCpFp7p47CbCGK_O9zIITzy0VsouDsfmk2oYfI1TXxg9eReFzN3nGl5-awroWUwJHgXfgVcKIZQxrXRkuDiqH5uE4GG2ugqlJdZqtKd5RXg8Jjm7eeDA=w500-h888-no?authuser=0",
    },
  ]);

  return (
    <div>
      <People people={people} />
      <br />
      <Drinks drinks={drinks} />
    </div>
  );
}

export default App;
