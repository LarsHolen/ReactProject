import React from 'react'


export const AboutPage = () => {
  return (
    <div className="app">
            <h1 className="newsHeader" >About us</h1>
            <div className="about-div">
                <h2 className="about-list-header">Reset Design</h2>
                <ul className="about-list">
                    <li>Reset 20</li>
                    <li>5208 Os</li>
                    <li>Norway</li>
                    <br/>
                    <li>Tlf:</li>
                    <li>+47 94 10 10 91</li>
                </ul>
            </div>
            <img className="newsImage" src={require('../images/barn.jpg')} alt="The barn"/>
            <p>This is where the magic happen.  In an 100+ year old barn we make jewellery, weld steel or do woodwork.  A small heaven for the 
              creative mind.
            </p>
            <img className="newsImage" src={require('../images/us.jpg')} alt="The barn"/>
            <p>The two of us.
            </p>
        </div>
  )
}
export default AboutPage;
