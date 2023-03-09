import React from 'react'
import CropRecommendationForm from './CropRecommendationForm'
import FertiliserRecommendationForm from './FertiliserRecommendationForm'
import Navbar from './Navbar'
import '../css/home.css'

function HomePage() {
    return (
        <div>
            <Navbar />
            <CropRecommendationForm />
        </div>
    )
}

export default HomePage