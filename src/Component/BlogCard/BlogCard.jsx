import React from 'react';
import './BlogCard.css'

const BlogCard = ({data}) => {
    const {title, text} = data;

    return (
        <div className='blogBody'>
            <div className="blogHeader">
                <h3>{title}</h3>
            </div>
            <div className="blogText">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default BlogCard;