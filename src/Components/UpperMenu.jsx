import React from 'react'
import { useTestMode } from '../Context/TestModeContext'

const UpperMenu = ({countDown}) => {

    const value = useTestMode();
    const {testTime, setTestTime} = value

    const updateTime=(e)=>{
        setTestTime(e.target.id)
    }
    // console.log(testTime);
    

 
  return (
    <div className='upper-menu'>
      <div className="counter">
        {countDown}
      </div>
      <div className="modes">
        <div className="time-mode" id={15} onClick={updateTime}>15s</div>
        <div className="time-mode" id={30} onClick={updateTime}>30s</div>
        <div className="time-mode" id={60} onClick={updateTime}>60s</div>
      </div>
    </div>
  )
}

export default UpperMenu
