import { Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import "animate.css";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';
import {Link} from 'react-router-dom';
// import { db, store } from './services/firebase';
import { Cookies } from 'react-cookie';
import { useCookies } from 'react-cookie';
import HeadBlock from './headBlock';
import {BrowserRouter as Router} from 'react-router-dom';
import Navibar from './Navibar';
import { Button } from 'reactstrap';
import { db } from './services/firebase';
const Styles = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 195px;
   margin: 5px;
 }`;
 const Styless = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container{
   
 }`;
function Booking(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [off, setOff] = useState(false);
    const [ev, setEv] = useState(false);
    const [service, setService] = useState(false);
    var array = new Array();
    
    const displace = function (startDate) {
        array = startDate.toString().split(" ")
    }
    const [cookies, setCookie,removeCookie] = useCookies();
   
    const priceCal = () => {
        try {
            let price = cookies.agent.price;
            let pricePerHrs = cookies.agent.pricePerHrs;
            if (endDate.getDate() - startDate.getDate()) {
                if((endDate.getHours() - startDate.getHours())>=0)
                    if ((endDate.getDate() - startDate.getDate()) * price + (endDate.getHours() - startDate.getHours()) * pricePerHrs < 0) {
                        return ((endDate.getDate() - startDate.getDate()) * price + (endDate.getHours() - startDate.getHours()) * pricePerHrs) * -1;
                    } else {
                        return (endDate.getDate() - startDate.getDate()) * price + (endDate.getHours() - startDate.getHours()) * pricePerHrs;
                    }
                       
                else
                    if (((endDate.getDate() - startDate.getDate()) - 1) * price + (endDate.getHours() + (24 - startDate.getHours())) * pricePerHrs < 0) {
                       return (((endDate.getDate() - startDate.getDate())-1) * price + (endDate.getHours() + (24-startDate.getHours())) * pricePerHrs) * -1;
                    } else {
                        return ((endDate.getDate() - startDate.getDate())-1) * price + (endDate.getHours() + (24-startDate.getHours())) * pricePerHrs;
                   }
            }
            else if (endDate.getHours() - startDate.getHours() && endDate.getHours()>startDate.getHours()) {
               return (endDate.getHours() - startDate.getHours()) * pricePerHrs;
            }
        }catch {
            return 0;
        }
    }
    const fun = () => {
        // const agent = new Cookies();
        // agent.remove('agent');
        // removeCookie('agent');
        window.location.reload();
    }
    let amount = priceCal();
    let offer = amount * 0.05;
    const upload = () => {
        var slots = {
            company: cookies.agent.companyName,
            amount: amount,
            startDate: startDate.toUTCString(),
            endDate: endDate.toUTCString(),
            handle: cookies.user.userAuth.user.displayName,
            service: service,
            EV: ev,
            PaymentDate: new Date().toUTCString()
        }
        db.collection(`/Slots/`).add(slots).then((date) => {
            // console.log(date.id);
            setCookie('payment', date.id);
            window.location.reload();
        }).catch(error => {
            console.error({ slots: error.code });
        })
        // window.location.reload();
    }
    return (
        <div className="booking-contain">
            <HeadBlock/>                
            <Navibar/>
            <h1 className="head-book">Select your date and time  </h1>
            {/* <h4 className="display-name"> {cookies.user.userAuth.displayName} </h4> */}
            <Grid>
                <Paper className="booking-paper" >
                    <h2 className="company-name">{cookies.agent && cookies.agent.companyName}<span onClick={fun} style={{position:"absolute",top:10,cursor:"pointer",color:"gray",textDecoration:"none",right:10,fontSize:3}}>Cancel</span></h2>
                    <div className="picker-contain">
                        <Styles>
                        <Styless>
                        <DatePicker
                            isClearable
                            filterDate={d => {
                            return new Date() <= d;
                            }} 
                            showTimeInput
                            dateFormat="d MMMM, yyyy h:mmaa"
                            placeholderText="Select Start Date"
                            selected={startDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate} 
                            onChange={date => setStartDate(date)}
                                />
                        </Styless>
                        </Styles>

                        <Styles>
                        <Styless>
                        <DatePicker
                            isClearable
                            filterDate={d => {
                            return new Date() <= d;
                            }} 
                            showTimeInput
                            dateFormat="d MMMM, yyyy h:mmaa"
                            placeholderText="Select End Date"
                            selected={endDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            onChange={date => setEndDate(date)}
                                />
                        </Styless>
                        </Styles>
                       
                    </div>
                        <h3 > <span className="start-date animate__animated animate__pulse animate__repeat-3">Start Date</span><span className="end-date animate__animated animate__pulse animate__repeat-3">End Date</span></h3>
                    <br />
                    {/* <div>Selected start date={startDate ? <> startDate.getHours </>: null}</div>
                    <br/>
                    <div>Selected end date={endDate ? endDate.getHours : null}</div> */}
                    {cookies.agent && <div>
                    {cookies.agent.EV && <div style={{ display: 'flex' }}>  <h6>ev is available</h6><input type="checkbox" onChange={e => { setEv(!ev); !ev && alert("Additional charge will add,base on the amount of current consumed");}} checked={ev} /></div>}
                    {cookies.agent.offer&&<div style={{display:'flex'}}>  <h6>offer is available</h6><input type="checkbox" onChange={e => setOff(!off)} checked={off} /></div>} 
                    {cookies.agent.service &&<div style={{display:'flex'}}>  <h6>service is available</h6><input type="checkbox" onChange={e => {setService(!service);!service && alert("Air check and Car cleaning will done for your car");}} checked={service} /></div>}
                     </div>}
                    {/* <Router refresh><a href="/Payment"><Button color="primary" className="pay-amt" onClick={upload} >PAY ₹{off ? amount - offer : amount}</Button></a></Router> */}
                    <Router><Link to="/Payment"><Button color="primary" className="pay-amt" onClick={upload} >PAY ₹{off ? amount- offer:amount}</Button></Link></Router>
                </Paper>
            </Grid>
            
        </div>
    )
}

export default Booking
