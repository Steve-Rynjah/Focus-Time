import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { COLORS } from '../../utils/colors';
import { FONT_SIZES, SPACING } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What Would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: SPACING.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'center',
  },
  inputContainer: {
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.md
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.lg,
    marginStart:10
  },
});
