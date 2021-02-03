import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { TextInfo } from 'components';

const Header = ({ className, children }) => {
  const classNames = classname('m-header', className);
  return (
    <div className={classNames}>
      <div className='container'>
        <div className='header-wrapper'>
          <img alt='image header' />
          <div className='header-info'>
            <h3>Good Morning</h3>
            <TextInfo>{children}</TextInfo>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
  children: {},
};

export default Header;
