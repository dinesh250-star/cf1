import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import Feedback from "./components/Feedback";
import CropData from "./components/CropData";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/cropdata" element={<CropData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
