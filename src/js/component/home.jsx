import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import {Footer} from "./Footer.jsx"
import { Navbar } from "./Navbar.jsx"
import { Card } from "./Card";
//create your first component
const Home = () => {
	return (
    <div>
		<Navbar />
    <Card/>
    <Footer/>
    </div>

	);
};

export default Home;
