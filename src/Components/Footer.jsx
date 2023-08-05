import React from 'react'
import Select from 'react-select';
import { themeOptions } from '../Utils/ThemeOptions';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    
    const {theme , setTheme} = useTheme();
    const handleChange =(e)=>{
        setTheme(e.value); 
        localStorage.setItem('theme', JSON.stringify(e.value));
    }
    const email = 'jariwala.yash02@gmail.com' 
  return (
    <div>
    <div className="footer">
      <div className="links">
        <a href='https://github.com/yashjariwala01' target='blank'> <GitHubIcon style={{transform : 'scale(1.4)'}}/></a>
        <a href= 'https://www.linkedin.com/in/yash-jariwala-linked-in/' target='blank'><LinkedInIcon style={{transform : 'scale(1.4)'}}/></a>
        <a href={`mailto:${email}`} target='blank'><EmailIcon style={{transform : 'scale(1.4)'}}/></a>
        </div>
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
