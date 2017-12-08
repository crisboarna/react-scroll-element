// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './ScrollElement.scss';

type Props = {
  type ?: string,
  text ?: string
};

const ScrollElement = ({type, text} : Props) => {
   return(
      <div className='scroll-element'>
        < div className={
          // $FlowFixMe: This type cannot be coerced to string
          `scroll-element-${type}`}>
          <span></span>{text}</div>
      </div>
    );
};

ScrollElement.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

ScrollElement.defaultProps = {
  type: 'chevron',
  text: 'Scroll'
};

export default ScrollElement;