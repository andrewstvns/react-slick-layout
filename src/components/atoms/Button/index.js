import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({ className, children }) => {
  const classNames = classname('a-button', className);
  return (
    <div className={classNames}>
      <button>{children}</button>
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  children: {},
};

export default Button;
