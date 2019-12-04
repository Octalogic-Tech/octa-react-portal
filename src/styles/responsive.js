import { StyleSheet } from "aphrodite";
const styles = StyleSheet.create({
	hide_sm_down: {
		"@media only screen and (max-width: 600px)": {
			display: "none"
		}
	},
	hide_sm_up: {
		"@media only screen and (max-width: 600px)": {
			display: "none"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			display: "none"
		},
		"@media only screen and (min-width: 769px)": {
			display: "none"
		}
	},
	hide_md_down: {
		"@media only screen and (max-width: 600px)": {
			display: "none"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			display: "none"
		}
	},
	hide_md_up: {
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			display: "none"
		},
		"@media only screen and (min-width: 769px)": {
			display: "none"
		}
	},
	hide_lg_down: {
		"@media only screen and (max-width: 600px)": {
			display: "none"
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			display: "none"
		},
		"@media only screen and (min-width: 769px)": {
			display: "none"
		}
	},
	hide_lg_up: {
		"@media only screen and (min-width: 769px)": {
			display: "none"
		}
	}
});

export default styles;
