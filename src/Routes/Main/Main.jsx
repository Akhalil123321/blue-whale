import React from "react"
import Hero from "../../Components/2-Hero/Hero"
import AboutUs from "../../Components/3-AboutUS/AboutUs"
import ServicesSection from "../../Components/6-ServicesSection/ServicesSection"
import Contact from "../../Components/8-Contact/Contact"
import OurVision from "../../Components/5-OurVision/OurVision"
import WhyChooseUs from "../../Components/4-Services/Services"
import OurProjects from "../../Components/7-OurProjects/OurProjects"
import Tail from "../../Components/9-Tail/Tail"

const MainEn = () => {
    return (
        <div className="Full-Project-Cont">
            <Hero/>
            <AboutUs/>
            <WhyChooseUs/>
            <OurVision/>
            <OurProjects/>
            <ServicesSection/>
            <Contact/>
            <Tail/>
        </div>
    )
}

export default MainEn