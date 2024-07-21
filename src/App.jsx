import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logincontroller from "./controllers/Logincontroller";
import HeaderView from "./views/HeaderView";
import MainController from "./controllers/MainController";
import DetailController from "./controllers/DetailController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<Logincontroller />} />
        <Route path="/home" element={<MainController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
