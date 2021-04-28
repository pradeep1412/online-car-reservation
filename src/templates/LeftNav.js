import React from 'react'
import "./Navibar.css"
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
function LeftNav() {
    return (
        <div className="Navi_left justify-content-between">
            <div className="logo_name">
                < DirectionsCarIcon className="logo"/>
                <Router>
                    <a href= "/Home" className="logo_name ">
                    <h4 className="lgname">Online Car Parking System</h4>
                    </a>
                </Router>               
            </div>
            <span className="search">
                <div className="nav_search">
                   <SearchIcon />
                    <input type="text" placeholder="Search..." className="inputvalue"/>
                   <LocationSearchingIcon />
                </div>
            </span>                    
        </div>
    )
}

export default LeftNav
