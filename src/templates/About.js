import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { db } from './services/firebase'
import './Booking.css';
import HeadBlock from './headBlock';
import Navibar from './Navibar';
import './About.css';
import { Table } from 'reactstrap';

function About() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [details, setDetails] = useState([]);
    const updateBio = function (){
        db.collection(`Slots`).where('handle','==',cookies.user.userAuth.user.displayName).get().then(data =>{
            let det = [];
            // console.log(data);
            data.forEach(doc => {
                // setCookie('userdetails', doc.data());
                // setCookie('slotsdetails')
                det.push(doc.data());
            })
            setDetails(det);
        })
    }
    updateBio();
    const can = (e) => {
        let date = new Date().toUTCString()
        let star = e.starDate;
        let end = e.endDate;
        if (e.startDate < date && e.endDate < date) {
            alert("You cann't cancel ticket because is expired");
        } else if (e.startDate < date && e.endDate > date) {
            alert("You may not get full amount");
        }
    }
    
    return (
        <div className="booking-contain" style={{position:'relative'}}>
            <HeadBlock/>                
            <Navibar />
            <h1 className='head-about'>Booking history</h1>
            <Grid>
                <Paper className="booking-paper">
                    <div className="head">
                    {details.length == 0 ? <h6 >loading...</h6> : (
                        <Table hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Company</th>
                                <th>Amount</th>
                                <th>PaymentDate</th>
                                <th>cancelRequest</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.map((value, index) => {
                                    return (
                                        <tr key={index} onClick={() =>can(value)}>
                                            <th scope="row">{index}</th>
                                            <td>{value.company}</td>
                                            <td>{value.amount}</td>
                                            <td>{value.PaymentDate}</td>
                                            {value.cancelRequest &&<td>Inprocess</td>}
                                        </tr>
                                    )                                    
                                })}
                            </tbody>    
                        </Table>
                    )}
                    </div>
                </Paper>
            </Grid>
            
        </div>
    )
}

export default About
