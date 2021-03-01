import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PostListCard from "../../containers/organism/PostListCard";




const PostList = () => {
  const [posts, setPost] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [active, setActive] = useState(0);
  const history = useHistory();

  const getPost = () => {
    setIsPending(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPost(result.data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPost((res) => {
          setActive(0);
          let newData = [...res];
          newData.splice(id, 1);
          return newData;
        });
      })
      .catch((err) => {
        setActive(0);
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="post-list">
      <Navbar />
      <br />
      <Container maxWidth="lg">

        {!isPending && (
          <Grid container>
            <Button variant="contained" color="primary" onClick={() => { history.push("/posts/create") }}>
              Create
             </Button>
          </Grid>
        )}
        <Grid>
          {isPending && (
            <div
              style={{
                textAlign: "center",
              }}
            >
              Loading...
            </div>
          )}
        </Grid>
        <Grid container spacing={6}>
          {!isPending &&
            posts.map((post) => (
              <Grid item xs={6} sm={3} key={post.id}>
                <PostListCard
                  title={post.title}
                  body={post.body}
                  handleDelete={() => {
                    handleDelete(post.id);
                    setActive(post.id);
                  }}
                  onEdit={() => history.push(`/posts/${post.id}/update`)}
                  onDetail={() => history.push(`/posts/${post.id}`)}
                  isPending={active === post.id ? true : false}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PostList;
