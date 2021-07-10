import React from "react";
import post from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map((post)=><Post massage={post.post} likeCount={post.likesCount}/>)
    return (
        <div className={post.posts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;