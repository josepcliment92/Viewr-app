import "./App.css";
import MainNavBar from "./components/MainNavBar";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import ListShows from "./pages/ListShows";
import DetailsShow from "./pages/DetailsShow";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div>
     <MainNavBar />

      <div>
        <Routes>
          <Route path={"/"} element={<Start />} />  {/* pendiente quitar Navbar */}
          <Route path={"/home"} element={<Home />} />
          <Route path={"/list-shows"} element={<ListShows />} />
          <Route path={"/list-shows/:showId"} element={<DetailsShow />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/not-found"} element={<NotFound />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
