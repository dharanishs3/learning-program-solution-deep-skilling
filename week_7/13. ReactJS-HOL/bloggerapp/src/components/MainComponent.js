import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import '../App.css';

function MainComponent() {
  return (
    <div className="container-row">
      <div className="column left-border">
        <h2>Course Details</h2>
        <CourseDetails />
      </div>
      <div className="column center-border">
        <h2>Book Details</h2>
        <BookDetails />
      </div>
      <div className="column right-border">
        <h2>Blog Details</h2>
        <BlogDetails />
      </div>
    </div>
  );
}

export default MainComponent;
