import { useEffect, useState } from "react";

function ListDigimon() {
  const [digimon, setDigimon] = useState([]);
  console.log(1);

  useEffect(() => {
    //https://digimon-api.vercel.app/api/digimon
    //https://jsonsplaceholder.typecode.com/users

    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDigimon(result);
      });

    console.log(3);
  }, []);
  console.log(digimon);
  return (
    <>
      <div>
        <h1>Digimons</h1>
        {console.log(2)}
      </div>
    </>
  );
}

export default ListDigimon;
