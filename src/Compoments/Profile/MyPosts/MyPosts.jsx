import React from "react";
import post from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements =
        props.posts.map((post) => <Post massage={post.post} likeCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={post.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;