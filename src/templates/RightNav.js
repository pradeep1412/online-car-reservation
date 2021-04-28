import { Avatar, Link } from '@material-ui/core'
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { logout, selectUser } from '../features/counter/userSlice';
import {auth} from './services/firebase'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { removeDetails } from '../features/counter/detailsSlice';
import { useCookies } from 'react-cookie';
import { Cookies } from 'react-cookie';

function RightNav() {
    const [cookies, setCookie,removeCookie] = useCookies();
    const dispatch = useDispatch();
    const logoutApp = () => {
        // const agent = new Cookies();
        dispatch(logout());
        dispatch(removeDetails());
        auth.signOut();
        removeCookie('payment');
        removeCookie('agent');
        removeCookie('user');
        // agent.remove('agent');
        
    }
    const user = useSelector(selectUser)
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    return (
        
        <div className="Navi_right justify-content-center">
            <Router refresh>
                <p className="parahost">
                    <a href="/Host" className="parahost">Become a host</a>                
                </p>
            </Router>
            <div className="avartersplit">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction='left'>
                    
                    {/* <DropdownToggle caret split color="secondary" size="sm" aria-haspopup> */}
                        {/* <Link onClick={logoutApp}> */}
                        
                        {/* </Link> */}
                    {/* </DropdownToggle> */}
                    <DropdownToggle color="none" className="toggle">
                        <Avatar className="avatar"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled>{cookies.user && cookies.user.userAuth.user.displayName}</DropdownItem>
                        {/* <DropdownItem disabled>Name</DropdownItem> */}
                        <Router refresh>
                            <a href="/About" className="drop-about"><DropdownItem>About</DropdownItem></a>
                         </Router>
                        
                        <DropdownItem divider />
                        <Router refresh>
                        <a href="/Home" style={{textDecoration:"none"}}><DropdownItem onClick ={logoutApp}>Logout</DropdownItem></a></Router>
                    </DropdownMenu>
                </ButtonDropdown> 
            </div>           
        </div>
    )
}

export default RightNav
