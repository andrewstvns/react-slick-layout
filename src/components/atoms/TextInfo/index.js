import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const TextInfo = ({ className, children }) => {
  const classNames = classname('a-text-info', className);
  return (
    <div className={classNames}>
      <p>{children}</p>
    </div>
  )
}

TextInfo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TextInfo.defaultProps = {
  className: '',
  children: {},
};

export default TextInfo;
