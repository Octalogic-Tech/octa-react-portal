import React from "react";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

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

const Portfolio = props => {
	const { key } = useParams();

	const renderSection = (section) => {
		return (
			<div className="section" key={section.key}>
				{
                    section.slides.map((slide, index) => {
					    return renderSlide(section,slide,index);
				    })
                }
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
		anchors.push("landing");
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
            slidesNavigation = {true}
            controlArrows = {false}
			anchors={getAnchors(data)}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<div className="section">
							<p>Landing Screen</p>
							<Button
								onClick={() => {
									fullpageApi.moveSectionDown();
								}}
							>
								{key}
							</Button>
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
