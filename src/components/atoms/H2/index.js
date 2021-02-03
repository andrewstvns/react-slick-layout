import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H2 = ({ className, children }) => {
  const classNames = classname('a-h2', className);
  return (
    <h2 className={classNames}>{children}</h2>
  )
}

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H2.defaultProps = {
  className: '',
  children: {},
};

export default H2;
