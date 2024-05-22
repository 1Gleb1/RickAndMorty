import { BrowserRouter, Route, Routes } from "react-router-dom";

import Characters from "./page/Characters";
import Locations from "./page/Locations";
import Episodes from "./page/Episodes";
import CharacterId from "./page/CharacterId";
import LocationsId from "./page/LocationsId";
import EpisodeId from "./page/EpisodeId";

import "./style/App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/character/:id" element={<CharacterId />} />
          <Route exact path="/locations" element={<Locations />} />
          <Route exact path="/location/:id" element={<LocationsId />} />
          <Route exact path="episodes" element={<Episodes />} />
          <Route exact path="episode/:id" element={<EpisodeId />} />
          <Route path="*" element={<Characters />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
