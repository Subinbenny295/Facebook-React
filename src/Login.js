import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth } from './firebase';
import { provider } from './firebase';
import { actionTypes } from './Reducer';
import { useStateValue } from './Stateprovider';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
         
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch ({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png" />
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
            </div>
            <Button type="submit" onClick={signIn}>Sign Up</Button>
        </div>
    )
}

export default Login
