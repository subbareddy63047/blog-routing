// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {item: {}, isLoader: true}

  componentDidMount() {
    this.getIndividualItem()
  }

  getIndividualItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      author: data.author,
      title: data.title,
      content: data.content,
    }

    this.setState({item: updatedData, isLoader: false})
  }

  renderBlogItem = () => {
    const {item} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = item

    return (
      <div className="container-item">
        <h1 className="heading">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={`item${id}`} className="avatar-img" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image-url" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="blog-item">
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
