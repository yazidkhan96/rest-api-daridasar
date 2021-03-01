import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
const PostDetail = () => {
  const [postDetail, setPostDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const getPostDetail = async (PostId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${PostId}`
      );
      setPostDetail(res.data);
      setLoading(false);
    } catch (error) { }
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, [params.id]);
  return (
    <div className="post-detail">
      <Navbar />
      <br />
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {loading === true && <div>Loading . . .</div>}
          {postDetail && (
            <div>
              <div>{postDetail.title}</div>
              <div>{postDetail.body}</div>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default PostDetail;
