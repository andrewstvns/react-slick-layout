import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Header = ({ className, children }) => {
  const classNames = classname('m-header', className);
  return (
    <div className={classNames}>
      <p>{children}</p>
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
