import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const CardList = ({ className, children }) => {
  const classNames = classname('m-card-list', className);
  return (
    <div className={classNames}>
      <p>{children}</p>
    </div>
  )
}

CardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardList.defaultProps = {
  className: '',
  children: {},
};

export default CardList;
