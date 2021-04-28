import React, { useState } from 'react'
import './Login.css'
import {db,auth} from './services/firebase'
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {login} from '../features/counter/userSlice'
import { Button, Input, TextField } from '@material-ui/core';


function SignUp() {
    const [name,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState("");
    const dispatch = useDispatch();
    const register = () => {
        if (!name){
            return alert("pls enter user name");
        }
        const userData ={
            email:email,
            password:password
        }
        auth.createUserWithEmailAndPassword(email,password).then( (userAuth) =>{
            userAuth.user.updateProfile({
                displayName:name
            }).then( () =>{
                dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name,
                }));
            }).catch(err =>{
                console.error(err);
                setErrors(err.code);
            })
        });
    };
    const LoginToApp =(e) => {
        
        
        // e.prevestDefault();       
        auth.signInWithEmailAndPassword(email,password).then( (userAuth) =>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName
            }));
        }).catch(err=>{
            console.error({error:err.code});
            setErrors(err.code);
        });
        
    }



    return (
        <div className="login">

            <h1>login page </h1>
            <form className="forms" >
                <input className="inputs" value={name} onChange={e => setUser(e.target.value)}type="text"  placeholder="username"/>
                <input className="inputs" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input className="inputs" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>                
                {/* <button >Sign In</button> */}
                <Button className="sign" style={{justifyContent:"flex-start"}} onClick={LoginToApp} >SignUp</Button>
                {/* <div className="sigin" onClick={LoginToApp}><span className="sign_in" onClick={LoginToApp}> Sign In  </span></div> */}
                <p className="paramember">Not a member?<span className="login_register" onClick={register}>Register Now</span></p>
            </form>
            {name}
        </div>
    )
}

export default SignUp
