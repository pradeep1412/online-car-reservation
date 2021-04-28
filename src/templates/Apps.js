import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Respone from './Respone';
import App from "../App"
import Host from './Host';
import About from './About';
import Booking from './Booking';
import Payment from './Payment';
import Cancellation from './Cancellation';
import StartAnimation from './StartAnimation';
// import Booking from './Booking';

function Apps() {
    return (
        <div>
        <Router>
            <Switch>
                {/* <Route path = "/Response">
                  <Respone />
                </Route> */}
                <Route path = "/Login"> 
                  <Login/>
                </Route>
                <Route path = "/Host">
                    <Host/>
                    </Route>
                <Route path = "/Booking">
                    <Booking/>
                </Route>
                <Route path = "/About">
                    <About/>
                </Route>
                <Route path = "/Booking">
                    <Booking />
                </Route>
                <Route path = "/Payment">
                    <Payment />
                </Route>
                {/* <Route path = "/Animation">
                    <StartAnimation />
                </Route>   */}
                 <Route path = "/Home">
                    <App/>
                </Route>
                <Route path = "/Cancellation">
                    <Cancellation/>
                </Route>
                <Route path = "">
                    <StartAnimation/>
                </Route>
            </Switch>
          </Router>  
        </div>
    )
}

export default Apps