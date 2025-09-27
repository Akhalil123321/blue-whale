import React from "react"
import SectionDevider from "../../Components/SectionDivider/SectionDivider"
import Hero from "../../Components/Hero/Hero"
import AboutUs from "../../Components/AboutUS/AboutUs"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import Contact from "../../Components/Contact/Contact"
import OurVision from "../../Components/OurVision/OurVision"
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs"
import MainProjects from "../../Components/MainProjects/MainProjects"
import Tail from "../../Components/Tail/Tail"

const MainEn = () => {
    return (
        <div className="Full-Project-Cont">
            <Hero/>
            <SectionDevider/>
            <AboutUs/>
            <SectionDevider/>
            <OurVision/>
            <SectionDevider/>
            <WhyChooseUs/>
            <SectionDevider/>
            <ServicesSection/>
            <SectionDevider/>
            <MainProjects/>
            <Contact/>
            <Tail/>
        </div>
    )
}

export default MainEn