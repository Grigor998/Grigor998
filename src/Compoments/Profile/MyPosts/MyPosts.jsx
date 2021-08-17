import React from "react";
import post from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements =
        props.posts.map((post) => <Post massage={post.post} likeCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }
    const onPostChange=()=> {
       const text= newPostElement.current.value;
       props.updateNewPostText(text)
    }
    return (
        <div className={post.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                          placeholder={'Your new post here...'}
                />
                <div>
                    <button className={post.button}  onClickCapture={post.button}  onClick={addPost}>Add post</button>
                </div>

            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;