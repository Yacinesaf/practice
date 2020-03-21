import React, { Component } from 'react';
import VideoPreview from './VideoPreview';



class VideoPreviewWrapper extends Component {
  constructor() {
    super()
    this.state = {
      img: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://api.unsplash.com/photos/random?client_id=uxmW_PR6Zn3N6vc5Zsc2pQJVOwzezAXoPBSOi1eXa4A").then(res => {
        res.json().then(real => {
          console.log(real.urls.regular)
          this.setState({
            img: real.urls.regular
          })
        })
      })
    }, 4000)
  }

  render() {
    return (
      <VideoPreview img={this.state.img} />
    )
  }
}

export default VideoPreviewWrapper;