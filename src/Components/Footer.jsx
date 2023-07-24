import React, { useState } from 'react'
import Select from 'react-select';
import { themeOptions } from '../Utils/ThemeOptions';
import { useTheme } from '../Context/ThemeContext';

const Footer = () => {
    
    const {theme , setTheme} = useTheme();
    const handleChange =(e)=>{
        setTheme(e.value); 
        localStorage.setItem('theme', JSON.stringify(e.value));
    }
    
  return (
    <div>
      <div className="footer">
        <div className="links">Links</div>
        <div className="themeButton">
            <Select
                defaultalue={{label:theme.label,value: theme}}
                onChange={handleChange}
                options={themeOptions}
                menuPlacement='top'
                styles={{
                    control : styles => ({...styles,backgroundColor : 'white'}),
                    menu : styles => ({...styles, backgroundColor: 'white'}),
                    option : (styles, {isfocused}) => {
                        return {
                            ...styles,
                            backgroundColor: !isfocused ? theme.background : theme.typeBoxText,
                            color : (!isfocused) ? theme.textColor : theme.background,
                            cursor : 'pointer'
                        }
                    }
                }}
            />    
        </div>
      </div>
    </div>
  )
}

export default Footer
