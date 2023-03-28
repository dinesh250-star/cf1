import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import Feedback from "./components/Feedback";
import AdminInput from "./components/AdminInput";
import FertiliserRecommendation from "./components/FertiliserRecommendation";
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/admin" element={<AdminInput/>}></Route>
        <Route path="/fertiliser" element={<FertiliserRecommendation/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
