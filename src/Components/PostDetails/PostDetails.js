import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    let { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>PostDetails: {id}</h3>
            <p>User Posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
            <p>Number of length: {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetails;