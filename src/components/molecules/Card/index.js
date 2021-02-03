import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

import { H2, TextInfo } from 'components';
const Card = ({ className, title, detail, tips }) => {
  const classNames = classname('m-card', className);
  return (
    <div className={classNames}>
      {!tips && (
        <Fragment>
          <div className='card-title'>
            <H2>{title}</H2>
          </div>
          <div className='card-detail'>
            <TextInfo>{detail}</TextInfo>
          </div>
        </Fragment>
      )}
      {tips && (
        <Fragment>
          <div className='card-title'>
            <H2>{title}</H2>
          </div>
          <div className='card-detail'>
            <TextInfo>{detail}</TextInfo>
          </div>
      </Fragment>
      )}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  detail: PropTypes.string,
  tips: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  title: '',
  detail: '',
  tips: false
};

export default Card;
