import React, { useState } from 'react'
import Footer from './Footer';
import HeadBlock from './headBlock';
import MainContent from './MainContent';
import Navibar from './Navibar';
import SubNavi from './SubNavi';
function Home() { 
    const [scolls,setScolls]=useState({});
    return (
        <div>
            <HeadBlock/>                
            <Navibar/>
           <SubNavi />
           <MainContent/>
           {/* {scolls} */}
           <Footer />
        </div>
    )
}

export default Home
