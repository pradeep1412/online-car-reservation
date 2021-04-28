import React, { useState } from 'react'
import HeadBlock from './headBlock';
import "animate.css";
import Navibar from './Navibar';
import './Host.css'
import { Grid, Paper } from '@material-ui/core';

function Host() {
    const [companyName, setCompanyName] = useState("");
    const [nearby, setNearby] = useState("");
    const [handle, setHandle] = useState("");
    const [EV, setEV] = useState(false);
    const [offer, setOffer] = useState(false);
    const [service, setservice] = useState(false);
    const [rate, setrate] = useState("");
    const [pricePerHrs, setPricePerHrs] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div>
            <HeadBlock/>                
            <Navibar />
            <div className="host-contain">
                <Grid>
                    <h1 style={{textAlign:'center',alignContent:'center'}}> This is page not for normal user</h1>
                </Grid>
            </div>
        </div>
    )
}

export default Host
