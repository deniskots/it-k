import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map((post, index) => <Post key={index} message={post.message}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost ();
        // props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>
                    Add post
                </button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};
export default MyPosts;
