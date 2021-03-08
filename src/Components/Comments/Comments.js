import React from 'react';

const Comments = (props) => {
    const { name, email } = props.comment;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Comments;