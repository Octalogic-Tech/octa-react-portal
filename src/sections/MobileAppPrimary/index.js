import React from "react";
import { StyleSheet, css } from "aphrodite";
import { zoomIn } from "react-animations";
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

import mobileapp from "../../assets/images/projects/mobileapp.png";

let isActive = false;

const MobileAppPrimary = ({
	anchor,
	activeSection,
	fullpageApi,
	toggleTheme
}) => {
	// const [isThemeDark, setIsThemeDark] = useState(false);
	if (activeSection.anchor === anchor) {
		// This allows us to run animations on first load of the section
		isActive = true;
		document.body.classList.remove("web-app-container");
		document.body.classList.add("mobile-app-container");
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
			<div className={css(styles.circle_wrapper)}>
				<div
					className={css(
						styles.circle_large,
						isActive && styles.zoomIn_large
					)}
				>
					<div
						className={css(
							styles.circle_medium,
							isActive && styles.zoomIn_regular
						)}
					>
						<div
							className={css(
								styles.circle_small,
								isActive && styles.zoomIn_small
							)}
						></div>
					</div>
				</div>
			</div>
			<div className={css(styles.content_wrapper)}>
				<div className={css(styles.frame_wrapper)}>
					<div className="device-wrapper mobile_app">
						<div
							className="device"
							data-device="Pixel"
							data-orientation="portrait"
							data-color="black"
						>
							<div className="screen">
								<img
									className={css(styles.frame_image)}
									src={mobileapp}
									alt="project"
								/>
							</div>
							<div className="button"></div>
						</div>
					</div>
				</div>
				<div className={css(styles.details_wrapper)}>
					<Typography variant="overline" display="block" gutterBottom>
						Mobile
						<Icon
							className={css(styles.overline_icon)}
							path={mdiCheckboxBlankCircle}
							size={0.4}
						/>
						Native
					</Typography>
					<Typography
						variant="h4"
						gutterBottom
						className={css(styles.technology_wrapper)}
					>
						{faker.commerce.productName()}
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
	circle_wrapper: {
		position: "absolute",
		left: "-5%",
		top: "10%",
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
	circle_large: {
		display: "flex",
		justifyContent: "center",
		height: "35rem",
		width: "35rem",
		borderRadius: "35rem",
		backgroundColor: colors.orange.dark,
		"@media only screen and (max-width: 600px)": {
			height: "15rem",
			width: "15rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			height: "25rem",
			width: "25rem"
		}
	},
	circle_medium: {
		height: "27rem",
		width: "27rem",
		margin: "auto",
		display: "flex",
		justifyContent: "center",
		borderRadius: "27rem",
		backgroundColor: colors.orange.regular,
		"@media only screen and (max-width: 600px)": {
			height: "10rem",
			width: "10rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			height: "18rem",
			width: "18rem"
		}
	},
	circle_small: {
		height: "18rem",
		width: "18rem",
		margin: "auto",
		borderRadius: "18rem",
		backgroundColor: colors.orange.light,
		"@media only screen and (max-width: 600px)": {
			height: "5rem",
			width: "5rem"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			height: "10rem",
			width: "10rem"
		}
	},
	zoomIn_large: {
		animationName: zoomIn,
		animationDuration: "2s"
	},
	zoomIn_regular: {
		animationName: zoomIn,
		animationDuration: "1s"
	},
	zoomIn_small: {
		animationName: zoomIn,
		animationDuration: "0.5s"
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
		margin: "1rem 0rem",
		padding: "0rem 2rem",
		backgroundColor: colors.orange.regular,
		":hover": {
			backgroundColor: colors.orange.dark
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
		backgroundColor: colors.orange.regular,
		transition: "all .2s ease-in-out",
		":hover": {
			transform: "scale(1.1)",
			backgroundColor: colors.orange.dark,
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

export default MobileAppPrimary;