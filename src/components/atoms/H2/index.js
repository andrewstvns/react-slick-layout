import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H2 = ({ className, children }) => {
  const classNames = classname('a-h2', className);
  return (
    <div className={classNames}>
      <h2>{children}</h2>
    </div>
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
