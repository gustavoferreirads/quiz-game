import React from 'react';
import { View } from 'react-native';
import * as PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);
Container.defaultProps = {
  style: {},
};
Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
};

export default Container;
