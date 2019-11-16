const styles = {
    container : {
        width: "100%",
		height: "100%"
    },
    content_wrapper : {
        position: "absolute",
        width: "100%",
        height: "100%",
        padding:"3rem",
        display:"flex",
        flexDirection: 'row',
        zIndex:"1",
        "@media only screen and (max-width: 600px)": {
            flexDirection: 'column',
            padding:"1rem",
		},
		"@media only screen and (min-width:601px) and  (max-width: 769px)": {
			flexDirection: 'column',
            padding:"1rem",
		}
    },
	pattern_wrapper: {
		position: "absolute",
		left: "0",
		top: "0",
		height: "100%",
		width: "100%",
        overflow: "hidden",
	}
};

export default styles;