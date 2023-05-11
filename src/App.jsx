import { useEffect, useState } from "react";
import ListDigimon from "./Components/ListDigimon";

function App() {
  //1. membaca state dulu
  const [greeting, setGreeting] = useState("hallo");
  const [counter, setCounter] = useState(0);
  console.log("satu");

  //saat tidak diberikan[] maka data akan menjalankan terus terusan
  //looping terus []--> looping sekali saja
  useEffect(() => {
    console.log("tiga");
  });
  return (
    //2. menampilkan jsxnyan dari state  dan disebut tahap mounting
    <>
      {console.log("dua")}
      <h1 onClick={() => setGreeting("tess")}>{greeting}</h1>
      <div>
        <button>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <ListDigimon />
    </>
  );
}

export default App;
