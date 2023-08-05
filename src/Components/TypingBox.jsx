import React, { createRef ,useEffect, useMemo, useRef, useState } from 'react'
import { useTestMode } from '../Context/TestModeContext'
import UpperMenu from './UpperMenu'
import { generate } from 'random-words'
import Statistics from './Statistics';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import Practice from './Practice';

let randomWords = generate(50);

const TypingBox = () => {
    const [wordsArray, setWordsArray] = useState(randomWords);
    const inputRef = useRef(null);
    const {testTime} = useTestMode();
    const [countDown, setCountDown] = useState(testTime)
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [testStarted,setTestStarted] = useState(false);
    const [testEnded, setTestEnded] = useState(false);
    const [intervalId, setintervalId] = useState(null);

    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [graphData, setGraphData] = useState([]);

    const wordsSpanRef = useMemo(()=>{
        return Array(wordsArray.length).fill(0).map(item=>createRef(null));
      },[wordsArray])
    
    const startTimer =()=>{
      const intervalId = setInterval( timer , 1000);
      setintervalId(intervalId);
      function timer(){
        setCountDown(updatedCountDown =>{

          setCorrectChars(correctChars=>{
            setGraphData(graphData=>{
              return [...graphData, [
                testTime - updatedCountDown+1,
                (correctChars/5)/((testTime - updatedCountDown+1)/60)
              ]];
            })
            return correctChars
          })
          if(updatedCountDown ===1){
            setTestEnded(true);
            clearInterval(intervalId);
            return 0;
          }
          
        return updatedCountDown-1});
      }
    }
    const resetTest = ()=>{
      clearInterval(intervalId);
      setCountDown(testTime)
      setCurrWordIndex(0); 
      setCurrCharIndex(0);
      setTestStarted(false);
      setTestEnded(false);
      setWordsArray(generate(50));
      resetWordSpanrefClassname();
      focusInput();
      }

    const resetWordSpanrefClassname = ()=>{
    wordsSpanRef.map(i=>{
        Array.from(i.current.childNodes).map(j=>{
            j.className = '';
        })
    })
    wordsSpanRef[0].current.childNodes[0].className = 'current';
    }
    const handleUserInput=(e)=>{

      if(!testStarted){
        startTimer();
        setTestStarted(true);
      }

      const allCurrChars = wordsSpanRef[currWordIndex].current?.childNodes;
      
      if (!allCurrChars) {
        return;
      }
      
      //space functionality=> jump to new word(32 is key code for space key in keyboard)
        if(e.keyCode===32){
          //correct word for accuracy

          let correctCharsInWord = wordsSpanRef[currWordIndex].current.querySelectorAll('.correct');
          console.log(correctCharsInWord);

          if(correctCharsInWord.length === allCurrChars.length){
            setCorrectWords(correctWords+1);
          }

          console.log(correctWords);
          //logic for space
          if(allCurrChars.length <= currCharIndex){
            //removing cursor from the last place in a word
            allCurrChars[currCharIndex-1].classList.remove("current-right");

          }else{
            //removing cursor from in between of the word
            setMissedChars(missedChars + (allCurrChars.length - currCharIndex));
            allCurrChars[currCharIndex].classList.remove("current"); 
          } 
          
          wordsSpanRef[currWordIndex+1].current.childNodes[0].className = 'current';
          setCurrWordIndex(currWordIndex+1);
          setCurrCharIndex(0);
          
          return;
        }
        
        //backSpace functionality
        if(e.keyCode ===8 ){

          if(currCharIndex !== 0){

            if(allCurrChars.length === currCharIndex){

              //if extra keywords added needed to be removed
              if(allCurrChars[currCharIndex-1].className.includes('extra')){
                
                allCurrChars[currCharIndex-1].remove();
                allCurrChars[currCharIndex-2].className += ' current-right'
              }else{
                allCurrChars[currCharIndex-1].className = 'current';
              }

              setCurrCharIndex(currCharIndex-1);
              return
            }

            allCurrChars[currCharIndex].className ='';
            allCurrChars[currCharIndex-1].className = 'current';
            setCurrCharIndex(currCharIndex-1);
          }
          return;
        }
        //extra characters 
        if(currCharIndex === allCurrChars.length){

          let newSpan = document.createElement('span');
          newSpan.innerText = e.key;
          newSpan.className = 'incorrect current-right extra'
          allCurrChars[currCharIndex-1].classList.remove('current-right');  
          wordsSpanRef[currWordIndex].current.append(newSpan) ;
          setCurrCharIndex(currCharIndex+1);
          setExtraChars(extraChars+1);
          return 

        }
      
      if( e.key === allCurrChars[currCharIndex].innerText){
        allCurrChars[currCharIndex].className = 'correct';
        setCorrectChars(correctChars+1)
        console.log('correct yippee');
      }
      else{
        allCurrChars[currCharIndex].className= 'incorrect';
        setIncorrectChars(incorrectChars+1);
        console.log('incorrect sorry');
      }

      
      // console.log(allCurrChars.length);
      if(currCharIndex+1 === allCurrChars.length){
        allCurrChars[currCharIndex].className += ' current-right' 

      }
      else{
        allCurrChars[currCharIndex+1].className= 'current'
      }
      
      setCurrCharIndex(currCharIndex+1)
    }

    const focusInput =()=>{
      inputRef.current.focus();
    }

    const calculateWPM =()=>{
      return Math.round((correctChars/5)/(testTime/60))
    }

    const calculateAccuracy=()=>{
      
      return Math.round((correctWords/currWordIndex)*100);
    }

    useEffect(()=>{
              resetTest();
          },[testTime])
      
          useEffect(()=>{
              focusInput();
              wordsSpanRef[0].current.childNodes[0].className = "current";
          },[]);

  return (
    <div >
      {/* <Practice/> */}
   {testEnded ? (<Statistics wpm={calculateWPM()}
    accuracy={calculateAccuracy()}
    correctChars={correctChars}
    incorrectChars={incorrectChars}
    missedChars={missedChars}
    extraChars={extraChars}
    graphData={graphData}
    />): (<div onClick={focusInput} className='type-box' >
        <UpperMenu countDown={countDown}/>
      <div className="words">
        {
          wordsArray.map((word, index)=>( 
            <span className="word" key={index} ref={wordsSpanRef[index]}>
              {
                word.split('').map((char,index)=>(
                  <span key={index}>{char}</span>
                ))
              }
            </span>
          ))
        }
      </div>
    </div>)}
    <input 
    type="text"
    onKeyDown={handleUserInput}
    className='hidden-input'
    ref={inputRef}
    />
  

    </div>
  )
}

export default TypingBox