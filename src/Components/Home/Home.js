import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import MyServices from '../MyServices/MyServices';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Blogs></Blogs>
            <Education></Education>
            <MyServices></MyServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;