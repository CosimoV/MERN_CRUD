import React, { useState, useEffect } from "react";
// import material ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import digital_encyclopedia from "./images/digital_encyclopedia.png";
import { getPosts } from "./actions/posts";
// import components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
//import styles
import useStyles from "./styles";
const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Container maxwidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
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
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
