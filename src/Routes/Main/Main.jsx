import React from "react"
import SectionDevider from "../../Components/SectionDivider/SectionDivider"
import Hero from "../../Components/Hero/Hero"
import AboutUs from "../../Components/AboutUS/AboutUs"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import Contact from "../../Components/Contact/Contact"
import Tail from "../../Components/Tail/Tail"

const MainEn = () => {
    return (
        <>
            <Hero/>
            <SectionDevider/>
            <AboutUs/>
            <SectionDevider/>
            <ServicesSection/>
            <SectionDevider/>
            <Contact/>
            <Tail/>
        </>
    )
}

export default MainEn