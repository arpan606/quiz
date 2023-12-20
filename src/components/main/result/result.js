import { motion } from "framer-motion";
import React from 'react';
import { FaHome } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './result.scss';


const Result = () => {
   
    const {score}= useSelector((state) => state.quiz);
    const sparkItem=[1,2,3,4,5,6,7,8];
   const navigate = useNavigate();

    const routeChange = (path) =>{ 
        navigate('/');
    };

  return (
    <div className='result-container'>
    <motion.div animate={{ scale: [2.8,1] }} transition={{ ease: "easeOut", duration: 3 }} className='total-score'>SCORE {score??0}</motion.div>
    <div className="homes-icon" onClick={()=>{routeChange()}}><FaHome color="white" size={40}/></div>
    <div className="fireworks">
      <div className="firework">
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark gold"></div>
            </div>
            ))
        }
      </div>
      <div className="firework" style={{marginTop: "-70px"}}>
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark silver"></div>
            </div>
            ))
        }
      </div>
      <div className="firework">
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark gold"></div>
            </div>
            ))
        }
      </div>
      <div className="firework" style={{marginTop: "70px"}}>
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark silver"></div>
            </div>
            ))
        }
      </div>
      <div className="firework">
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark gold"></div>
            </div>
            ))
        }
      </div>
      <div className="firework" style={{marginTop: "-70px"}}>
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark silver"></div>
            </div>
            ))
        }
      </div>
      <div className="firework">
        {
            sparkItem.map((index)=>(
            <div key={index} className="explosion">
                <div className="spark gold"></div>
            </div>
            ))
        }
      </div>
    </div></div>
  )
}

export default Result