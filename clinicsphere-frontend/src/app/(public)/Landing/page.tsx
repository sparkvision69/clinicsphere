"use client"
import DoctorsSection from "../componets/DoctorsSection";
import Footer from "../componets/Footer";
import Navbar from "../componets/Header"
import HeroSection from "../componets/HeroSection";
import SpecialtiesSection from "../componets/SpecialtiesSection";
import TestimonialsSection from "../componets/TestimonialsSection";

const Landing = ( ) => {
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <SpecialtiesSection/>
            <DoctorsSection/>
            <TestimonialsSection/>
            <Footer/>
        </div>
    )
}

export default Landing;