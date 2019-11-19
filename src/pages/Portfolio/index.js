import React, { useState, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useLocation } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import faker from "faker";
import Icon from "@mdi/react";
import { mdiMenuOpen, mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

import colors from "../../styles/colors";

import Landing from "../../sections/Landing";
import WebAppPrimary from "../../sections/WebAppPrimary";
import MobileAppPrimary from "../../sections/MobileAppPrimary";
import EmergingAppPrimary from "../../sections/EmergingAppPrimary";

import Thumbnail from "../../components/Thumbnail";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import mobileapp from "../../assets/images/projects/mobileapp.png";
import webapp from "../../assets/images/projects/webapp.png";

const data = {
	name: "John",
	components: [
		{
			_id: faker.random.uuid(),
			category: "Web",
			name: "Refined Concrete Sausages",
			key: "refined-concrete-sausages",
			media: webapp
		},
		{
			_id: faker.random.uuid(),
			category: "Mobile",
			name: "Unbranded Concrete Hat",
			key: "unbranded-concrete-hat",
			media: mobileapp
		},
		{
			_id: faker.random.uuid(),
			category: "Emerging",
			name: "Sleek Metal Keyboard",
			key: "sleek-metal-keyboard",
			media: webapp
		},
		{
			_id: faker.random.uuid(),
			category: "Mobile",
			name: "Pretty Landing Page",
			key: "pretty-landing-page",
			media: mobileapp
		}
	]
};

const Portfolio = ({ toggleTheme, currentTheme }) => {
	const [activeSection, setActiveSection] = useState("landing");
	const [activeSectionType, setActiveSectionType] = useState("");
	const [isSideBarOpen, setSideBarOpen] = useState(false);
	const [fullPageApi, setFullPageApi] = useState(false);
	const currentThemeType = currentTheme.palette.type;
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const section = useLocation().hash.slice(1);
	if (section) {
		if (section !== activeSection) {
			setActiveSection(section);
		}
	}

	const renderSection = (section, fullpageApi) => {
		let component = null;
		switch (section.category) {
			case "Web":
				component = (
					<div
						className="section"
						key={section.key}
						anchor={section.key}
					>
						<WebAppPrimary
							key={section.key}
							data={section}
							activeSection={activeSectionType}
							fullpageApi={fullpageApi}
						/>
					</div>
				);
				break;
			case "Mobile":
				component = (
					<div
						className="section"
						key={section.key}
						anchor={section.key}
					>
						<MobileAppPrimary
							key={section.key}
							data={section}
							activeSection={activeSectionType}
							fullpageApi={fullpageApi}
						/>
					</div>
				);
				break;
			case "Emerging":
				component = (
					<div
						className="section"
						key={section.key}
						anchor={section.key}
					>
						<EmergingAppPrimary
							key={section.key}
							data={section}
							activeSection={activeSectionType}
							fullpageApi={fullpageApi}
						/>
					</div>
				);
				break;
			default:
				component = "Saturday";
		}
		return component;
	};

	const getAnchors = data => {
		let anchors = [];
		anchors.push("landing");
		data.components.forEach(function(project) {
			anchors.push(project.key);
		});
		return anchors;
	};

	const Menu = fullpageApi => {
		return (
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
							navBarScroll();
						}}
						title="Menu Open"
						size={1.5}
					/>
				</div>
				<SwipeableDrawer
					id="right-sidebar"
					anchor="right"
					open={isSideBarOpen}
					onClose={() => {
						setSideBarOpen(false);
					}}
					onOpen={() => {
						setSideBarOpen(true);
						navBarScroll();
					}}
					disableDiscovery={iOS}
				>
					<div id="menu" className={css(styles.sidebar)}>
						{fullPageApi ? (
							<Fragment>
								<Thumbnail
									fullpageApi={fullPageApi}
									key={faker.random.uuid()}
									activeSection={activeSection}
									setSideBarOpen={setSideBarOpen}
									component={{
										_id: faker.random.uuid(),
										category: "Web",
										name: "Landing",
										key: "landing",
										media: webapp
									}}
								/>
								{data.components.map((component, index) => {
									return (
										<Thumbnail
											fullpageApi={fullPageApi}
											key={component._id}
											activeSection={activeSection}
											setSideBarOpen={setSideBarOpen}
											component={component}
										/>
									);
								})}
							</Fragment>
						) : (
							<Fragment></Fragment>
						)}
					</div>
				</SwipeableDrawer>
			</div>
		);
	};

	const navBarScroll = () =>{
		setTimeout(function(){ 
			const element = document.getElementById(activeSection);
			element.scrollIntoView({behavior: 'smooth'});
		 }, 100);
		
	}



	return (
		<Fragment>
			<Menu fullpageApi={fullPageApi} />
			<ReactFullpage
				licenseKey={"YOUR_KEY_HERE"}
				scrollingSpeed={1000}
				dragAndMove={true}
				navigation={true}
				navigationPosition={"right"}
				slidesNavigation={true}
				controlArrows={false}
				anchors={getAnchors(data)}
				normalScrollElements={"#right-sidebar"}
				menu={"#menu"}
				onLeave={(origin, destination, direction) => {
					data.components.forEach((item, index)=>{
						if(destination.anchor===item.key){
							setActiveSectionType(item.category);
						}
					});
					
				}}
				render={({ state, fullpageApi, onLeave }) => {
					setFullPageApi(fullpageApi);
					return (
						<ReactFullpage.Wrapper>
							<div className="section">
								<Landing
									key={"landing"}
									anchor={"landing"}
									fullpageApi={fullpageApi}
									toggleTheme={toggleTheme}
								/>
							</div>
							{data.components.map((component, index) => {
								return renderSection(component, fullpageApi);
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
	},
	sidebar: {
		width: "25rem",
		"@media only screen and (max-width: 600px)": {
			width: "15rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			width: "20rem"
		}
	}
});

export default Portfolio;
