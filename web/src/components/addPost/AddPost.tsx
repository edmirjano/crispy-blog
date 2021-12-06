import './AddPost.css';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";

const AddPost = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState<string>("");

    const onTitleChange = (e: any) => setTitle(e.target.value);
    const onDescriptionChange = (e: any) => setDescription(e.target.value);
    const handleSnackbarClose = () => {
        setSnackbar(false);
        if(snackbarText === "Succesfully Added."){
            setSnackbarText("");
            navigate(`/posts`);
        } else {
            setSnackbarText("");
        }
      };

    const handleSubmit = () => {
        if (title.length === 0 || description.length === 0) {
            setSnackbarText("Title and Description cannot be empty.");
            setSnackbar(true);
            return;
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/add-post`, {
            title: title,
            description: description
          })
          .then(function (response) {
            setSnackbarText("Succesfully Added.");
            setSnackbar(true);
          })
          .catch(function (error) {
            setSnackbarText("Something went wrong, please try again later");
            setSnackbar(true);
          });
    };

    return (
        <div>
            <Box className="centered-form">
                <FormControl variant="standard" className="form-width">
                <h3>ADD NEW POST</h3>
                    <TextField
                        id="title"
                        name="title"
                        label="Title"
                        helperText="Please provide your post title"
                        onChange={onTitleChange}
                        value={title}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <TitleIcon />
                              </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <br />
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        helperText="Please provide your post description"
                        multiline
                        rows={12}
                        onChange={onDescriptionChange}
                        value={description}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <DescriptionIcon />
                              </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <Button variant="outlined" startIcon={<PublishIcon />} onClick={handleSubmit}>
                        Submit
                    </Button>
                </FormControl>
            </Box>
            <Snackbar
                open={snackbar}
                autoHideDuration={3000}
                message={snackbarText}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                onClose={handleSnackbarClose}
            />
        </div>
    )
};


export default AddPost;