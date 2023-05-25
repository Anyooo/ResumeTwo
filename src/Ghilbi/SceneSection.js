import React, { Component } from "react"
import './SceneSection.css'
export default class SceneSection extends Component {
  render() {
    return (
      <section className="scene">
        <div className="static-container">
          {this.props.children}
        </div>
        <div className="container">
          {this.props.kids}
        </div>
      </section>
    )
  }
}
