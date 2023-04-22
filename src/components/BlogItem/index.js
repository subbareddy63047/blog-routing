// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  console.log(blogData)
  const {title, id, imageUrl, avatarUrl, topic, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item${id}`} className="img" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
