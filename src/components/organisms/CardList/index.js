import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { Card } from 'components';

const CardList = ({ className, data }) => {
  const classNames = classname('o-card-list', className);
  console.log('component:', data)
  return (
    <div className={classNames}>
      {data.map((val, idx) => (
        <Fragment key={`crd-${idx}`}>
          <Card 
            title={val.title} 
            detail={val.detail} 
            tips={val.tips} 
            tipsDetail={val.tipsDetail}
          />
        </Fragment>
      ))}
    </div>
  )
}

CardList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.string,
      detail: PropTypes.string,
      tipsDetail: PropTypes.string,
      tips: PropTypes.bool
    })
  )
};

CardList.defaultProps = {
  className: '',
  data: []
};

export default CardList;
