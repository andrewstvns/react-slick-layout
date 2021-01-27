import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Footer = ({ className, children }) => {
  const classNames = classname('m-footer', className);
  return (
    <div className={classNames}>
      <p>{children}</p>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
  children: {},
};

export default Footer;
