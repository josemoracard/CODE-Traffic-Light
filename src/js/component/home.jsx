import React, { useState, useEffect } from "react";
import "../../styles/index.css";


//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("");

	const handleLightClick = (light) => {
        if(activeLight === light) {
            setActiveLight("");
        }else{
            setActiveLight(light);
        }
    }


    return (
		<div>
			<div className="traffic-light-top">
        <div className="traffic-light-container ">
            <div
                className={`light red ${activeLight === 'red' ? 'active' : ''}`}
                onClick={() => handleLightClick("red")}
            ></div>
            <div
                className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
                onClick={() => handleLightClick("yellow")}
            ></div>
            <div
                className={`light green ${activeLight === 'green' ? 'active' : ''}`}
                onClick={() => handleLightClick("green")}
            ></div>
			</div>
			</div>
        </div>
    );
}

export default Home;
