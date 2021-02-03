import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H1 = ({ className, children }) => {
  const classNames = classname('a-h1', className);
  return (
    <h1 className={classNames}>{children}</h1>
  )
}

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H1.defaultProps = {
  className: '',
  children: {},
};

export default H1;
