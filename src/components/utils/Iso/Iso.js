import React from 'react';
import PropTypes from 'prop-types';
import IsoBlack from '../../../assets/isotipo/RollingCodeIsoNegro.png';
import IsoWhite from '../../../assets/isotipo/RollingCodeIsoBlanco.png';

const Iso = ({ width, height, variant }) => {
  return <img src={ variant === 'black' ? IsoBlack : IsoWhite } alt="Isotipo RollingCode" width={width} height={height} />;
};

Iso.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'black']),
};

Iso.defaultProps = {
  width: '150',
  height: '100%',
  variant: 'black',
};

export default Iso;
