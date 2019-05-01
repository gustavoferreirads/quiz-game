import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ style, children, type, onPress }) => (
  <TouchableOpacity style={[styles.container, style, styles[`button-${type}`]]} onPress={onPress}>
    <Text style={[styles.text, styles[`text-${type}`]]}>{children}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  type: 'inline',
  onPress: () => {},
  style: {},
  children: <Fragment />,
};

Button.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
  type: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
