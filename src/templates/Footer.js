import React from 'react'
import './footer.css'
import FooterUpper from './FooterUpper'
import FooterBottom from './FooterBottom'
function Footer() {
    return (
        <div className="FooterMain ">
            <FooterUpper/>
            <hr/>
            <FooterBottom/>
        </div>
    )
}

export default Footer
