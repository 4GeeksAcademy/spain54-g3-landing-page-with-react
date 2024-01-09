import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Footer} from "./Footer.jsx"
import { Navbar } from "./Navbar.jsx"
import { Card } from "./Card";
//create your first component
const Home = () => {
	return (
    <div>
		<Navbar />
    <Jumbotron/>
    <Card/>
    <Footer/>
    </div>
	);
};

export default Home;
