import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import How from './How';





const HowContainer = () => {

    
    const [how, setHow] = useState([]);
    const API_URL = 'https://larsholen.com/public/loadHow.php';


// Example POST method implementation:
async function getHow(url = '', data = {}) {
    // Default options are marked with *
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers:{
        "Content-Type": "application/json"
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

    useEffect(() =>{
        getHow(API_URL, { 'offset': '0', 'limit': '10'}).then(data => {
            setHow(data);
        });
    }, []);

    return (
        <div className="app">
            <h1 className="newsHeader" >How its done</h1>

            {how?.length > 0
            ?(
                <div className="howContainer">
                {how.map((how, index) =>
                 (
                    <How key={index} how={how} />  
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Nothing found</h2>
                </div>
            )}
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default HowContainer;