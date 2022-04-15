import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './blog.css'

const Blog = () => {

    const blogDAta = [
        {
            id: 1,
            title: "What is Context API ?",
            text: "Context API is a process of taking data from one place to another very easily, context API data is kept in a central place and shared with everyone through context.provider"
        },{
            id: 2,
            title: "What is Semantic Tag ?",
            text: "The name of the semantic tag has been created to match the work, such as Header Nav Section Footer"
        }
    ];
    return (
        <div className='sidePd blogBoxWrap'>
            <h2>Question Answer</h2>
            <div className='blogCardBox'>
                {
                    blogDAta.map(data => <BlogCard data={data} key={data.id}/> )
                }
            </div>
        </div>
    );
};

export default Blog;