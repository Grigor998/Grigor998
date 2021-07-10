import React from "react";
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <img src='https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg'/>
            {props.massage}
            <div>
                <span>Like </span>{props.likeCount}
            </div>
        </div>
    )
}
export default Post;