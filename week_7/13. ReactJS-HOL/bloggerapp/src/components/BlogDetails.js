import React from 'react';

const blogs = [
  {
    title: 'React Learning',
    author: 'Stephen Biz',
    content: 'Welcome to learning React!',
  },
  {
    title: 'Installation',
    author: 'Schewzdenier',
    content: 'You can install React from npm.',
  },
];

function BlogDetails() {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
