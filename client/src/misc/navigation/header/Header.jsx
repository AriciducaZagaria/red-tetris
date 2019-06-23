import React from 'react';
import PropTypes from 'prop-types';
import Menu from './classic-menu/Menu';
import './Header.scss';

const header = props => (
  <header className={['header', props.variant].join(' ')}>
    <Menu variant={props.variant} color={props.color} />
  </header>
);

header.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
};

header.defaultProps = {
  color: 'dark',
  variant: 'full',
};

export default header;
