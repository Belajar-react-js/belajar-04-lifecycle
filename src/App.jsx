import { useEffect, useState } from "react";

function App() {
  //1. membaca state dulu
  const [greeting, setGreeting] = useState("hallo");
  console.log("satu");

  useEffect(() => {}, []);
  return (
    //2. menampilkan jsxnya dan disebut tahap mounting
    <>
      {console.log("dua")}
      <h1>{greeting}</h1>
    </>
  );
}

export default App;
