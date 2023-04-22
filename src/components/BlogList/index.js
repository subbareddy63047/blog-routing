import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogItems: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      title: each.title,
      id: each.id,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogItems: updatedData, isLoading: false})
  }

  renderBlogItem = () => {
    const {blogItems} = this.state
    return (
      <div className="blogItems">
        {blogItems.map(each => (
          <BlogItem blogData={each} key={each.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="list-container" data-testid="loader">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}
export default BlogList
