import React from "react";
import { StyleSheet, css } from "aphrodite";
import faker from "faker";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircle, mdiReact } from "@mdi/js";

import "html5-device-mockups";

import base from "../../styles/base";
import colors from "../../styles/colors";
import responsive from "../../styles/responsive";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Fab from "@material-ui/core/Fab";
import "../../styles/overrides.css";
import {
	heightKeyframes,
	translateKeyFrames
} from "../../styles/stripeAnimations";

import webapp from "../../assets/images/projects/webapp.png";

let isActive = false;

const navDotStyling = (currentValue) => {
	const classes = [
		"web-app-container",
		"mobile-app-container",
		"emerging-app-container"
	];
	classes.map(value => {
		if(currentValue===value){
			document.body.classList.add(value);	
		}else{
			document.body.classList.remove(value);
		}
		return false;
	});
};

const EmergingAppPrimary = ({
	anchor,
	data,
	activeSection,
	fullpageApi,
}) => {
	// const [isThemeDark, setIsThemeDark] = useState(false);
	if (activeSection.anchor === anchor) {
		// This allows us to run animations on first load of the section
		isActive = true;
		navDotStyling("emerging-app-container");
	}

	

	function generate(element) {
		return [0, 1, 2].map((value, index) => (
			<ListItem key={index}>
				<ListItemIcon>
					<KeyboardArrowRightIcon />
				</ListItemIcon>
				<ListItemText primary={faker.lorem.sentences(2)} />
			</ListItem>
		));
	}

	return (
		<Box className={css(styles.container)}>
			<div className={css(styles.strip_wrapper)}>
				<div
					className={css(
						styles.strip_large,
						styles.skew,
						isActive && styles.slideIn_large
					)}
				></div>
				<div
					className={css(
						styles.strip_medium,
						styles.skew,
						isActive && styles.slideIn_regular
					)}
				></div>
				<div
					className={css(
						styles.strip_small,
						styles.skew,
						isActive && styles.slideIn_small
					)}
				></div>
			</div>
			<div className={css(styles.content_wrapper)}>
				<div className={css(styles.frame_wrapper)}>
					<div className="device-wrapper emerging_app">
						<div
							className="device"
							data-device="iMac"
							data-orientation="portrait"
							data-color="black"
						>
							<div className="screen">
								<img
									className={css(styles.frame_image)}
									src={webapp}
									alt="project"
								/>
							</div>
							<div className="button"></div>
						</div>
					</div>
				</div>
				<div className={css(styles.details_wrapper)}>
					<Typography variant="overline" display="block" gutterBottom>
						Emerging Tech
						<Icon
							className={css(styles.overline_icon)}
							path={mdiCheckboxBlankCircle}
							size={0.4}
						/>
						Machine Learning
					</Typography>
					<Typography
						variant="h4"
						gutterBottom
						className={css(styles.technology_wrapper)}
					>
						{data.name}
					</Typography>
					<div className={css(responsive.hide_sm_down)}>
						<Typography variant="body1" gutterBottom>
							{faker.lorem.paragraph(8)}
						</Typography>
					</div>
					<div className={css(responsive.hide_md_up)}>
						<Typography variant="body1" gutterBottom>
							{faker.lorem.paragraph(2)}
						</Typography>
					</div>

					<div className={css(responsive.hide_sm_down)}>
						<List>{generate()}</List>
					</div>
					<div className={css(styles.technology_wrapper)}>
						<Fab
							variant="extended"
							color="primary"
							aria-label="View More"
							className={css(styles.view_more_button)}
						>
							View More
						</Fab>
					</div>
					<div className={css(styles.technology_wrapper)}>
						<div className={css(styles.technology_circle)}>
							<h4 className={css(styles.technology_text)}>Ps</h4>
						</div>
						<div className={css(styles.technology_circle)}>
							<h4 className={css(styles.technology_text)}>Ai</h4>
						</div>
						<div className={css(styles.technology_circle)}>
							<h4 className={css(styles.technology_text)}>Xd</h4>
						</div>
						<div className={css(styles.technology_circle)}>
							<Icon
								className={css(styles.technology_icon)}
								path={mdiReact}
								title="React"
								size={1.5}
								rotate={90}
							/>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
};

const styles = StyleSheet.create({
	container: base.container,
	content_wrapper: base.content_wrapper,
	overline_icon: base.overline_icon,
	strip_wrapper: {
		position: "absolute",
		top: "0",
		height: "100%",
		width: "100%",
		overflow: "hidden",
		"@media only screen and (max-width: 600px)": {
			top: "0"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			top: "0"
		}
	},
	strip_large: {
		position: "absolute",
		top: "0",
		marginTop: "-10rem",
		height: "150%",
		width: "7rem",
		left: "7rem",
		backgroundColor: colors.purple.dark,
		"@media only screen and (min-width: 770px)": {
			marginTop: "-10rem",
			width: "7rem",
			left: "14rem"
		},
		"@media only screen and (max-width: 600px)": {
			marginTop: "-20rem",
			left: "0rem",
			width: "3rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			marginTop: "-20rem",
			left: "0rem",
			width: "5rem"
		}
	},
	strip_medium: {
		position: "absolute",
		top: "0",
		marginTop: "-10rem",
		height: "150%",
		width: "7rem",
		left: "14rem",
		backgroundColor: colors.purple.regular,
		"@media only screen and (min-width: 770px)": {
			marginTop: "-10rem",
			width: "7rem",
			left: "14rem"
		},
		"@media only screen and (max-width: 600px)": {
			marginTop: "-30rem",
			left: "-30rem",
			width: "3rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			marginTop: "-20rem",
			left: "0rem",
			width: "5rem"
		}
	},
	strip_small: {
		position: "absolute",
		top: "0",
		height: "50%",
		backgroundColor: colors.purple.light,
		"@media only screen and (min-width: 770px)": {
			marginTop: "-10rem",
			width: "6rem",
			left: "21rem"
		},
		"@media only screen and (max-width: 600px)": {
			marginTop: "-30rem",
			left: "-30rem",
			width: "3rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			marginTop: "-20rem",
			left: "0rem",
			width: "5rem"
		}
	},
	skew: {
		transform: "rotate(30deg)",
		"@media only screen and (max-width: 600px)": {
			transform: "rotate(35deg)"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			transform: "rotate(45deg)"
		}
	},
	slideIn_large: {
		animationName: [heightKeyframes, translateKeyFrames.desktop.large],
		animationDuration: "2s",
		animationTimingFunction: "linear",
		animationFillMode: "forwards",
		"@media only screen and (max-width: 600px)": {
			animationName: [heightKeyframes, translateKeyFrames.mobile.large]
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			animationName: [heightKeyframes, translateKeyFrames.tab.large]
		}
	},
	slideIn_regular: {
		animationName: [heightKeyframes, translateKeyFrames.desktop.medium],
		animationDuration: "2s",
		animationTimingFunction: "linear",
		animationFillMode: "forwards",
		"@media only screen and (max-width: 600px)": {
			animationName: [heightKeyframes, translateKeyFrames.mobile.medium]
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			animationName: [heightKeyframes, translateKeyFrames.tab.medium]
		}
	},
	slideIn_small: {
		animationName: [heightKeyframes, translateKeyFrames.desktop.small],
		animationDuration: "2s",
		animationTimingFunction: "linear",
		animationFillMode: "forwards",
		"@media only screen and (max-width: 600px)": {
			animationName: [heightKeyframes, translateKeyFrames.mobile.small]
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			animationName: [heightKeyframes, translateKeyFrames.tab.small]
		}
	},
	frame_wrapper: {
		flex: "1",
		display: "flex",
		justifyContent: "center",
		"@media only screen and (max-width: 600px)": {
			flex: "1"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			flex: "1"
		}
	},
	frame_image: {
		width: "100%"
	},
	details_wrapper: {
		padding: "2rem",
		flex: "1",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		"@media only screen and (max-width: 600px)": {
			flex: "2",
			justifyContent: "flex-start",
			padding: "0rem 1rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			flex: "2",
			padding: "0rem 6rem"
		}
	},
	project_title: {},
	view_more_button: {
		fontWeight: "600",
		color:colors.gray.nine,
		margin: "1rem 0rem",
		padding: "0rem 2rem",
		backgroundColor: colors.purple.light,
		":hover": {
			backgroundColor: colors.purple.regular
		},
		"@media (max-width: 769px)": {
			justifyContent: "center"
		}
	},
	view_more_wrapper: {
		display: "flex",
		"@media only screen and (max-width: 600px)": {
			justifyContent: "center"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			justifyContent: "center"
		}
	},
	technology_wrapper: {
		display: "flex",
		"@media only screen and (max-width: 600px)": {
			justifyContent: "center"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			justifyContent: "center"
		}
	},
	technology_circle: {
		color: "black",
		height: "4rem",
		width: "4rem",
		margin: "1rem",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		backgroundColor: colors.purple.light,
		transition: "all .2s ease-in-out",
		":hover": {
			transform: "scale(1.1)",
			backgroundColor: colors.purple.regular,
			color: "white",
			fill: "white"
		},
		"@media only screen and (max-width: 600px)": {
			margin: "0.5rem"
		}
	},
	technology_text: {
		fontSize: "1.2rem",
		fontWeight: "700",
		margin: "auto",
		color: "inherit"
	},
	technology_icon: {
		fontSize: "1.2rem",
		fontWeight: "500",
		margin: "auto",
		fill: "inherit"
	}
});

export default EmergingAppPrimary;
