import React from 'react';
import About from '../../sub/about/about';
import Header from '../../sub/header/header';
import './home.scss';

const Home=()=> {
    return (<div className="home-container"> 
    <Header/> <About/>
    </div>)
}

export default Home