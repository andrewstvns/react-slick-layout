import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { Card } from 'components';

const CardList = ({ className, title, detail }) => {
  const classNames = classname('o-card-list', className);
  return (
    <div className={classNames}>
      <Card title={title} detail={detail} />
    </div>
  )
}

CardList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string
};

CardList.defaultProps = {
  className: '',
  title: '',
  detail: ''
};

export default CardList;
