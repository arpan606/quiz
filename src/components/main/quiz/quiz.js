import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { LiaHandPointRight } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeQuestion } from "../../../actions/questions";
import Loader from '../../main/loader/loader';
import Question from '../../sub/question/question';
import StarsCanvas from '../../sub/starbackground/starbackground';
import Result from '../result/result.js';
import './quiz.scss';


const Quiz = () => {

   const {loading,totalCount,currentQuestionIndex,question,score}= useSelector((state) => state.quiz);
   const dispatch = useDispatch();
   const [time, setTime] = useState(5);
   const [expired, setExpired] = useState(false);
   const [autoSubmit,setAutoSubmit]=useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    if(currentQuestionIndex>0 && currentQuestionIndex<=totalCount && !question[currentQuestionIndex-1].isMarked)
    {
        setTime(5);
        setTimer();
        setAutoSubmit(false);
    }
    
  }, [currentQuestionIndex]);

  const setTimer = () => {
    setExpired(false);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime > 0 ? prevTime - 1 : 0;
        if (newTime === 0) {
          setExpired(true);
          clearInterval(interval);
          setAutoSubmit(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  };

   
   const nextQuestion=()=>{
        if(currentQuestionIndex<totalCount && expired)
        { 
        setAutoSubmit(false);
        dispatch(changeQuestion(currentQuestionIndex+1));}
        else{
            console.error('TIME EXIPERED');
        }
   };

   const prevQuestion=()=>{
        if(currentQuestionIndex>1 && expired)
       { 
        setAutoSubmit(false);
        dispatch(changeQuestion(currentQuestionIndex-1));}
        else{
            console.error('no prev question');
        }
   };

   const routeChange = (path) =>{ 
        navigate('/');
    };



  return !!loading ? <Loader/>
   :(
    <div className='quiz-container'>
        <div className='background'>
            <StarsCanvas/>
            <div className="home-icon" onClick={()=>{routeChange('')}}><FaHome color="white" size={40}/></div>
            <div className='main-section'>
                <div className="countdown-timer">
                  <div className="count">{time}</div>
                </div>
                <div className="score">SCORE:{score}</div>
                <div className='heading'>
                    <div className="back-button" onClick={()=>{prevQuestion()}}><IoArrowBackCircle color="#ED9EB7" size="30"/></div>QUESTION <span className='highlight'>{currentQuestionIndex}</span> OUT OF <span className='highlight'>{totalCount}</span>
                </div>
                <Question question={question[currentQuestionIndex-1]} key={currentQuestionIndex} autoSubmit={autoSubmit} currentIndex={currentQuestionIndex} />
                <motion.button className='next-question-button' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=>{nextQuestion()}}>
                    <LiaHandPointRight color="#ED9EB7" size="25"/>
                    <span>Next Question</span>
                </motion.button>
            </div>
        </div>
        {currentQuestionIndex===question.length && question[currentQuestionIndex-1].isMarked ? <Result/>:''}
    </div>
  )
}

export default Quiz