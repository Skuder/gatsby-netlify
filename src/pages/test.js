import React from 'react';
import {navigate} from 'gatsby'
import Header from '../components/Header'
const Test = () => (
<div>
    <Header title="Header of test page"></Header>
    <h1>This is a test page!</h1>
    <h1>This is a test page2!</h1>
    <button onClick={()=>navigate("/")}> Navigate to Homepage</button>
    <br/>
    <button onClick={()=>console.log("navigate")}> Navigate on console</button>
</div>
)

export default Test;