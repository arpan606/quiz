/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import React from 'react';
import { FaFlagCheckered } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchQuestion } from '../../../actions/questions';
import './about.scss';

const about = () => {
  
let navigate = useNavigate(); 
const dispatch = useDispatch();

const routeChange = (path) =>{ 
    dispatch(fetchQuestion());
    navigate(path);
}

  return <div className='about-container'>
        <motion.div className='heading' animate={{ scale: [2.8,1],transition: { duration: 1 }, }}>
            <FaFlagCheckered color="#383838"/>
            <span>ARE YOU READY?</span> 
        </motion.div>
        <div className='sub-heading'>Let's see how many questions you can answer:</div>
        <div className='list-item'><GoGoal color="#383838"/><span className='semi-bold'>There are <span className='bold'>10 question</span> </span></div>
        <div className='list-item'><GoGoal color="#383838"/><span className='semi-bold'>You need to <span className='bold'>pick 1 answer</span> </span></div>
        <div className='list-item'><GoGoal color="#383838"/><span className='semi-bold'>You have  <span className='bold'>10 sec for each</span> question</span></div>
        <div className='list-item'><GoGoal color="#383838"/><span className='semi-bold'>It takes <span className='bold'>no longer than 2 min</span>  to complete</span></div>
        <motion.button className='start-button' onClick={()=>routeChange('quiz')}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <motion.div animate={{ scale: [2.8,1],transition: { duration: 1 }, }}><GiSandsOfTime color='#ED9EB7' size={25} /></motion.div><span>Start the Quiz</span> 
        </motion.button>
    </div>
}

export default about