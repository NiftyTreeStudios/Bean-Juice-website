import PropTypes from 'prop-types'
import React from 'react'
import beanjuicess from '../images/bean-juice-ss.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="bean-juice"
          className={`${this.props.article === 'bean-juice' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bean Juice</h2>
          <span className="image main">
            <img src={beanjuicess} alt="" />
          </span>
          <p>
            Bean Juice is a simple app for brewing coffee. Play around with
            the ratios and brew methods and find your perfect cup of coffee.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
