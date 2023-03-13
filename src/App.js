import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Faviourites from "./Components/Favourites";
import Homescreen from "./Components/Homescreen";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
          <Route path="/fav" element={<Faviourites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
