import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Landing from "../../sections/Landing";
import WebAppPrimary from "../../sections/WebAppPrimary";
import MobileAppPrimary from "../../sections/MobileAppPrimary";

import Button from "@material-ui/core/Button";

const data = {
	name: "John",
	projects: [
		{
			name: "Project 1",
			key: "project-1",
			slides: [
				{
					name: "Slide 1"
				},
				{
					name: "Slide 2"
				}
			]
		},
		{
			name: "Project 2",
			key: "project-2",
			slides: [
				{
					name: "Slide 1"
				}
			]
		}
	]
};

const Portfolio = ({ toggleTheme }) => {
	const [activeSection, setActiveSection] = useState(data.projects[0].key);

	const renderSection = section => {
		return (
			<div className="section" key={section.key} anchor={section.key}>
				{section.slides.map((slide, index) => {
					return renderSlide(section, slide, index);
				})}
			</div>
		);
	};

	const renderSlide = (section, slide, index) => {
		return (
			<div className="slide" key={index}>
				<Button variant="contained" color="primary">
					{slide.name}
				</Button>
				<p>{section.name}</p>
				<p>{slide.name}</p>
			</div>
		);
	};

	const getAnchors = data => {
		let anchors = [];
		anchors.push("landing-1");
		anchors.push("web-app-primary");
		anchors.push("mobile-app-primary");
		data.projects.forEach(function(project) {
			anchors.push(project.key);
		});
		return anchors;
	};
	return (
		<ReactFullpage
			licenseKey={"YOUR_KEY_HERE"}
			scrollingSpeed={1000}
			dragAndMove={true}
			navigation={true}
			navigationPosition={"right"}
			slidesNavigation={true}
			controlArrows={false}
			anchors={getAnchors(data)}
			onLeave={(origin, destination, direction) => {
				setActiveSection(destination);
			}}
			render={({ state, fullpageApi, onLeave }) => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<Landing
								key={"landing-1"}
								anchor={"landing-1"}
								fullpageApi={fullpageApi}
								toggleTheme={toggleTheme}
							/>
						</div>
						<div className="section">
							<WebAppPrimary
								key={"web-app-primary"}
								anchor={"web-app-primary"}
								activeSection={activeSection}
								fullpageApi={fullpageApi}
								toggleTheme={toggleTheme}
							/>
						</div>
						<div className="section">
							<MobileAppPrimary
								key={"mobile-app-primary"}
								anchor={"mobile-app-primary"}
								activeSection={activeSection}
								fullpageApi={fullpageApi}
								toggleTheme={toggleTheme}
							/>
						</div>
						{data.projects.map((project, index) => {
							return renderSection(project);
						})}
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default Portfolio;
