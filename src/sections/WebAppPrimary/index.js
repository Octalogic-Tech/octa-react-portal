import React from "react";
import { StyleSheet, css } from "aphrodite";
import { slideInLeft } from "react-animations";

import Box from "@material-ui/core/Box";

let isActive = false;

const WebAppPrimary = ({ anchor, activeSection, fullpageApi, toggleTheme }) => {
	// const [isThemeDark, setIsThemeDark] = useState(false);
	if (activeSection.anchor === anchor) {
        // This allows us to run animations on first load of the section
		isActive = true;
	}

	return (
		<Box className={css(styles.container)}>
			<p>Web App</p>
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
		</Box>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%"
	},
	button: {
		position: "absolute",
		right: "0"
	},
	triangle_large: {
		position: "absolute",
		top: "-10rem",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "40rem solid transparent",
		borderLeft: "40rem solid #10ABB6",
		borderBottom: "40rem solid transparent"
	},
	triangle_medium: {
		position: "absolute",
		top: "0",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "30rem solid transparent",
		borderLeft: "30rem solid #3EC4CD",
		borderBottom: "30rem solid transparent"
	},
	triangle_small: {
		position: "absolute",
		top: "10rem",
		left: "0",
		width: "0",
		height: "0",
		borderTop: "20rem solid transparent",
		borderLeft: "20rem solid #87E3F9",
		borderBottom: "20rem solid transparent"
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
	}
});

export default WebAppPrimary;
