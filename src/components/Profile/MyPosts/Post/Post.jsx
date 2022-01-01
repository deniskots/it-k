import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.item}>
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={""}/>
          {props.message}
      </div>
    </div>
  );
};
export default Post;
 