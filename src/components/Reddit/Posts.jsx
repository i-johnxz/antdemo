import React, { PropTypes, Component } from 'react'

class Posts extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map((post, i) =>
          <li key={i}>{post.title}</li> 
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
