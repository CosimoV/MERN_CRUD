import React from "react";
// import material ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import digital_encyclopedia from "./images/digital_encyclopedia.png";
const App = () => {
	return (
		<Container maxwidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					Digital Encyclopedia
				</Typography>
				<img
					src={digital_encyclopedia}
					alt="digital_encyclopedia"
					height="60"
				/>
			</AppBar>
		</Container>
	);
};

export default App;
