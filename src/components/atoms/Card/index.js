import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Card = ({ className, children }) => {
  const classNames = classname('a-card', className);
  return (
    <div className={classNames}>
      <div>{children}</div>
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: '',
  children: {},
};

export default Card;
