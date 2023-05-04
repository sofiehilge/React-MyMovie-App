import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  // da det er app elementet der renderes, opsættes hele strukturen inde i diven med className="app"

  return <div className="App"><Outlet/></div>;
}
/* Imellem diven vil vi skifte mellem listevisningen */
/* alt det sker i vores Browser router i main.jsx*/
export default App;
