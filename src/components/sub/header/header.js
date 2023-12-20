import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { FaBrain, FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { resetState } from "../../../actions/questions";
import './header.scss';

const Header = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(resetState());
    },[]);

  return (
    <div className='header-component'>
        <motion.div className='title'> <span>Quiz</span><FaBrain color='#ED9EB7'/></motion.div>
        <div className='heading-section'>
            <h3>THE</h3>
            <motion.h1 className='bold' animate={{ scale: [2.8,1],transition: { duration: 1 }, }}>INSTANT <span className='break-color'>QUIZ</span></motion.h1>
            <h3 className='italic'>Test your skills here and test your knowledge</h3>
            <h3 className='italic'>Learn something new</h3>
        </div>
        <h4>Made by Arpan <FaHeart color='#ED9EB7'/></h4>
    </div>
  )
}

export default Header