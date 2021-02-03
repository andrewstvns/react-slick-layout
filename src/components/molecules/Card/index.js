import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { H2, TextInfo } from 'components';
const Card = ({ className, title, detail, tips, tipsDetail }) => {
  const classNames = classname('m-card', className, {
    'card-tips': tips
  });
  return (
    <Fragment>
      {!tips && (
        <div className={classNames}>
          <div className='card-title'>
            <H2>{title}</H2>
          </div>
          <div className='card-detail'>
            <TextInfo>{detail}</TextInfo>
          </div>
        </div>
      )}
      {tips && (
        <div className={classNames}>
          <div className='content-detail'>
            <TextInfo>{tipsDetail}</TextInfo>
            <div className='detail-button'>
              <button>button arrow</button>
            </div>
          </div>
      </div>
      )}
    </Fragment>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  tipsDetail: PropTypes.string,
  tips: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  title: '',
  detail: '',
  tipsDetail: '',
  tips: false
};

export default Card;
