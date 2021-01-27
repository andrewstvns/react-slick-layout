import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const H1 = ({ className, children }) => {
  const classNames = classname('a-h1', className);
  return (
    <div className={classNames}>
      <h1>{children}</h1>
    </div>
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
