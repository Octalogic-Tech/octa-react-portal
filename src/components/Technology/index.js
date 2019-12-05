import React from "react";
import { StyleSheet, css } from "aphrodite";
import Icon from "@mdi/react";
import Tooltip from "@material-ui/core/Tooltip";
import {
	mdiHelp,
	mdiReact,
	mdiAndroidDebugBridge,
	mdiAngularjs,
	mdiDatabase,
	mdiLanguagePython,
	mdiLanguagePhp,
	mdiGraphOutline,
	mdiSass,
	mdiJson,
	mdiFirebase,
	mdiNodejs
} from "@mdi/js";

import colors from "../../styles/colors";

const Technology = props => {
	return (
		<Tooltip
			title={props.name}
			placement="bottom"
			disableFocusListener
			disableTouchListener
		>
			<div className={css(styles.technology_circle, styles[props.color])}>
				<Icon
					className={css(styles.technology_icon)}
					path={findIcon(props.icon)}
					title={props.name}
					size={1.5}
				/>
			</div>
		</Tooltip>
	);
};

const findIcon = iconName => {
	let icon = mdiHelp;
	switch (iconName) {
		case "mdiReact":
			icon = mdiReact;
			break;
		case "mdiAndroidDebugBridge":
			icon = mdiAndroidDebugBridge;
			break;
		case "mdiAngularjs":
			icon = mdiAngularjs;
			break;
		case "mdiDatabase":
			icon = mdiDatabase;
			break;
		case "mdiLanguagePython":
			icon = mdiLanguagePython;
			break;
		case "mdiLanguagePhp":
			icon = mdiLanguagePhp;
			break;
		case "mdiGraphOutline":
			icon = mdiGraphOutline;
			break;
		case "mdiSass":
			icon = mdiSass;
			break;
		case "mdiJson":
			icon = mdiJson;
			break;
		case "mdiFirebase":
			icon = mdiFirebase;
			break;
		case "mdiNodejs":
			icon = mdiNodejs;
			break;
		default:
			icon = mdiHelp;
	}
	return icon;
};

const styles = StyleSheet.create({
	technology_circle: {
		color: "black",
		height: "4rem",
		width: "4rem",
		margin: "1rem",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		transition: "all .2s ease-in-out",
		":hover": {
			transform: "scale(1.1)",
			color: "white",
			fill: "white"
		},
		"@media only screen and (max-width: 600px)": {
			margin: "0.5rem"
		}
	},
	technology_icon: {
		fontSize: "1.2rem",
		fontWeight: "500",
		margin: "auto",
		fill: "inherit"
	},
	purple: {
		backgroundColor: colors.purple.light,
		":hover": {
			backgroundColor: colors.purple.regular
		}
	},
	orange: {
		backgroundColor: colors.orange.regular,
		":hover": {
			backgroundColor: colors.orange.dark
		}
	},
	green: {
		backgroundColor: colors.green.regular,
		":hover": {
			backgroundColor: colors.green.dark
		}
	}
});

export default Technology;
