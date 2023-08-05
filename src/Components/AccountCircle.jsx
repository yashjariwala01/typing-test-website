import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Modal, Tab, Tabs , Box} from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {useTheme} from '../Context/ThemeContext'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify'
import errorMapping from '../Utils/errorMapping';
import {useAuthState} from 'react-firebase-hooks/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import shadows from '@mui/material/styles/shadows';


const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {theme} = useTheme();
  const googleProvider = new GoogleAuthProvider();

  
  const handleModalOpen =()=>{
    if(user){
        navigate('/user');
    } else {
        setOpen(true);
    }
    }
  const handleModalclose =()=>{
    setOpen(false);
  }
  const handleValueChange=(e,v)=>{
    setValue(v)
    console.log(v);
  }

  const logOut = ()=>{
    auth.signOut().then((res)=>{
        toast.success('Logged Out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }).catch((err)=>{
        toast.error('Not able to Log Out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    })
}


  const handleGoogleSignIn = ()=>{
    auth.signInWithPopup(googleProvider).then((res)=>{
        toast.success(' Google Sign-in Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            handleModalclose()
    }).catch((err)=>{
        toast.error(errorMapping[err.code] || 'Unable to sign in with Google', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    })
}
  return (
    <div className='icon-logout-div'>
      <AccountCircleIcon onClick={handleModalOpen}  style={{transform: 'scale(1.5)', cursor:'pointer'}}/>
      {user && <LogoutIcon onClick={logOut} style={{transform: 'scale(1.5)', cursor:'pointer'}} />}
      <Modal 
      open={open} 
      onClose={handleModalclose}
      style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
     }}
      >
        <div style={{width:"400px", textAlign: 'center', border:'1px solid black' , shadows}}>
          <AppBar position='static' style={{background:'transparent'}}>
            <Tabs 
            value={value}
            onChange={handleValueChange}
            variant='fullWidth'>
              <Tab label='login'  style={{color : 'white'}}></Tab>
              <Tab label='signup' style={{color : 'white'}}></Tab>
            </Tabs>
          </AppBar>
          {value===0 && <LoginForm handleClose={handleModalclose} />}
          {value === 1 && < SignUpForm handleClose={handleModalclose}/>} 
          <Box>
            <span style={{color: 'white'}}>OR</span>
            <GoogleButton style={{width : '100%', marginTop: '13px'}} onClick={handleGoogleSignIn}/>
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default AccountCircle
