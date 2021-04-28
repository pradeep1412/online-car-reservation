import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, UncontrolledCollapse } from 'reactstrap'
import { Cookies } from 'react-cookie';
import Duplicatefeed from './Duplicatefeed'
import FeedsFromContent from './FeedsFromContent'
import "./MainConten.css"
import { db } from './services/firebase'

function MainContent() {
    const parkingAgentDetails = [{
        EV: true,
        Slot_id: 0,
        companyName: "sam car parking",
        handle: "new",
        nearby:"Dinnur,hosur",
        offer: true,
        price: 399,
        pricePerHrs:20,
        rate: 3.5,
        service: true
    }];
    const [details, setDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const getparkingAgent = () => {
    // useEffect(() => {
        
        db.collection(`ParkingAgent`).orderBy('Slot_id', 'asc').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
        }));
            setDetails(data);
            
        });
    };
    // // // // console.log(parkingAgentDetails[1].companyName);
    getparkingAgent();
    // let first = details[0];
    
    
    // const parkingAgentDetail = (agdetails) => {
    //     const agent = new Cookies();
    //     agent.set('agent', agdetails);
    //     // onClick = { parkingAgentDetail({ ...details[0]}) } onClick={parkingAgentDetail({...parkingAgentDetails[0]})}
        
    // }
    return (
        <div className="mainconten">
            <div className="Feeds">
                <h3 className="headtext">Explore nearby</h3><br />
                {/* <Duplicatefeed {...parkingAgentDetails[0]}  /> */}
                <Row className="justify-content-between justify-content-center" >
                        <Col>
                            <FeedsFromContent {...details[0]}   />
                        </Col>
                        <Col>
                            <FeedsFromContent {...details[1]}  />
                        </Col>
                        <Col>
                            <FeedsFromContent {...details[2]}  />
                        </Col>
                </Row>
                 
                <UncontrolledCollapse toggler="#toggler">
                    <Row className="justify-content-between justify-content-center">
                        <Col>
                            <FeedsFromContent {...details[3]}  />
                        </Col>
                        <Col>
                            <FeedsFromContent {...details[4]}  />
                        </Col>
                        <Col>
                            <FeedsFromContent {...details[5]}  />
                        </Col>
                    </Row>
                    <Row className="justify-content-between justify-content-center">
                        <Col>
                            <FeedsFromContent {...details[6]}  />
                        </Col>
                        <Col>
                            <FeedsFromContent {...details[7]}  />
                        </Col>
                        <Col>
                        </Col>
                    </Row>  
                </UncontrolledCollapse>
                <Button /*className="more-less"*/ outline color="primary" id="toggler" style={{ right:0,bottom:10,borderRadius:50,position:'absolute' }} onClick={toggle}>
                    {!isOpen?<h6>Show More</h6>:(<h6>Show Less</h6>)}
                </Button>
                </div>
        </div>
    )
}

export default MainContent
