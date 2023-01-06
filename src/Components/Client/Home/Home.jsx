import React from "react"
import Hero from "../Hero/Hero"
import HeroSection from "../HeroSection/HeroSection"
import AboutCard from "../AboutCard/AboutCard"
import AboutUS from "../Aboutus/AboutUS"
import Courses from "../Courses/Courses"
import Testimonal from "../Testimonial/Testimonial"
import Chooseus from "../Chooseus/Chooseus"
import PopularCourses from "../PopularCourses/PopularCourses"
import FreeCourse from "../FreeCourse/FreeCourse"
import Features from "../Features/Features"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"



const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeroSection />
      {/* <Features /> */}
      <AboutCard />
      
      {/* <AboutUS /> */}
      {/* <Courses /> */}
      
      <PopularCourses />
     
      <FreeCourse />
      <Features /> 
      <Chooseus />

      <Testimonal />
     
      <Footer />
    </>
  )
}

export default Home
