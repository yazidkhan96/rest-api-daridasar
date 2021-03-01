import PostCreate from "../pages/PostCreate";
import PostDetail from "../pages/PostDetail";
import PostList from "../pages/PostList";
import PostUpdate from "../pages/PostUpdate";

const Routes = [
  {
    path: "/posts",
    label: "Posts",
    component: PostList,
  },
  {
    path: "/posts/create",
    label: "Posts Create",
    component: PostCreate,
  },
  {
    path: "/posts/:id/update",
    label: "Posts Update",
    component: PostUpdate,
  },
  {
    path: "/posts/:id",
    label: "Posts Detail",
    component: PostDetail,
  },


];

export default Routes;
