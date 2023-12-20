/* eslint-disable import/no-anonymous-default-export */
import {
    CHANGE_QUESTION,
    CHANGE_SCORE,
    FETCH_QUESTION,
    HIDE_ERROR,
    LOADING,
    MARK_QUESTION_STATUS,
    RESET_STATE,
    SHOW_ERROR
} from '../constants/questions.js';
  
  const INITIAL_STATE = {
    question: [],
    totalCount: 0,
    correctCount: 0,
    score: 0,
    charsInProposition: [],
    charsOnBoard: [],
    checkAnswerCondition: null,
    showError: false,
    loading:false,
    currentQuestionIndex:0
  };


  export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SHOW_ERROR:
            return { ...state, showError: true};
  
        case HIDE_ERROR:
            return { ...state, showError: false};
  
        case LOADING:
             return {...state,loading:action.value};   

        case FETCH_QUESTION:
            return {...state,question:action.value,totalCount:action.value.length??0,currentQuestionIndex:1};
      
        case CHANGE_QUESTION:
            return {...state,currentQuestionIndex:action.value};  

        case CHANGE_SCORE:
            return {...state,score:action.value};  
        
        case MARK_QUESTION_STATUS:
            const setQuestion=[...state.question];
            setQuestion[action.value.index].isMarked=action.value.status;
            setQuestion[action.value.index].selectedOption=action.value.selectedOption;
            return {...state,question:setQuestion};  

        case RESET_STATE:
            return {...INITIAL_STATE};

      default:
          return state;
    }
  }
