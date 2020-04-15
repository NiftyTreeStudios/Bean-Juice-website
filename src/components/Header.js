import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-coffee"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Bean Juice</h1>
        <p>
          Coffee brewing app made by Nifty Tree Studios.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('bean-juice')
            }}
          >
            Bean Juice
          </button>
        </li>
        <li>
          <button>
            <a
              href="https://www.twitter.com">
              AppStore (coming soon)
            </a>
          </button>
        </li>
        <li>
          <button
          >
            Google Play (coming soon)
          </button>
        </li>
        <li>
          <button>
            <a href="MAILTO:contact@niftytreestudios.com?Subject=Bean%20Juice%20Contact%20reguest"
            target="_top">
              Contact Us
            </a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
