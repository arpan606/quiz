import React, { useEffect, useState } from 'react';
import { TbBulbFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { changeScore, markQuestionStatus } from '../../../actions/questions';
import './question.scss';
const Question = ({question,autoSubmit,currentIndex}) => {

  const {score}= useSelector((state) => state.quiz);
  const [correctAnswer,setCorrectAnswer]=useState(false);
  const [wrongAnswer,setWrongAnswer]=useState(false);
  const [selectedOption,setSelectedOption]=useState(-1);

  const dispatch = useDispatch();

  const validateAnswer=(option,index)=>{
    if(question.isMarked)
        return;

    question.isMarked=true;
    dispatch(markQuestionStatus(currentIndex-1,true,option))
    if(option===question.correctAnswer)
    {
        dispatch(changeScore(score+1));
        setCorrectAnswer(true);
    }else{
        setSelectedOption(option);
        setWrongAnswer(true);
        setCorrectAnswer(true);
    }
  }

  useEffect(()=>{
    if(autoSubmit && !question.isMarked)
    { 
        dispatch(markQuestionStatus(currentIndex-1,true,undefined))
        setCorrectAnswer(true);
    }
  },[autoSubmit])

  useEffect(()=>{
    if(question.isMarked)
    {
        setSelectedOption(question.selectedOption);
        setCorrectAnswer(true);
        if(question.selectedOption!==question.correctAnswer)
            setWrongAnswer(true);
    }
  },[])


  return (
    <div className='question-section'>
        <div className='question'>
            <TbBulbFilled color="#ED9EB7" size="40"/>
            <span>{question.question.text}</span>
        </div>
        <div className='options'>
            {question.options.map((opt,index)=>{
                return <button key={index} className={"option-value"+" "+(correctAnswer && question?.correctAnswer===opt?'highlight-correct':'')+(wrongAnswer && selectedOption===opt?'highlight-wrong':'')} onClick={()=>{validateAnswer(opt,index)}}>{opt}</button>
            })}
        </div>
    </div>
  )
}

export default Question
