import React ,{ useForceUpdate } from 'react';
import  './headBlock.css';
import "animate.css";
import {Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


function headBlock() {
    
    return (
        <div>
                <div className="block">
                    <span className="span-response">
                        <Router refresh>
                            <a href='https://www.mohfw.gov.in/' ><h1 className="textblock animate__animated animate__bounce " >Get the latest on our COVID-19 respone</h1></a>
                        </Router>                  
                    </span>
                    
                    {/* </a> */}
                </div>

                {/* <div className="conten">
                    <Router>
                    <Switch>
                        <Route path ="/Respone">
                            <Respone />
                        </Route>
                    </Switch>
                    </Router>
                </div> */}

        </div>
    )
}

export default headBlock
