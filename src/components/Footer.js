import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; <a href="https://www.niftytreestudios.com">Nifty Tree Studios</a></p>
        <p className="copyright">Background photo by <a href="https://unsplash.com/@waleij">Emma Waleij</a> on <a href="https://unsplash.com/photos/FK25OY8Z9i8">Unsplash</a></p>
        <p className="copyright">Our <a href="/privacy">Privacy Policy</a> and the <a href="/terms-and-conditions">Terms and Conditions</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
