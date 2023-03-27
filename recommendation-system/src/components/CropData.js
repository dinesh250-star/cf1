import React from "react";
import CropRecommendationForm from "./CropRecommendationForm";
import FertiliserRecommendationForm from "./FertiliserRecommendationForm";
import Navbar from "./Navbar";
import "../css/home.css";
import CropInputForm from "./CropInputForm";
function HomePage() {
  return (
    <div>
      <Navbar />
      <CropInputForm />
    </div>
  );
}

export default HomePage;
