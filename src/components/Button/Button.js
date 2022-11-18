import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Whatsapp from '../../utils/Icons/Whatsapp';

const Button = ({
  primary, secondary, whatsapp, backgroundColor, size, label, ...props
}) => {
  const mode = (primary && 'button--primary') || (secondary && 'button--secondary') || (whatsapp && 'button--whatsapp');

  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      { whatsapp && <Whatsapp style={{ marginRight: '5px' }} /> }
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  whatsapp: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
