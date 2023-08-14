import React from 'react';
import '../css/Login.css';
import { Button } from '@mui/material';
import {auth, provider} from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

  const [dispatch] = useStateValue(); 

  const signIn = () => {
    auth.signInWithPopup(provider)
        .then(result => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
        })
        .catch(err => {
          alert(err.message)
        })
  }

  return (
    <div className='login'>
        <div className='login_container'>
            <img src={require('../images/Logo.png')} alt='ACCZ'/>
            <h1>Sign In to ACCZ</h1>
            <p>Adaptive Connect & Chat Zone</p>
            <Button onClick={signIn} variant='contained'>
              Sign In with Google
            </Button>
        </div>
    </div>
  )
} 

export default Login;