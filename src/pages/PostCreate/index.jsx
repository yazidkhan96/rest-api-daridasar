import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import TextInput from '../../components/TextInput';


const PostCreate = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    const createPost = (titleVal, bodyVal) => {
        setLoading(true)
        axios.post("https://jsonplaceholder.typicode.com/posts",
            {
                title: titleVal,
                body: bodyVal,
                userId: 1,
            },
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        ).then(res => {
            console.log("res", res);
            setLoading(false);
            history.push("/posts")
        }).catch(err => {
            console.log("error", err);
            setLoading(false)
        })
    }
    return (
        <div className="post-create">
            <Navbar />
            <br />
            <Container maxWidth="lg" style={{
                marginTop: 30
            }}>
                <Grid container spacing={6}>
                    <TextInput styleText="outlined-basic" label="title" inputs={title} events={(e) => {
                        setTitle(e.target.value)
                    }} />
                    <TextInput styleText="outlined-multiline-static" label="body" line="multiline" inputs={body} rows={5} events={(e) => {
                        setBody(e.target.value)
                    }} />
                    <Button m={2} variant="contained" color="primary" onClick={() => createPost(title, body)}>Create</Button>
                </Grid>
                <Modal
                    open={loading}
                    onClose={() => undefined}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {<CircularProgress />}
                </Modal>
            </Container>

        </div>
    );
};

export default PostCreate;
