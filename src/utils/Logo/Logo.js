import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getLogoSelected from '../helpers/getLogoSelected';

const Logo = ({
  width, height, area, variant,
}) => {
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const selectedLogo = getLogoSelected(area, variant);
    setLogo(selectedLogo);
  }, []);

  return <img src={logo} alt="Logo RollingCode" width={width} height={height} />;
};

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  area: PropTypes.oneOf(['default', 'school', 'studio', 'labs']),
  variant: PropTypes.oneOf(['color', 'white', 'black']),
};

Logo.defaultProps = {
  width: '300',
  height: '100%',
  area: 'default',
};

export default Logo;
