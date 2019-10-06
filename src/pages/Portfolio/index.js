import React from "react";
// import cx from 'classnames';
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
// import style from './style.module.scss';

const data = {
	name: "John",
	projects: [
		{
            name: "Project 1",
            key: 'project-1'
		},
		{
            name: "Project 2",
            key: 'project-2'
		}
	]
};

const Portfolio = props => {
	const { key } = useParams();

	const renderSection = (section) => {
		return (
			<div className="section">
				<p>{section.name}</p>
			</div>
        );
    };
    
    const getAnchors = (data) => {
        let anchors = [];
        anchors.push('landing');
        data.projects.forEach(function(project) {
            anchors.push(project.key);
          });
        return anchors
    } 
	return (
		<ReactFullpage
			licenseKey={"YOUR_KEY_HERE"}
			scrollingSpeed={1000}
            dragAndMove = {true}
            navigation = {true}
            navigationPosition = {'right'}
            slidesNavigation = {true}
            anchors = {getAnchors(data)}
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
