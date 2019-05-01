import React from 'react';
import * as PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Answer = ({ option, text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.contentOption}>
      <Text style={styles.option}>{option}</Text>
    </View>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

Answer.defaultProps = {};
Answer.propTypes = {
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Answer;
