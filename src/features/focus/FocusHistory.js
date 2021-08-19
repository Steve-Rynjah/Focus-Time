import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { FONT_SIZES, SPACING } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <React.Fragment>
            <Text style={styles.title}> Things we've focused on </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              keyExtractor={(_,index)=> index.toString()}
              renderItem={({ item, index }) => (
                <Text style={styles.historyItem(item.status)}>
                  {item.subject}
                </Text>
              )}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </React.Fragment>
        )}
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? '#e81010' : '#04ba37',
    fontSize: FONT_SIZES.md,
  }),
  title: {
    color: '#FFF',
    fontSize: FONT_SIZES.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: SPACING.md,
  },
});
