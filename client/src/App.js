import React from "react";
// import material ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import digital_encyclopedia from "./images/digital_encyclopedia.png";
// import components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
//import styles
import useStyles from "./styles";
const App = () => {
	const classes = useStyles();

	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography classNamee={classes.heading} variant="h2" align="center">
					Digital Encyclopedia
				</Typography>
				<img
					className={classes.image}
					src={digital_encyclopedia}
					alt="digital_encyclopedia"
					height="60"
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justifyContent="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
