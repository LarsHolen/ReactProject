import React from 'react'

import '../css/App.css';

const Footer = () => {
  return (
    <div className="footer" id="footer">
         <hr className="footerHR"/>
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <h4>Reset Design</h4>
                    <ul className="footer_list">
                        <li>Reset 20</li>
                        <li>5208 Os</li>
                        <li>Norway</li>
                        <br/>
                        <li>Tlf:</li>
                        <li>+47 94 10 10 91</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Products:</h4>
                    <ul className="footer_list">
                        <li>Jewellery</li>
                        <li>3d modelling</li>
                        <li>3d scanning</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Last col:</h4>
                    <ul className="footer_list">
                        <li>Yes. another one</li>
                        <li>Bla bla</li>
                        <li>mhmmmm</li>
                    </ul>
                </div>
                
            </div>
            <hr className="footerHR"/>
                <div>
                   <p className="footer-small">
                        &copy;{new Date().getFullYear()} Holen | All rights reserved
                   </p>
                </div>
        </div>

    </div>
  )
}

export default Footer