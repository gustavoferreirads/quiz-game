import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { colors } from '../../styles';

export const withLoading = Component => {
  const WithLoading = ({ questions, ...props }) =>
    questions.length > 0 ? (
      <Component {...props} />
    ) : (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={0} color={colors.primary} />
      </View>
    );

  WithLoading.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return connect(({ Quiz }) => ({ questions: Quiz.questions }))(WithLoading);
};
