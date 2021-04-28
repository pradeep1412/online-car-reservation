import React, { useState } from 'react'
import HeadBlock from './headBlock';
import Navibar from './Navibar';
import './Booking.css';
import './Cancellation.css';
import { Grid, Paper } from '@material-ui/core';
import { Input ,Button} from 'reactstrap';
import { db } from './services/firebase';
function Cancellation() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);
    const [value, setValue] = useState(0);
    const searchfun = function () {
        if (search == '') return 0;
        db.doc(`/Slots/${search}`).get().then((data) => {
            if (data.exists) {
                setResult(true);
            }
            
        }).catch(error => {
            console.error("Error removing document: ", error);
            setResult(false);
            // setValue(1);
        })
    }
    const detelefun = () => {
        alert("Amount will be reduce base on your ticket details")
        db.doc(`/Slots/${search}`).update({
                            cancelRequest: true
                        })
                        .then(() => {
                            console.log("Document successfully updated!");
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
    }
    return (
        <div className="booking-contain">
            <HeadBlock/>                
            <Navibar />
            <h1 style={{textAlign:"center"}}>cancellation avaliable...</h1>
             <Grid>
                <Paper className="booking-paper">
                    <span style={{position:'absolute',top:5,right:25,cursor:"pointer",color:"gray",textDecoration:"none"}} onClick= {detelefun}> ok </span>
                    <span onClick={() =>  window.location.reload()} style={{position:'absolute',top:5,left:25,cursor:"pointer",color:"gray",textDecoration:"none"}}>cancel</span>
                    <div className="search-go"><Input type='search' style={{width:400}} onChange={e => { setSearch(e.target.value) }} /><Button color="primary" className='button-go' onClick={searchfun}>GO</Button></div>
                    <br />
                    <br />
                    {/* {value == 1 && <div> */}
                        {result ? <h6 style={{ textAlign: "center" }}>Match found... </h6> : <h6 style={{ textAlign: "center" }}>not found...</h6>}
                    {/* </div>} */}
                    
                </Paper>
            </Grid>
            
        </div>
    )
}

export default Cancellation
