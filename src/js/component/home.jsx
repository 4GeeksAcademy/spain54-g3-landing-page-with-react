import React from "react";

//include images into your bundle

import { Navbar } from "./Navbar.jsx"
import { Card } from "./Card";
//create your first component
const Home = () => {
	return (
    <div>
		<Navbar />
    <Card/>
    <div/>
	);
};

export default Home;
