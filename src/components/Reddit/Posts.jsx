import React, { PropTypes, Component } from 'react'

class Posts extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map((post, i) =>
          <li key={i}><a href={post.url} target='_blank'>{post.title}</a></li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
