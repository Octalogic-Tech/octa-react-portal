import React from "react";
import { StyleSheet, css } from "aphrodite";

import icon from "../../assets/images/icons/icon-loader.png";

const Loading = props => {
	return <img className={css(styles.icon_wrapper,styles.spinny_boy)} src={icon} alt="Icon" />;
};

const spinKeyframes = {
	from: {
		transform: "rotate(0deg)"
	},
	to: {
		transform: "rotate(360deg)"
	}
};

const styles = StyleSheet.create({
	icon_wrapper: {
		width: "100%",
		height: "100%"
	},
	spinny_boy: {
		animationName: [spinKeyframes],
		animationDuration: "2500ms",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
	}
});



export default Loading;
