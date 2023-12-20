import axios from 'axios';

import {
    CHANGE_QUESTION,
    CHANGE_SCORE,
    FETCH_QUESTION,
    LOADING,
    MARK_QUESTION_STATUS,
    RESET_STATE,
    SHOW_ERROR
} from '../constants/questions.js';

export const setLoadingState = (value) => ({
    type: LOADING,
    value
  });


export const fetchQuestion = () => {
    return async (dispatch) => {
      try {
        dispatch(setLoadingState(true));
        
        // https://opentdb.com/api.php?amount=10&category=27&type=multiple
        await axios.get('https://the-trivia-api.com/v2/questions?category=sport_and_leisure')
        .then((res)=>{
            const questions = res.data;
            questions.map((ques) => {
                ques.isMarked=false;
                ques.selectedOption='none';
                ques.options=randomizeBackAndForth([ques.correctAnswer,...ques.incorrectAnswers]);
            });
            dispatch(setLoadingState(false));
            dispatch({
                type:FETCH_QUESTION,
                value:questions
            });
        });
       
      } catch (error) {
        console.error(error);
        dispatch({
            type: SHOW_ERROR
          })
      }
    };
  };


export function changeQuestion(index) {
  return function(dispatch) {
    dispatch({
      type: CHANGE_QUESTION,
      value:index
    })
  }
}

export function changeScore(score) {
    return function(dispatch) {
      dispatch({
        type: CHANGE_SCORE,
        value:score
      })
    }
  }

  

  export function markQuestionStatus(index,status,selectedOption) {
    return function(dispatch) {
      dispatch({
        type: MARK_QUESTION_STATUS,
        value:{index,status,selectedOption}
      })
    }
  }

  
  export function resetState() {
    return function(dispatch) {
      dispatch({
        type: RESET_STATE,
      })
    }
  }


  function randomizeBackAndForth(arr) {
    const randomizedArr = [...arr]; 
  
    for (let i = randomizedArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedArr[i], randomizedArr[j]] = [randomizedArr[j], randomizedArr[i]];
    }
  
    return randomizedArr;
  }
  
