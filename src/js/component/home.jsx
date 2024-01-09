import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";
//include images into your bundle

import { Cards } from "./Cards.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
import {Footer} from "./Footer.jsx"
import { Navbar } from "./Navbar.jsx"

//create your first component
const Home = () => {
	// Codigo para crear el placeholder de las 4 cards
	let arrayPlaceholder = [
		{ title: 'Bootstrap', subtitle: 'Bootstrap is a free front-end framework, with the purpose of making web development faster and easier.', label: 'Bootstrap', image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png' },
		{ title: 'Javascript', subtitle: 'JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.', label: 'Learn Javascript', image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg' },
		{ title: 'React', subtitle: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com.', label: 'Learn React', image: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },
		{ title: 'Python', subtitle: 'Somos el mejor grupo de 4Geeks Academy gracias a CarlosAtanesxx.', label: 'Learn Python', image: 'https://pbs.twimg.com/media/FHAiKCeXsAASzF8.jpg:large' },
	];

	return (
		<div>
		<Navbar />
    <Jumbotron/>
    <Cards valores={arrayPlaceholder} />
    <Footer/>
    </div>
	);
};

export default Home;
