import React, { useRef } from 'react'
import PageProgress from 'react-page-progress';
import './Response.css';
import Navibar from './Navibar';
import Parallax from 'react-springy-parallax'
function Respone() {
    // const ref = useRef('parallax');
    return (
        <div className="contain-response">
            <div style={{position:'sticky',top:0}}><Navibar /></div>
                
            <h1>this page is on working progress</h1>
            

            <Parallax useRef='parallax' pages={3} >

                // Add as many layers as you like
                <Parallax.Layer
                    // Page offset, or where the layer will be at when scrolled to
                    // 0 means start, 1 second page, 1.5 second and half, and so on ...
                    offset={0}
                    // Parallax factor, allows for positive and negative values
                    // Shifts the layer up or down in accordance to its offset
                    speed={0.5}
                    >

                    <span>Layers can contain anything</span>

                </Parallax.Layer>

            </Parallax>
    </div>
    )
}

export default Respone