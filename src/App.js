import React, { useEffect } from 'react';
import './App.css';
import HeadBlock from './templates/headBlock';
import "animate.css"
// import Footer from './templates/Footer';
// import MainContent from './templates/MainContent';
import Navibar from './templates/Navibar';
import { Cookies } from 'react-cookie';
// import SubNavi from './templates/SubNavi';
import {login, logout, selectUser} from './features/counter/userSlice'
import Login from "./templates/Login"
import {useSelector,useDispatch} from 'react-redux'
// import { auth } from './templates/services/firebase';
import Home from './templates/Home';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sample from './templates/Sample';
import { useCookies } from 'react-cookie';
import StartAnimation from './templates/StartAnimation';
import {Redirect} from 'react-router-dom'


function App() {
  const user = useSelector(selectUser)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //     auth.onAuthStateChanged((userAuth)=>{
  //       if (userAuth){
  //         dispatch(login({
  //           email:userAuth.email,
  //           uid:userAuth.uid,
  //           displayName:userAuth.displayName,          
  //         }));
  //       }
  //       else{
  //        dispatch(logout());
  //        }
  //       })
  //   })
  //   dispatch(logout());
  //   auth.signOut();

  
  // Navibar.js !user
  // App.js !user
  // RightNav.js { user.displayName }
  // Home.js // <MainContent />
  
  const [cookies, setCookie,removeCookie] = useCookies();
  // const users = () => {
  //   auth.onAuthStateChanged((userAuth) => {
  //           if (userAuth) {
  //               setCookie('user', {userAuth})
  //          }
  //      })
  // }
  // const token = () => {
  //   auth.onIdTokenChanged((userAuth) => {
  //     if (userAuth) {
  //       if (userAuth.getIdToken()) {
  //         userAuth.getIdToken().then((token) => {
  //         console.log(token);
  //         })} 
  //     }  
  //   })
  // }
  // token();
  // removeCookie("user")
  // users();
  // const agent = new Cookies();
  // agent.set('agent','')
  // agent.remove('agent')
  // setCookie('agent', '');
  return (
    <div className="App" >
      {!cookies.user ?<div><Redirect to='/Login'/> </div>:(
        <div className="appbody">
          <Home />
        </div>
      ) } 
      {/* <Sample/> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;