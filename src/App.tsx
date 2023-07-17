import React from "react";
import {Card} from "./components/styled/Card";
import cardImage from "./assets/Rectangle.png";

function App() {

    return (
        <div className={'wrapper'}>
            <Card img={cardImage}/>
            <Card img={cardImage}/>
            <Card img={cardImage}/>
            <Card img={cardImage}/>
        </div>
    );
}

export default App;
