import React, { useState } from "react";

import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Landing = ({ fullpageApi, toggleTheme }) => {
	const [isThemeDark, setIsThemeDark] = useState(false);

	return (
		<Box height="100%" width="100%">
			<p>Landing Screen</p>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					fullpageApi.moveSectionDown();
				}}
			>
				Scroll Down
			</Button>

			<Switch
				checked={isThemeDark}
				onChange={() => {
					setIsThemeDark(!isThemeDark);
					toggleTheme();
				}}
				value="themeDark"
				color="primary"
				inputProps={{ "aria-label": "primary checkbox" }}
			/>

			<Card>
				<CardContent>
					<Typography color="textSecondary" gutterBottom>
						Word of the Day
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Landing;
