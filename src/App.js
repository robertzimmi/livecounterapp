import React, { useEffect, useState } from "react";
import "./App.css";
import { db, ref, onValue } from "./firebase";

function App() {
  const [blueLife, setBlueLife] = useState(40);
  const [redLife, setRedLife] = useState(40);

  useEffect(() => {
    const blueRef = ref(db, "players/blue");
    const redRef = ref(db, "players/red");

    onValue(blueRef, snapshot => setBlueLife(snapshot.val()));
    onValue(redRef, snapshot => setRedLife(snapshot.val()));
  }, []);

  return (
    <div className="App">
      <div className="life blue">{blueLife}</div>
      <div className="life red">{redLife}</div>
    </div>
  );
}

export default App;
