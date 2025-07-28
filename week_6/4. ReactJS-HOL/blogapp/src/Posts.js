import React, { Component } from 'react'
import Post from './Post';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
        };
    }
    loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>{
            const posts=data.map((post)=> new Post(post.id,post.title,post.body));
            this.setState({posts});
        })
        .catch((error)=>{
            console.error('Errot fetching posts:',error);
        });
        
    }
    componentDidMount(){
        this.loadPosts();
    }
    componentDidCatch(error,info){
        console.error('Error caught in component:', error, info);
        alert('An error occurred while rendering posts.');

    }
  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.map((post)=>(
            <div key={post.id} style={{marginBottom:'20px'}}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
      </div>
    )
  }
}
export default Posts;