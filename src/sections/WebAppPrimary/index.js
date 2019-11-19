import React from "react";
import { StyleSheet, css } from "aphrodite";
import { slideInLeft } from "react-animations";
import faker from "faker";
import Icon from "@mdi/react";
import { mdiReact } from "@mdi/js";

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

const WebAppPrimary = ({ data, activeSection, fullpageApi }) => {
	// const [isThemeDark, setIsThemeDark] = useState(false);
	if (activeSection === data.category) {
		// This allows us to run animations on first load of the section
		isActive = true;
		navDotStyling("web-app-container");
	}

	
	

	function generate(element) {
		return [0, 1, 2].map((value, index) => (
			<ListItem  key={index}>
				<ListItemIcon>
					<KeyboardArrowRightIcon />
				</ListItemIcon>
				<ListItemText primary={faker.lorem.sentences(2)} />
			</ListItem>
		));
	}

	return (
		<Box className={css(styles.container)}>
			<div className={css(styles.triangle_wrapper)}>
				<div
					className={css(
						styles.triangle_large,
						isActive && styles.slideInLeft_large
					)}
				></div>
				<div
					className={css(
						styles.triangle_medium,
						isActive && styles.slideInLeft_regular
					)}
				></div>
				<div
					className={css(
						styles.triangle_small,
						isActive && styles.slideInLeft_small
					)}
				></div>
			</div>
			<div className={css(styles.content_wrapper)}>
				<div className={css(styles.frame_wrapper)}>
					<div className="device-wrapper web_app">
						<div
							className="device"
							data-device="Macbook2015"
							data-orientation="portrait"
							data-color="white"
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
						Web
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
	triangle_wrapper: {
		position: "absolute",
		left: "0",
		top: "0",
		height: "100%",
		width: "100%",
        overflow: "hidden",
	},
	triangle_large: {
		position: "absolute",
		top: "-10rem",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "40rem solid transparent",
		borderLeft: "40rem solid",
		borderLeftColor: colors.blue.dark,
		borderBottom: "40rem solid transparent",
		"@media only screen and (max-width: 600px)": {
			top: "-4rem",
			borderTopWidth: "12rem",
			borderLeftWidth: "14em",
			borderBottomWidth: "12rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			top: "-5rem",
			borderTopWidth: "20rem",
			borderLeftWidth: "20rem",
			borderBottomWidth: "20rem"
		}
	},
	triangle_medium: {
		position: "absolute",
		top: "0",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "30rem solid transparent",
		borderLeft: "30rem solid ",
		borderLeftColor: colors.blue.regular,
		borderBottom: "30rem solid transparent",
		"@media only screen and (max-width: 600px)": {
			borderTopWidth: "8rem",
			borderLeftWidth: "8rem",
			borderBottomWidth: "8rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			borderTopWidth: "15rem",
			borderLeftWidth: "15rem",
			borderBottomWidth: "15rem"
		}
	},
	triangle_small: {
		position: "absolute",
		top: "10rem",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "20rem solid transparent",
		borderLeft: "20rem solid",
		borderLeftColor: colors.blue.light,
		borderBottom: "20rem solid transparent",
		"@media only screen and (max-width: 600px)": {
			top: "4rem",
			borderTopWidth: "4rem",
			borderLeftWidth: "4rem",
			borderBottomWidth: "4rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			top: "5rem",
			borderTopWidth: "10rem",
			borderLeftWidth: "10rem",
			borderBottomWidth: "10rem"
		}
	},
	slideInLeft_large: {
		animationName: slideInLeft,
		animationDuration: "3s"
	},
	slideInLeft_regular: {
		animationName: slideInLeft,
		animationDuration: "2s"
	},
	slideInLeft_small: {
		animationName: slideInLeft,
		animationDuration: "1s"
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
		width: "100%",
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
		margin: "1rem 0rem",
		padding: "0rem 2rem",
		backgroundColor: colors.blue.regular,
		":hover": {
			backgroundColor: colors.blue.dark
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
		backgroundColor: colors.blue.light,
		transition: "all .2s ease-in-out",
		":hover": {
			transform: "scale(1.1)",
			backgroundColor: colors.blue.dark,
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

export default WebAppPrimary;
