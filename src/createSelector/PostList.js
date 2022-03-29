import React, { useState } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { incrementCount } from "./PostActions";

function PostList(props) {
  const [postId, setPostId] = useState();

  const onPostClick = (id) => {
    setPostId(id);
  };

  return (
    <div>
      <h1>Post List</h1>
      <button onClick={props.increment}>Increment</button>
      <h3>{props.count}</h3>
      <div>
        {props.posts.map((post) => {
          return (
            <h3 key={post.id} onClick={() => onPostClick(post.id)}>
              {post.title}
            </h3>
          );
        })}
      </div>
      <div>{postId && <h4>Post id is: {postId}</h4>}</div>
    </div>
  );
}

const getPosts = (state) => state.posts;
const getCount = (state) => state.count;

const getActivePost = createSelector(getPosts, (posts) => {
  console.log("Selector called");
  return posts.filter((post) => post.isActive);
});

const mapStateToProps = (state) => {
  return {
    posts: getActivePost(state),
    count: getCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
