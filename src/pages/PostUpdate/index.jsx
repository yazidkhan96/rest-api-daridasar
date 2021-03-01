import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import TextInput from '../../components/TextInput';

const PostUpdate = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [postDetail, setPostDetail] = useState([]);
    const params = useParams();

    const updatePost = (titleVal, bodyVal, postId) => {
        setLoading(true)
        axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                title: titleVal,
                body: bodyVal,
                userId: 1,
                id: postId
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




    const getPostDetail = async (PostId) => {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${PostId}`
            );
            setPostDetail(res.data);
            setTitle(res.data.title);
            setBody(res.data.body);
            setLoading(false);
        } catch (error) { }
    };

    useEffect(() => {
        getPostDetail(params.id);
    }, [params.id]);
    return (
        <div className="post-update">
            <Navbar />
            <br />
            <Container maxWidth="lg" style={{
                marginTop: 30
            }}>
                {
                    postDetail && <Grid container spacing={6}>
                        <TextInput styleText="outlined-basic" label="title" inputs={title} events={(e) => {
                            setTitle(e.target.value)
                        }} />
                        <TextInput styleText="outlined-multiline-static" line="multiline" label="Body" rows={4} inputs={body} events={(e) => { setBody(e.target.value) }} />
                        <Button m={2} variant="contained" color="primary" onClick={() => updatePost(title, body, params.id)}>Update</Button>
                    </Grid>
                }
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

export default PostUpdate;
