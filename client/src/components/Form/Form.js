import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
//import style sheet
import useStyles from "./Styles";
import { createPost } from "../../actions/posts";
const Form = () => {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	const clear = () => {};
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createPost(postData));
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
			>
				<Typography variant="h6">Creating a Memory</Typography>
				{/*TextField for creator*/}
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					value={postData.creator}
					onChange={(e) =>
						setPostData({ ...postData, creator: e.target.value })
					}
				/>
				{/*TextField for Title*/}
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
				/>
				{/*TextField for Message*/}
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
				/>
				{/*TextField for Tags*/}
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, Tags: e.target.value })}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>

				<Button
					variant="contained"
					color="secondary"
					size="large"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};
export default Form;
