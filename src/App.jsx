import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  let [darkmode, setDarkmode] = useState(false);
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return (
    <div className={"app " + (darkmode && "dark")}>
      <div className="dark:bg-black">
        <Outlet context={[darkmode, setDarkmode]} />
      </div>
    </div>
  );
}
/* Imellem diven vil vi skifte mellem listevisningen */
/* alt det sker i vores Browser router i main.jsx*/
export default App;
