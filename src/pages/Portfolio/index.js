import React, { useState, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { StyleSheet, css } from "aphrodite";
import Icon from "@mdi/react";
import { mdiMenuOpen, mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

import colors from "../../styles/colors";

import Landing from "../../sections/Landing";
import WebAppPrimary from "../../sections/WebAppPrimary";
import MobileAppPrimary from "../../sections/MobileAppPrimary";
import EmergingAppPrimary from "../../sections/EmergingAppPrimary";

import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

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

const Portfolio = ({ toggleTheme, currentTheme }) => {
	const [activeSection, setActiveSection] = useState(data.projects[0].key);
	const [isSideBarOpen, setSideBarOpen] = useState(false);
	const currentThemeType = currentTheme.palette.type;

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
		anchors.push("emerging-app-primary");
		data.projects.forEach(function(project) {
			anchors.push(project.key);
		});
		return anchors;
	};

	const Menu = () => (
		<div className={css(styles.header)}>
			<div className={css(styles.header_content)}>
				{currentThemeType === "dark" ? (
					<Icon
						className={css(
							styles.header_icon,
							styles.header_icon_dark
						)}
						path={mdiWhiteBalanceSunny}
						onClick={() => {
							toggleTheme();
						}}
						title="React"
						size={1.5}
					/>
				) : (
					<Icon
						className={css(
							styles.header_icon,
							styles.header_icon_light
						)}
						path={mdiWeatherNight}
						onClick={() => {
							toggleTheme();
						}}
						title="React"
						size={1.5}
					/>
				)}

				<Icon
					className={css(
						styles.header_icon,
						currentThemeType === "dark"
							? styles.header_icon_dark
							: styles.header_icon_light
					)}
					path={mdiMenuOpen}
					onClick={() => {
						setSideBarOpen(true);
					}}
					title="Menu Open"
					size={1.5}
				/>
			</div>
			<SwipeableDrawer
				anchor="right"
				open={isSideBarOpen}
				onClose={() => {
					setSideBarOpen(false);
				}}
				onOpen={() => {
					setSideBarOpen(true);
				}}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
			>
				<p>Side List</p>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						
						/* fullpageApi.moveSectionDown(); */
						
					}}
				>
					Scroll Down
				</Button>
			</SwipeableDrawer>
		</div>
	);

	return (
		<Fragment>
			<Menu />
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
								/>
							</div>
							<div className="section">
								<MobileAppPrimary
									key={"mobile-app-primary"}
									anchor={"mobile-app-primary"}
									activeSection={activeSection}
									fullpageApi={fullpageApi}
								/>
							</div>
							<div className="section">
								<EmergingAppPrimary
									key={"emerging-app-primary"}
									anchor={"emerging-app-primary"}
									activeSection={activeSection}
									fullpageApi={fullpageApi}
								/>
							</div>
							{data.projects.map((project, index) => {
								return renderSection(project);
							})}
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		position: "fixed",
		top: "0",
		zIndex: "100"
	},
	header_content: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end"
	},
	header_icon: {
		cursor: "pointer",
		margin: "1rem 1rem"
	},
	header_icon_dark: {
		fill: colors.gray.three
	},
	header_icon_light: {
		fill: colors.gray.six
	}
});

export default Portfolio;
