import React, { useState } from 'react'
import './Login.css'
import {db,auth} from './services/firebase'
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {login} from '../features/counter/userSlice'
import { Paper, TextField } from '@material-ui/core';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Button,Input,ButtonGroup } from 'reactstrap';
import HeadBlock from './headBlock';
import Navibar from './Navibar';
import { SdStorageTwoTone } from '@material-ui/icons';
import { useCookies } from 'react-cookie';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


function Login() {
    const [cookies, setCookie,removeCookie] = useCookies(['user']);
    const [name,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState("");
    const [which,setWhich] = useState("Logins");
    const dispatch = useDispatch();
    const register = () => {
        if (!name) {
            console.log({ name: "name is not defined" });
            return alert("name is not defined");            
        }
        if (!validEmailRegex.test(email)) {
            console.log({ email: "email is not valid" });
            return alert("email is not valid");
        }

        const userData ={
            email:email,
            password:password
        }

        // auth.createUserWithEmailAndPassword(email,password).then( (userAuth) =>{
        //     userAuth.user.updateProfile({
        //         displayName:name
        //     }).then( () =>{
        //         dispatch(login({
        //         email:userAuth.user.email,
        //         uid:userAuth.user.uid,
        //         displayName:name,
        //         }));
        //     }).catch(err =>{
        //         console.error(err);
        //         setErrors(err.code);
        //     })
        // });
        let userId;
        
        db.doc(`/users/${name}`).get().then(
            doc => {
                if (doc.exists) {
                    console.log({ user: 'user name is already taken' });
                } else {
                    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
                        userId = userAuth.user.uid;
                        userAuth.user.updateProfile({
                            displayName: name
                        });
                        setCookie('user',{userAuth})
                         dispatch(login({
                            email:userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName:name,
                            }));
                    }).then(() => {
                        const userCredential = {
                            handle: name,
                            email: email,
                            createdAt: new Date().toISOString(),
                            userId
                        };
                       
                        db.doc(`/users/${name}`).set(userCredential).then(() => {
                            console.log("Document is successfully created")
                        }).catch(error => {
                            console.error({ errors: error })
                        });
                        console.log("user is create");
                         window.location.href = "/Home";
                        //  window.location.reload();
                    }).catch(error => {
                        console.error({ user: error.code })
                    })
                }
            }
        );
    };
    const LoginToApp =(e) => {
        
        
        // e.prevestDefault();       
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            setCookie('user',{userAuth})
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName
            }));
            window.location.href = "/Home";
            // window.location.reload();
        }).catch(err=>{
            console.error({error:err.code});
            setErrors(err.code);
        });
        
    }
    // const Logins = () => {
    //     return (
    //         <div style = {{display:"grid"}}>
    //             <input className="inputs" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
    //             <input className="inputs" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
    //         </div>
    //     )    
    // }
    // const Registers = () => {
    //     return (
    //         <div style = {{display:"grid"}}>
    //             <input className="inputs" value={name} onChange={e => setUser(e.target.value)}type="text"  placeholder="username"/>
    //             <input className="inputs" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
    //             <input className="inputs" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
    //         </div>
    //     )  
        
    // }


    return (
        <div>
            <HeadBlock/>                
            <Navibar/>
             <div className="login">
            <Paper style = {{}}>
                <div className="box">

                    {/* <h1> {which} </h1> */}
                    <form className="forms" >      
                        <ButtonGroup>
                        <Button color="info" onClick = {e => setWhich("Logins")} style = {{height: 54}}>Login</Button>  
                        <Button color="info" onClick = {e => setWhich("Registers")} style = {{height: 54}} >Register</Button>  
                        </ButtonGroup>
                        <div className="field">
                            {
                            which === "Logins"?
                            <div className="fields"> 
                            <input className="inputs" value={email} onChange={e => setEmail(e.target.value) } type="email" placeholder="Email"  />
                            <input className="inputs" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                            <Button className="sign" style={{justifyContent:"flex-start"}} onClick={LoginToApp} >Login</Button>
                            <p className="paramember">Not a member?<span className="login_register" onClick={e => {setWhich("Registers")}}>Register Now</span></p></div>:
                            <div className="fields">
                                <input className="inputs" value={name} onChange={e => setUser(e.target.value)}type="text"  placeholder="username"/>
                                <input className="inputs" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                                <input className="inputs" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                            <Button className="sign" style={{ justifyContent: "flex-start" }} onClick={register} >Register</Button>
                                <p className="paramember">your are a member?<span className="login_register" onClick={e => {setWhich("Logins")}}>Login</span></p>
                            </div>
                        }
                        </div>                        
                    </form>
                </div>          
            </Paper>

        </div>
       </div>
    )
}

export default Login