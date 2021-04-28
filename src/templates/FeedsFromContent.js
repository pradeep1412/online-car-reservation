import { Grid ,Paper} from '@material-ui/core'
import { Star } from '@material-ui/icons'
import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react'
import Rating from 'react-rating'
import {useSelector,useDispatch} from 'react-redux'
import "./FeedsFromContent.css"
import { Cookies } from 'react-cookie';
import { Badge, UncontrolledTooltip } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Booking from './Booking';
import { selectDetails, updateDetails } from '../features/counter/detailsSlice';
function FeedsFromContent(props){
    // const [rating, setRating] = useState(props.rate);
    const user = useSelector(selectDetails)
    const dispatch = useDispatch();
    const stores = ()=>{
        dispatch(updateDetails({
            EV: props.EV,
            Slot_id: props.Slot_id,
            companyName: props.companyName,
            nearby:props.nearby,
            offer: props.offer,
            price: props.price,
            rate: props.rate,
            service: props.rate
        }))
    }
    const parkingAgentDetail = () => {
        const agent = new Cookies();
        agent.set('agent', props);
        // onClick = { parkingAgentDetail({ ...details[0]}) } onClick={parkingAgentDetail({...parkingAgentDetails[0]})}
        
    }
    return (
        <div className="Feedconten" onClick={parkingAgentDetail}>
            {!props.rate ? <h6>loading...</h6> : (
                <Router >
                    <a href="/Booking" style={{textDecoration:"none"}} onClick={stores}>
                        <Paper className="paper">
                            <h4 className="local">{props.companyName} {props.EV ? <Badge color="primary" pill id="EV" className="badge">EV Support</Badge> : ""}{props.service ? <Badge color="info" pill className="badge" id="service">Service</Badge> : ""}{props.offer ? <Badge color="warning" pill className="badge" id="offer">5% OFF</Badge> : ""}</h4>
                            <UncontrolledTooltip placement="top" target="EV">Charge your electric Car</UncontrolledTooltip>
                            <UncontrolledTooltip placement="top" target="service">Basic services obtain </UncontrolledTooltip>
                            <UncontrolledTooltip placement="top" target="offer">cashback of 5% of your bill</UncontrolledTooltip>
                            <div className="starcontent">
                            <ReactStars
                                count={5}
                                value={props.rate}
                                size={20}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            </div>
                            <p className="paracent align-content-center">Book slot</p>
                            <h4 className="nearby">{props.nearby}</h4>
                            <h4 style={{textAlign:"end"}}>₹{ props.price }</h4>
                        </Paper>
                    </a>
                    {/* <Switch>
                        <Route path = "/Booking">
                            <Booking />
                        </Route>
                    </Switch> */}
                 </Router>    
            )}    
        </div>
    )
}



export default FeedsFromContent
