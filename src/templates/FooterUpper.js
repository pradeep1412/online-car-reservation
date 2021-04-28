import { Avatar, Link } from '@material-ui/core'
import { Facebook, Instagram } from '@material-ui/icons'
import React from 'react'
import './footerUpper.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function FooterUpper() {
    return (
        <div >
            <ul className="listCS justify-content-around justify-content-between align-content-center">
                <li>
                    <h3 className="headlist">Community</h3>
                    <p className="paralist text-center">follow us on</p>
                    <div className="facebookText text-center">
                    <Facebook className="facebook"/><br/>
                    <Link className="links">OnlineCPR</Link><br/>
                    </div>    
                    <div className="instgramText text-center">
                        <Instagram className="instagram"/><br/>
                        <Link className="links">OnlineCPR</Link>
                    </div>
                    
                </li>
                <li>
                    <h3 className="headlist">Support</h3><br/>
                    <Link className="links"><p className="paralist">Our COVID-19 Respone</p></Link> 
                    <Link className="links"><p className="paralist">Help Center</p></Link>
                    <Router refresh><a href="/Cancellation"><Link className="links"><p className="paralist">Cancellation Options</p></Link></a></Router>
                </li>
            </ul>
        </div>
    )
}

export default FooterUpper
